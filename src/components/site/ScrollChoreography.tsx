import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function ScrollChoreography({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    let cancelled = false;
    let cleanup = () => {};

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      const ctx = gsap.context(() => {
        const bar = document.querySelector<HTMLElement>(".cine-progress");
        const progressST = bar
          ? ScrollTrigger.create({
              start: 0,
              end: () => document.documentElement.scrollHeight - window.innerHeight,
              onUpdate: (self) => {
                bar.style.transform = `scaleX(${self.progress})`;
              },
            })
          : null;

        const selectors = [
          "[data-cine]",
          "main section > h1",
          "main section > h2",
          "main section > h3",
          "main section > p",
          "main .surface-card",
          "main .surface-card-2",
        ].join(",");

        const targets = gsap.utils.toArray<HTMLElement>(selectors).filter((el) => {
          return !el.closest("[data-cine-handled]") && !el.closest("[data-no-batch]");
        });

        targets.forEach((el) => el.setAttribute("data-cine-handled", ""));

        gsap.set(targets, { y: 36, opacity: 0 });

        const batch = ScrollTrigger.batch(targets, {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });

        const parallaxEls = gsap.utils.toArray<HTMLElement>("[data-parallax]");
        const parallaxST = parallaxEls.map((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.2");
          return gsap.to(el, {
            yPercent: -20 * speed,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        cleanup = () => {
          progressST?.kill();
          batch.forEach((t) => t.kill());
          parallaxST.forEach((t) => t.scrollTrigger?.kill());
          targets.forEach((el) => {
            el.removeAttribute("data-cine-handled");
            gsap.set(el, { clearProps: "all" });
          });
          if (bar) bar.style.transform = "scaleX(0)";
        };
      });

      if (!cancelled) {
        await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
      }

      if (cancelled) {
        cleanup();
        ctx.revert();
        return;
      }
    };

    void init();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [pathname]);

  return <>{children}</>;
}

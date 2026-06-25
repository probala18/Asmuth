import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Cinematic ScrollChoreography
 * - Global scroll progress bar (top of viewport)
 * - GSAP ScrollTrigger.batch fade/slide-up reveals for headings, sections and cards
 * - Subtle parallax for elements tagged data-parallax
 * - Re-initializes on route change
 */
export function ScrollChoreography({ children }: { children: ReactNode }) {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      // Progress bar
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

      // Wait a frame so route content is in the DOM
      await new Promise((r) => requestAnimationFrame(r));

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
        // Avoid double-animating nested matches
        return !el.closest("[data-cine-handled]");
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

      // Parallax targets
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
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [location]);

  return <>{children}</>;
}

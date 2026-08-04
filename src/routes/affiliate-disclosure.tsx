import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal } from "@/components/site/motion";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — genCART" },
      { name: "description", content: "Details on how genCART uses affiliate links to fund our lab and testing team." },
    ],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const container = containerRef.current;
        const card = cardRef.current;
        if (!container || !card) return;

        const sections = card.querySelectorAll<HTMLElement>("[data-disclosure-section]");

        // Set initial states for progressive scroll reveal inside pinned card
        sections.forEach((sec, i) => {
          if (i > 0) {
            gsap.set(sec, { opacity: 0.35, y: 12 });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top+=100",
            end: "+=120%",
            pin: card,
            pinSpacing: true,
            scrub: 0.6,
          },
        });

        sections.forEach((sec, i) => {
          if (i > 0) {
            tl.to(
              sec,
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
              (i - 1) * 0.8
            );
          }
        });

        cleanup = () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => {
        mm.revert();
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-6 lg:px-10 pt-32 pb-24 min-h-[140vh]">
      <div ref={cardRef} className="surface-card-2 p-8 lg:p-14 border border-[var(--hairline)] rounded-3xl space-y-10 shadow-2xl backdrop-blur-xl">
        <div className="space-y-4 border-b border-[var(--hairline)] pb-8">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Financial Transparency</p>
          <SplitTextReveal text="Affiliate Disclosure" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            How genCART funds independent reviews. We believe in complete financial transparency with our readers.
          </p>
        </div>

        <div className="space-y-8 font-sans leading-relaxed text-foreground/90">
          <div data-disclosure-section className="space-y-3 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)]">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--emerald-accent)]" />
              1. How We Earn Commission
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              When you click a link on genCART to purchase a product from Amazon or other retail partners, we receive a small commission from that sale. This does not increase the price you pay; the retailer shares a portion of their standard margin with us as a referral partner.
            </p>
          </div>

          <div data-disclosure-section className="space-y-3 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)]">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--cyan-accent)]" />
              2. Amazon Associate Program
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              genCART is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </div>

          <div data-disclosure-section className="space-y-3 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)]">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--emerald-accent)]" />
              3. Separation of Editorial and Affiliate Business
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our writers, benchmark engineers, and laboratory testers do not know which affiliate programs genCART has or what commission rates are earned from various stores. The editorial evaluation of a product's performance is conducted without commercial influence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


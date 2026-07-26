/* ─── genCART — Recommended For You Section ────────────────── */
import { useEffect, useRef, useMemo } from "react";
import { motion } from "motion/react";
import { ProductCard } from "@/components/site/ProductCards";
import { products } from "@/data";
import { getUserPreferences } from "@/lib/preferences";
import { getRecommendedProducts } from "@/lib/recommendations";
import { ChevronRight } from "lucide-react";

export function PersonalizedRecommendations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const recommendedProducts = useMemo(() => {
    const prefs = getUserPreferences();
    return getRecommendedProducts(prefs, products).slice(0, 6);
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let isMounted = true;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section || !isMounted) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const anim = gsap.from(section.querySelectorAll(".rec-card"), {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      cleanup = () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    })();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, []);

  if (recommendedProducts.length === 0) return null;

  return (
    <section
      id="recommendations-section"
      ref={sectionRef}
      data-no-batch
      className="px-4 sm:px-6 lg:px-10 py-10"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              Recommended for you
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Discover what deserves your attention
            </h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground">
            Fresh editorial picks <ChevronRight className="size-4" />
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.slug} className="rec-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

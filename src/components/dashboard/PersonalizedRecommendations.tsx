/* ─── genCART — Recommended For You Section ────────────────── */
import { useEffect, useRef, useMemo } from "react";
import { motion } from "motion/react";
import { ProductCard } from "@/components/site/ProductCards";
import { products } from "@/data";
import { getUserPreferences } from "@/lib/preferences";
import { getRecommendedProducts } from "@/lib/recommendations";

export function PersonalizedRecommendations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const recommendedProducts = useMemo(() => {
    const prefs = getUserPreferences();
    return getRecommendedProducts(prefs, products).slice(0, 6);
  }, []);

  // GSAP ScrollTrigger section reveal
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
        y: 40,
        stagger: 0.1,
        duration: 0.7,
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
      className="px-4 sm:px-6 lg:px-10 py-12"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header — Clean, no explanatory subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
        >
          Recommended for you
        </motion.h2>

        {/* Product Cards Grid — Uses existing ProductCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

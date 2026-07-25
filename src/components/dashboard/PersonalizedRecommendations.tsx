import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star, Bookmark, Scale, ArrowRight, Sparkles, Check } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { dashboardData, type RecommendedProduct } from "@/data/personalizedDashboardData";

export function PersonalizedRecommendations() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        stagger: 0.12,
        duration: 0.8,
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

  return (
    <section
      id="recommendations-section"
      ref={sectionRef}
      data-no-batch
      className="px-6 lg:px-10 py-20 bg-[var(--surface)]/30 border-t border-[var(--hairline)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ── Section Header & Context Tag ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 surface-card text-xs font-mono-tech uppercase tracking-[0.25em] text-[var(--emerald-accent)] border border-[var(--hairline)]">
              <Sparkles className="size-3.5 text-[var(--cyan-accent)]" />
              PICKED FOR YOU
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Recommendations based on <span className="text-accent-gradient">your activity</span>.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Curated signal picks based on your interest in Computing, Audio & Wearables.
            </p>
          </div>

          {/* Context Badge */}
          <div className="shrink-0 font-mono-tech text-xs text-muted-foreground bg-[var(--surface-2)] px-4 py-2 rounded-xl border border-[var(--hairline)]">
            Active Interest: <span className="text-foreground font-semibold">Computing & Audio</span>
          </div>
        </div>

        {/* ── Recommendation Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboardData.recommendations.map((product) => (
            <RecommendationCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="pt-8 text-center border-t border-[var(--hairline)]/50">
          <p className="text-xs text-muted-foreground font-mono-tech mb-4">
            Want to fine-tune your algorithm? Update your preferred product categories anytime.
          </p>
          <Link to="/collections">
            <ShimmerButton className="btn-accent">
              Explore All Collections
              <ArrowRight className="size-4" />
            </ShimmerButton>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ─── Recommendation Card Component ─────────────────── */
function RecommendationCard({ product }: { product: RecommendedProduct }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rec-card surface-card-2 p-6 rounded-3xl border border-[var(--hairline)] shadow-lg hover:shadow-2xl hover:border-[var(--emerald-accent)] transition-all flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Reason Badge at Top */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)] bg-[var(--emerald-accent)]/10 px-2.5 py-1 rounded-full border border-[var(--emerald-accent)]/20 truncate">
          {product.reason}
        </span>
        {product.badge && (
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground bg-[var(--surface-2)] px-2 py-1 rounded-md border border-[var(--hairline)] shrink-0">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--surface)] mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
          style={{ background: `radial-gradient(circle, ${product.accent}, transparent)` }}
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-[var(--emerald-accent)]">
              <Star className="size-3.5 fill-current" />
              {product.rating} <span className="text-[10px] text-muted-foreground font-normal">({product.reviewCount})</span>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-[var(--emerald-accent)] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 pt-2">
            <span className="font-display text-2xl font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Tech Specs Summary List */}
        <div className="space-y-1.5 py-3 border-y border-[var(--hairline)] text-xs text-muted-foreground font-mono-tech">
          {product.specs.map((s, idx) => (
            <div key={idx} className="flex justify-between items-center text-[11px]">
              <span className="text-muted-foreground">{s.label}:</span>
              <span className="text-foreground font-medium">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons: Save, Compare, View Product */}
        <div className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2.5 rounded-xl surface-card text-muted-foreground hover:text-[var(--emerald-accent)] border border-[var(--hairline)] hover:border-[var(--emerald-accent)] transition-all"
              title="Save to Wishlist"
            >
              <Bookmark className="size-4" />
            </button>
            <Link
              to="/compare"
              className="p-2.5 rounded-xl surface-card text-muted-foreground hover:text-foreground border border-[var(--hairline)] transition-all"
              title="Add to Compare"
            >
              <Scale className="size-4" />
            </Link>
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="btn-accent inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold"
          >
            View Product
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, GitCompare, Sparkles } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import { comparisons } from "@/data/comparisons";
import { products } from "@/data";

export const Route = createFileRoute("/compare/")({
  head: () => ({
    meta: [
      { title: "Compare Tech side-by-side — AETHER" },
      { name: "description", content: "Compare premium laptops, headphones, monitors, and wearables side-by-side. Unbiased specs, clear winner." },
    ],
  }),
  component: CompareHubPage,
});

function CompareHubPage() {
  const navigate = useNavigate();
  const [productA, setProductA] = useState("");
  const [productB, setProductB] = useState("");

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productA || !productB) return;
    if (productA === productB) return;

    // Check if there is an existing comparison for these products
    const existing = comparisons.find(
      (c) =>
        (c.products.includes(productA) && c.products.includes(productB)) ||
        c.slug === `${productA}-vs-${productB}` ||
        c.slug === `${productB}-vs-${productA}`
    );

    if (existing) {
      navigate({ to: `/compare/${existing.slug}` });
    } else {
      // Dynamic comparison route
      navigate({ to: `/compare/${productA}-vs-${productB}` });
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">Spec Matrix</p>
          <SplitTextReveal text="Compare side-by-side" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Choose any two tech flagships. We align their specs, prices, and <HandUnderline>identify the objective winner</HandUnderline>.
          </p>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-4xl mx-auto surface-card p-8 md:p-12 rounded-3xl border border-[var(--hairline)] relative">
          <div className="absolute -left-16 -top-16 size-48 rounded-full blur-3xl opacity-10" style={{ background: "var(--gradient-accent)" }} />
          
          <form onSubmit={handleCompare} className="space-y-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
              {/* Product A Select */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">Product A</label>
                <select
                  value={productA}
                  onChange={(e) => setProductA(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                >
                  <option value="">Select product...</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug} disabled={p.slug === productB}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Icon */}
              <div className="flex justify-center pt-6 md:pt-0">
                <div className="size-10 rounded-full bg-[var(--surface-2)] border border-[var(--hairline)] flex items-center justify-center text-muted-foreground">
                  <GitCompare className="size-5" />
                </div>
              </div>

              {/* Product B Select */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">Product B</label>
                <select
                  value={productB}
                  onChange={(e) => setProductB(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                >
                  <option value="">Select product...</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug} disabled={p.slug === productA}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!productA || !productB}
                className="btn-accent inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare Products <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Curated comparisons */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Editor's Shortlists</p>
            <h2 className="font-display text-3xl font-semibold">Featured Head-to-Head Comparisons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparisons.map((c) => {
              const prodA = products.find((p) => p.slug === c.products[0]);
              const prodB = products.find((p) => p.slug === c.products[1]);

              return (
                <TiltCard key={c.slug} className="surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] flex flex-col justify-between h-full group relative overflow-hidden" max={4}>
                  <div className="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none" />
                  
                  <div className="space-y-4 relative">
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[var(--emerald-accent)] font-semibold bg-[var(--surface-2)] px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {c.excerpt}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-[var(--hairline)] mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {prodA && prodB && (
                        <div className="flex -space-x-4">
                          <img src={prodA.image} alt={prodA.name} className="size-10 rounded-full border-2 border-background object-cover bg-background" />
                          <img src={prodB.image} alt={prodB.name} className="size-10 rounded-full border-2 border-background object-cover bg-background" />
                        </div>
                      )}
                      <span className="text-xs text-muted-foreground font-mono-tech">{c.publishedAt}</span>
                    </div>

                    <Link
                      to={`/compare/${c.slug}`}
                      className="font-semibold text-xs text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      Compare Specs <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Spec Helper Alert */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-4xl mx-auto surface-card p-6 rounded-2xl border border-dashed border-[var(--hairline)] flex items-start gap-4">
          <div className="size-8 rounded-full bg-[var(--surface-2)] border border-[var(--hairline)] flex items-center justify-center shrink-0 text-[var(--emerald-accent)]">
            <Sparkles className="size-4" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm">Dynamic Specs Engine</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              If you compare two products that do not have a curated comparison write-up, our custom spec engine will dynamically generate a side-by-side matrix comparing all registered specs, dimensions, pros/cons, and pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

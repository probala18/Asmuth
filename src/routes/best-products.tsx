import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Star, ArrowRight } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import { categories, products } from "@/data";

export const Route = createFileRoute("/best-products")({
  head: () => ({
    meta: [
      { title: "Best Products & Editorial Picks — genCART" },
      { name: "description", content: "The absolute best tech products across computing, audio, wearables, and mobile. Tested in our labs." },
    ],
  }),
  component: BestProductsPage,
});

function BestProductsPage() {
  // Group products by category and grab the top rated in each
  const bestByCategory = categories.map((cat) => {
    const catProducts = products
      .filter((p) => p.categorySlug === cat.slug)
      .sort((a, b) => b.rating - a.rating);
    
    return {
      category: cat,
      topProduct: catProducts[0],
      runnerUp: catProducts[1],
    };
  });

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">Gold Standards</p>
          <SplitTextReveal text="Best Tech Picks" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            The definitive genCART ranking. Only products that achieve <HandUnderline>exceptional benchmarks</HandUnderline> in our laboratory are awarded.
          </p>
        </div>
      </section>

      {/* Categories Grid of Best Gear */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {bestByCategory.map(({ category, topProduct, runnerUp }) => {
            if (!topProduct) return null;

            return (
              <div 
                key={category.slug}
                className="surface-card rounded-3xl border border-[var(--hairline)] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 p-8 md:p-12 relative"
              >
                <div className="absolute -left-12 -top-12 size-48 rounded-full blur-3xl opacity-10" style={{ background: "var(--gradient-accent)" }} />
                
                {/* Category Info */}
                <div className="space-y-6 flex flex-col justify-between relative">
                  <div className="space-y-4">
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)] bg-[var(--surface-2)] px-3 py-1 rounded-full font-bold">
                      {category.name}
                    </span>
                    <h2 className="font-display text-3xl font-bold">{category.name} Winner</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We've tested {category.productCount} models in {category.name.toLowerCase()} to find the absolute best option.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[var(--hairline)]/50">
                    <Link
                      to={`/category/${category.slug}`}
                      className="font-semibold text-xs text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1 group"
                    >
                      Browse full category shortlisted specs <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Top Product Showcase */}
                <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1.5fr] gap-6 items-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]">
                    <img src={topProduct.image} alt={topProduct.name} className="size-full object-cover" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-[var(--emerald-accent)] text-background text-[8px] font-mono-tech font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Award className="size-2.5" /> Best Choice
                      </span>
                      <div className="flex items-center gap-1 text-[var(--emerald-accent)] text-xs font-mono font-bold">
                        <Star className="size-3.5 fill-current" /> {topProduct.rating}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold">{topProduct.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {topProduct.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <Link to={`/product/${topProduct.slug}`} className="btn-accent rounded-full px-4 py-2 text-xs font-semibold">
                        Specs & Pricing
                      </Link>
                      {runnerUp && (
                        <Link to={`/product/${runnerUp.slug}`} className="btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold">
                          Runner up: {runnerUp.name}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

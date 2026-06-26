import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Award, Star, ArrowLeft, Check, ShieldCheck, Heart } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import { getCategory, getProductsByCategory, categories } from "@/data";

export const Route = createFileRoute("/best/$category")({
  parseParams: (params) => ({
    category: params.category,
  }),
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    return {
      meta: [
        { title: cat ? `Best ${cat.name} of 2026 — AETHER` : "Best Products — AETHER" },
        { name: "description", content: cat ? `Laboratory benchmarks and rankings of the best ${cat.name.toLowerCase()} products.` : "Best products." },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) {
      throw notFound();
    }
    const catProducts = getProductsByCategory(cat.slug).sort((a, b) => b.rating - a.rating);
    return { category: cat, catProducts };
  },
  component: BestCategoryPage,
});

function BestCategoryPage() {
  const { category, catProducts } = Route.useLoaderData();
  
  const winner = catProducts[0];
  const runners = catProducts.slice(1);

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/best-products"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            All Best Picks
          </Link>

          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] block mb-3">
            Category Awards
          </span>
          <SplitTextReveal text={`Best in ${category.name}`} className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-xl text-muted-foreground max-w-xl">
            Out of {category.productCount} models assessed, <HandUnderline>these {catProducts.length} devices</HandUnderline> represent the highest standard of engineering.
          </p>
        </div>
      </section>

      {/* Winner Spotlight */}
      {winner && (
        <section className="px-6 lg:px-10 py-8">
          <div className="max-w-6xl mx-auto surface-card p-8 md:p-12 rounded-3xl border border-[var(--emerald-accent)]/40 relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
            <div className="absolute -left-12 -top-12 size-64 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-accent)" }} />
            
            <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)] relative z-10">
              <img src={winner.image} alt={winner.name} className="size-full object-cover" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="bg-[var(--emerald-accent)] text-background text-[10px] font-mono-tech font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Award className="size-3.5" /> 2026 Winner
                </span>
                <span className="text-xs font-mono-tech text-muted-foreground">{winner.brand}</span>
              </div>

              <h2 className="font-display text-3xl lg:text-5xl font-bold">{winner.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{winner.shortDescription}</p>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`size-4 ${i < Math.floor(winner.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{winner.rating} / 5 ({winner.reviewCount} reviews)</span>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed font-sans">{winner.description}</p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--hairline)]/50">
                <a 
                  href={winner.affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-accent rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-1.5"
                >
                  Buy on Amazon <Award className="size-3.5" />
                </a>
                <Link to={`/product/${winner.slug}`} className="btn-ghost-glow rounded-full px-6 py-3 text-sm font-semibold">
                  Full specifications
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Honorable Mentions / Runner ups */}
      {runners.length > 0 && (
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-8">Honorable Mentions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {runners.map((p, idx) => (
                <TiltCard key={p.slug} className="surface-card p-6 rounded-3xl border border-[var(--hairline)] flex flex-col justify-between h-full relative" max={3}>
                  <div className="space-y-4">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[var(--surface-2)]">
                      <img src={p.image} alt={p.name} className="size-full object-cover" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono-tech text-[9px] uppercase tracking-wider text-muted-foreground">Rank #{idx + 2}</span>
                      <div className="flex items-center gap-1 text-[var(--emerald-accent)] text-xs font-mono font-bold">
                        <Star className="size-3 fill-current" /> {p.rating}
                      </div>
                    </div>
                    <h4 className="font-display text-xl font-bold">{p.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{p.shortDescription}</p>
                  </div>

                  <div className="pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
                    <span className="font-display text-lg font-bold">${p.price}</span>
                    <Link to={`/product/${p.slug}`} className="btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold">
                      Explore Gear
                    </Link>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

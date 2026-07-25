import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, X, ShieldAlert, Award, Star, ExternalLink } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { getComparison } from "@/data/comparisons";
import { getProduct, products } from "@/data";
import type { Comparison, Product } from "@/types";

export const Route = createFileRoute("/compare/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    // Try curated
    const curated = getComparison(params.slug);
    if (curated) {
      return {
        meta: [
          { title: `${curated.title} — Comparison · genCART` },
          { name: "description", content: curated.excerpt },
        ],
      };
    }

    // Try dynamic parse
    const parts = params.slug.split("-vs-");
    if (parts.length === 2) {
      const prodA = getProduct(parts[0]);
      const prodB = getProduct(parts[1]);
      if (prodA && prodB) {
        return {
          meta: [
            { title: `${prodA.name} vs ${prodB.name} — Specs Match · genCART` },
            { name: "description", content: `Compare ${prodA.name} and ${prodB.name} specs, prices, and features side-by-side.` },
          ],
        };
      }
    }

    return {
      meta: [{ title: "Product Comparison — genCART" }],
    };
  },
  loader: ({ params }) => {
    // 1. Try curated comparison
    let comparison = getComparison(params.slug);
    let productA: Product | undefined;
    let productB: Product | undefined;

    if (comparison) {
      productA = getProduct(comparison.products[0]);
      productB = getProduct(comparison.products[1]);
    } else {
      // 2. Try dynamic parse
      const parts = params.slug.split("-vs-");
      if (parts.length === 2) {
        productA = getProduct(parts[0]);
        productB = getProduct(parts[1]);

        if (productA && productB) {
          // Construct a dynamic Comparison object
          const dynamicSpecs: Comparison["specs"] = [];
          
          // Collect all specs from A and B
          const specLabels = Array.from(
            new Set([
              ...productA.specs.map((s) => s.label),
              ...productB.specs.map((s) => s.label),
            ])
          );

          specLabels.forEach((label) => {
            const valA = productA!.specs.find((s) => s.label === label)?.value || "N/A";
            const valB = productB!.specs.find((s) => s.label === label)?.value || "N/A";
            
            // Guess a winner if price, weight, or battery
            let winnerSlug: string | null = null;
            if (label.toLowerCase().includes("price")) {
              winnerSlug = productA!.price < productB!.price ? productA!.slug : productB!.slug;
            } else if (label.toLowerCase().includes("battery")) {
              winnerSlug = valA.includes("h") && valB.includes("h") 
                ? (parseFloat(valA) > parseFloat(valB) ? productA!.slug : productB!.slug)
                : null;
            }

            dynamicSpecs.push({
              label,
              values: [
                { productSlug: productA!.slug, value: valA, isWinner: winnerSlug === productA!.slug },
                { productSlug: productB!.slug, value: valB, isWinner: winnerSlug === productB!.slug },
              ],
            });
          });

          const winnerSlug = productA.rating >= productB.rating ? productA.slug : productB.slug;

          comparison = {
            slug: params.slug,
            title: `${productA.name} vs. ${productB.name}`,
            excerpt: `Side-by-side dynamic specs analysis of ${productA.name} and ${productB.name}.`,
            category: productA.category === productB.category ? productA.category : "Cross-Category",
            products: [productA.slug, productB.slug],
            image: productA.image,
            publishedAt: new Date().toISOString().split("T")[0],
            specs: dynamicSpecs,
            verdict: `Based on customer satisfaction metrics and expert evaluation, the ${
              productA.slug === winnerSlug ? productA.name : productB.name
            } is currently our recommended choice for overall performance and value.`,
            winner: winnerSlug,
          };
        }
      }
    }

    if (!comparison || !productA || !productB) {
      throw notFound();
    }

    return { comparison, productA, productB };
  },
  component: CompareDetailPage,
});

function CompareDetailPage() {
  const { comparison, productA, productB } = Route.useLoaderData();

  return (
    <>
      <section className="relative pt-36 pb-12 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/compare"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Comparison Hub
          </Link>

          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] block mb-3">
            {comparison.category} Clash
          </span>
          <SplitTextReveal text={comparison.title} className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4" />
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            {comparison.excerpt}
          </p>
        </div>
      </section>

      {/* Head-to-Head Cards */}
      <section className="px-6 lg:px-10 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Card A */}
          <div className={`surface-card p-6 md:p-8 rounded-3xl border ${comparison.winner === productA.slug ? "border-[var(--emerald-accent)]/50" : "border-[var(--hairline)]"} flex flex-col justify-between relative`}>
            {comparison.winner === productA.slug && (
              <span className="absolute top-4 right-4 bg-[var(--emerald-accent)] text-background text-[9px] font-bold font-mono-tech px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Award className="size-3" /> Winner
              </span>
            )}
            
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-2)]">
                <img src={productA.image} alt={productA.name} className="size-full object-cover" />
              </div>
              <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)]">{productA.brand}</p>
              <h3 className="font-display text-2xl font-bold">{productA.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{productA.shortDescription}</p>
              
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[var(--emerald-accent)]">{productA.rating}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`size-3 ${i < Math.floor(productA.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({productA.reviewCount})</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
              <span className="font-display text-3xl font-bold text-foreground">${productA.price}</span>
              <div className="flex gap-2">
                <Link to={`/product/${productA.slug}`} className="btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold">
                  Specs
                </Link>
                <a href={productA.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-accent rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1">
                  Amazon <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card B */}
          <div className={`surface-card p-6 md:p-8 rounded-3xl border ${comparison.winner === productB.slug ? "border-[var(--emerald-accent)]/50" : "border-[var(--hairline)]"} flex flex-col justify-between relative`}>
            {comparison.winner === productB.slug && (
              <span className="absolute top-4 right-4 bg-[var(--emerald-accent)] text-background text-[9px] font-bold font-mono-tech px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Award className="size-3" /> Winner
              </span>
            )}
            
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-2)]">
                <img src={productB.image} alt={productB.name} className="size-full object-cover" />
              </div>
              <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)]">{productB.brand}</p>
              <h3 className="font-display text-2xl font-bold">{productB.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{productB.shortDescription}</p>
              
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[var(--emerald-accent)]">{productB.rating}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`size-3 ${i < Math.floor(productB.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({productB.reviewCount})</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
              <span className="font-display text-3xl font-bold text-foreground">${productB.price}</span>
              <div className="flex gap-2">
                <Link to={`/product/${productB.slug}`} className="btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold">
                  Specs
                </Link>
                <a href={productB.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-accent rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1">
                  Amazon <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Match Grid */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold">Specification Comparison</h3>
            <p className="text-sm text-muted-foreground mt-1">Direct spec alignment highlighting the superior metric.</p>
          </div>
          
          <div className="surface-card rounded-3xl overflow-hidden border border-[var(--hairline)]">
            <div className="grid grid-cols-[1.5fr_2fr_2fr] px-6 py-4 bg-[var(--surface-2)]/60 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Metric</span>
              <span>{productA.name}</span>
              <span>{productB.name}</span>
            </div>

            {comparison.specs.map((spec, i) => {
              const valAObj = spec.values.find((v) => v.productSlug === productA.slug);
              const valBObj = spec.values.find((v) => v.productSlug === productB.slug);
              
              return (
                <div key={i} className="grid grid-cols-[1.5fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] hover:bg-[var(--surface-2)]/30 transition-colors">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">{spec.label}</span>
                  <span className={`text-sm ${valAObj?.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`}>
                    {valAObj?.value || "—"}
                    {valAObj?.isWinner && <span className="inline-block ml-1.5 size-1.5 rounded-full bg-[var(--emerald-accent)]" />}
                  </span>
                  <span className={`text-sm ${valBObj?.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`}>
                    {valBObj?.value || "—"}
                    {valBObj?.isWinner && <span className="inline-block ml-1.5 size-1.5 rounded-full bg-[var(--emerald-accent)]" />}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pros & Cons Comparative */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product A Pros/Cons */}
          <div className="surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] space-y-6">
            <h4 className="font-display font-semibold text-lg border-b border-[var(--hairline)] pb-3">{productA.name} Review</h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)] block mb-2 font-bold">Key Strengths</span>
                <ul className="space-y-2">
                  {productA.pros && productA.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <Check className="size-3.5 text-[var(--emerald-accent)] mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[var(--cyan-accent)] block mb-2 font-bold">Key Drawbacks</span>
                <ul className="space-y-2">
                  {productA.cons && productA.cons.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <X className="size-3.5 text-[var(--cyan-accent)] mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product B Pros/Cons */}
          <div className="surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] space-y-6">
            <h4 className="font-display font-semibold text-lg border-b border-[var(--hairline)] pb-3">{productB.name} Review</h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)] block mb-2 font-bold">Key Strengths</span>
                <ul className="space-y-2">
                  {productB.pros && productB.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <Check className="size-3.5 text-[var(--emerald-accent)] mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[var(--cyan-accent)] block mb-2 font-bold">Key Drawbacks</span>
                <ul className="space-y-2">
                  {productB.cons && productB.cons.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <X className="size-3.5 text-[var(--cyan-accent)] mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor Verdict */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-4xl mx-auto surface-card-2 p-8 md:p-12 rounded-3xl border border-[var(--hairline)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">The Spec Verdict</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Recommended Selection</h3>
          
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {comparison.verdict}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {comparison.winner && (
              <a
                href={comparison.winner === productA.slug ? productA.affiliateUrl : productB.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent rounded-full px-6 py-3 text-xs font-semibold inline-flex items-center gap-2"
              >
                Buy Recommended ({comparison.winner === productA.slug ? productA.name : productB.name}) <ExternalLink className="size-3.5" />
              </a>
            )}
            <Link to="/compare" className="btn-ghost-glow rounded-full px-6 py-3 text-xs font-semibold">
              Compare Other Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

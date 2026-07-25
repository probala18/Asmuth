import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, ShieldCheck, Truck, Cpu, Star, ExternalLink, ArrowLeft } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline, ScrollProgressBar } from "@/components/site/motion";
import { getProduct, getReview, products } from "@/data";

export const Route = createFileRoute("/product/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    const product = getProduct(params.slug);
    return {
      meta: [
        { title: product ? `${product.name} — genCART` : "Product — genCART" },
        { name: "description", content: product ? product.shortDescription : "Browse product details." },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) {
      throw notFound();
    }
    const review = getReview(product.slug);
    return { product, review };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product, review } = Route.useLoaderData();

  // Find related products in the same category
  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  // Fallback if no related products in same category
  const fallbackRelated = related.length > 0 
    ? related 
    : products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <>
      {/* Back button and intro */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-7xl mx-auto">
          <Link 
            to={`/category/${product.categorySlug}`} 
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to {product.category}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            {/* Image display */}
            <TiltCard className="relative aspect-square rounded-3xl overflow-hidden surface-card border border-[var(--hairline)]" max={4}>
              <img src={product.image} alt={product.name} className="size-full object-cover" />
              <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
            </TiltCard>

            {/* Info details */}
            <div className="space-y-6">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                {product.brand} · {product.category}
              </p>
              <SplitTextReveal text={product.name} className="font-display text-5xl lg:text-6xl font-bold tracking-tight" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`size-4 ${
                        i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} · {product.reviewCount} user evaluations</span>
              </div>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-display text-5xl font-bold text-accent-gradient">${product.price}</span>
                {hasDiscount && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={product.affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-accent rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  Buy on Amazon
                  <ExternalLink className="size-4" />
                </a>
                
                {review && (
                  <Link 
                    to={`/reviews/${review.slug}`} 
                    className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold"
                  >
                    Read Expert Review ({review.overallScore.toFixed(1)})
                  </Link>
                )}

                <Link 
                  to="/compare"
                  className="btn-ghost-glow rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center"
                >
                  Compare Tech
                </Link>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)]">
                {[
                  { Icon: ShieldCheck, label: "Tested Integrity" },
                  { Icon: Truck, label: "Best Pricing" },
                  { Icon: Check, label: "Editor Approved" },
                ].map((b) => (
                  <div key={b.label} className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
                    <b.Icon className="size-4 text-[var(--emerald-accent)] shrink-0" /> {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKS & METRICS */}
      <section className="px-6 lg:px-10 py-16 bg-[var(--surface)]/30 border-y border-[var(--hairline)]">
        <div className="max-w-5xl mx-auto surface-card-2 p-10 lg:p-14">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Specifications</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-10 max-w-xl">Technical Specifications & Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between items-center py-3 border-b border-[var(--hairline)]">
                <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                <span className="text-sm font-semibold text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card-2 p-8 border border-[var(--hairline)] rounded-2xl">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4 font-semibold">What We Love</p>
            <ul className="space-y-3">
              {product.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" /> {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="surface-card-2 p-8 border border-[var(--hairline)] rounded-2xl">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4 font-semibold">Keep in Mind</p>
            <ul className="space-y-3">
              {product.cons.map((con) => (
                <li key={con} className="flex items-start gap-3 text-sm text-foreground">
                  <X className="size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FULL VERDICT & PRODUCT DESCRIPTION */}
      <section className="px-6 lg:px-10 py-16 bg-[var(--surface)]/20">
        <div className="max-w-4xl mx-auto surface-card p-10 lg:p-14 text-center border border-[var(--hairline)]">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4">The Overview</p>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            {product.description}
          </p>
          
          <a 
            href={product.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer"
          >
            Check Price on Amazon
            <ExternalLink className="size-4" />
          </a>
        </div>
      </section>

      {/* SIMILAR PRODUCTS */}
      <section className="px-6 lg:px-10 py-16 border-t border-[var(--hairline)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8 text-center">Similar Tech Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((p) => (
              <TiltCard key={p.slug} className="surface-card overflow-hidden group border border-[var(--hairline)] rounded-2xl flex flex-col justify-between">
                <Link to={`/product/${p.slug}`}>
                  <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
                    <img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex justify-between items-center">
                    <div>
                      <span className="font-mono-tech text-[9px] uppercase text-muted-foreground">{p.brand}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-[var(--emerald-accent)] transition-colors">{p.name}</h3>
                    </div>
                    <span className="text-[var(--emerald-accent)] font-display font-semibold">${p.price}</span>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

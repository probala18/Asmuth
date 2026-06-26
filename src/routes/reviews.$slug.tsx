import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, Award, Star, ExternalLink, ArrowLeft } from "lucide-react";
import { SplitTextReveal, ScrollProgressBar, HandUnderline, TiltCard } from "@/components/site/motion";
import { getReview, getProduct, reviews } from "@/data";
import { getComparison } from "@/data/comparisons";

export const Route = createFileRoute("/reviews/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    const review = getReview(params.slug);
    return {
      meta: [
        { title: review ? `${review.title} · AETHER` : "Expert Review · AETHER" },
        { name: "description", content: review ? review.excerpt : "In-depth expert review and benchmarks." },
        { property: "og:title", content: review ? `${review.title} · AETHER` : "Expert Review · AETHER" },
        { property: "og:description", content: review ? review.excerpt : "In-depth expert review." },
        { property: "og:image", content: review?.image },
      ],
    };
  },
  loader: ({ params }) => {
    const review = getReview(params.slug);
    if (!review) {
      throw notFound();
    }
    const product = getProduct(review.productSlug);
    // Find a comparison that features this product
    const comparison = getComparison(`${review.productSlug}-vs-dell-xps-16`) || 
                       getComparison(`${review.productSlug}-vs-competitors`);
    return { review, product, comparison };
  },
  component: DynamicReviewPage,
});

function DynamicReviewPage() {
  const { review, product, comparison } = Route.useLoaderData();

  // Related reviews (excluding current one)
  const relatedReviews = reviews
    .filter((r) => r.slug !== review.slug)
    .slice(0, 3);

  return (
    <>
      {/* Scroll indicator if available in ScrollProgressBar layout */}
      <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Reviews
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Award className="size-4 text-[var(--emerald-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
              {review.badge ? review.badge.replace("-", " ").toUpperCase() : "EXPERT REVIEW"} · LAB TESTED
            </span>
          </div>
          
          <SplitTextReveal text={review.title} className="font-display text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl" />
          
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {review.excerpt}
          </p>

          <div className="flex items-center gap-6 mt-8">
            <span className="font-display text-6xl font-bold text-accent-gradient">
              {review.overallScore.toFixed(1)}
            </span>
            <div>
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`size-4 ${i < Math.floor(review.overallScore / 2) ? "fill-current text-[var(--emerald-accent)]" : "text-muted"}`} 
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                By {review.author} ({review.authorRole}) · {review.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-6xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden surface-card border border-[var(--hairline)]">
          <img src={review.image} alt={review.productName} className="size-full object-cover" />
        </div>
      </section>

      {/* Review Content & Scores */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-12">
          {/* Editorial Content */}
          <div className="space-y-6 text-foreground/90 text-lg leading-relaxed font-sans">
            <h2 className="font-display text-2xl font-bold text-foreground">Lab-Tested Verdict</h2>
            <p className="whitespace-pre-line">{review.content}</p>
            
            {product && (
              <div className="pt-8">
                <div className="surface-card p-6 rounded-2xl border border-[var(--hairline)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h4 className="font-display font-semibold text-lg">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">Check real-time pricing and stock.</p>
                  </div>
                  <a 
                    href={product.affiliateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-accent rounded-full px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    Buy on Amazon <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Scores sidebar */}
          <div className="space-y-8">
            <div className="surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-6">Component Breakdown</p>
              <div className="space-y-6">
                {review.scores.map((score) => (
                  <ScrollProgressBar key={score.label} label={score.label} value={score.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-4">What we loved</p>
            <ul className="space-y-3">
              {review.pros.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card-2 p-8 rounded-3xl border border-[var(--hairline)]">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-accent)] mb-4">Where it stalls</p>
            <ul className="space-y-3">
              {review.cons.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                  <X className="size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table if relevant */}
      {comparison && (
        <section className="px-6 lg:px-10 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-semibold mb-2">Comparative Analysis</h2>
            <p className="text-muted-foreground mb-8">How it benchmarks against key competitors in the category.</p>
            <div className="surface-card rounded-3xl overflow-hidden border border-[var(--hairline)]">
              {comparison.specs.map((spec, i) => (
                <div key={i} className="grid grid-cols-[1.5fr_2fr_2fr] items-center px-6 py-4 border-t border-[var(--hairline)] first:border-t-0 hover:bg-[var(--surface-2)]/50 transition-colors">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-muted-foreground">{spec.label}</span>
                  {spec.values.map((v, idx) => (
                    <span 
                      key={idx} 
                      className={`text-sm ${v.isWinner ? "text-[var(--emerald-accent)] font-semibold" : "text-foreground"}`}
                    >
                      {v.value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-6 surface-card-2 rounded-2xl border border-[var(--hairline)]">
              <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[var(--emerald-accent)] font-bold block mb-2">Editor's Verdict</span>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{comparison.verdict}"
              </p>
              <div className="mt-4">
                <Link 
                  to={`/compare/${comparison.slug}`} 
                  className="text-xs font-semibold text-[var(--emerald-accent)] hover:underline inline-flex items-center gap-1"
                >
                  View full comparison data &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL VERDICT BOX */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-4xl mx-auto surface-card-2 p-10 lg:p-14 text-center rounded-3xl border border-[var(--hairline)] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-4">Overall Verdict</p>
          <p className="font-display text-2xl lg:text-3xl leading-snug font-semibold text-foreground max-w-2xl mx-auto">
            "{review.verdict}"
          </p>
          {product && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href={product.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Buy on Amazon <ExternalLink className="size-4" />
              </a>
              <Link 
                to={`/category/${product.categorySlug}`} 
                className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Browse Alternative Options
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* RELATED REVIEWS */}
      <section className="px-6 lg:px-10 py-16 border-t border-[var(--hairline)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">More Reading</p>
              <h2 className="font-display text-3xl font-semibold">Latest Expert Reviews</h2>
            </div>
            <Link to="/reviews" className="text-xs font-semibold text-[var(--emerald-accent)] hover:underline">
              View all reviews &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReviews.map((r) => (
              <TiltCard key={r.slug} className="surface-card overflow-hidden group flex flex-col h-full relative" max={5}>
                <Link to={`/reviews/${r.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden relative bg-[var(--surface-2)]">
                    <img src={r.image} alt={r.productName} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2 py-0.5 text-xs font-bold font-mono text-[var(--emerald-accent)]">
                      {r.overallScore}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono-tech text-[9px] text-[var(--cyan-accent)] uppercase tracking-wider block mb-2">Review</span>
                      <h3 className="font-display text-base font-semibold group-hover:text-[var(--emerald-accent)] transition-colors line-clamp-2">{r.title}</h3>
                    </div>
                    <div className="pt-4 border-t border-[var(--hairline)]/50 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {r.author}</span>
                      <span>{r.readTime}</span>
                    </div>
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

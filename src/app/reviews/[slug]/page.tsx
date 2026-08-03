"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star, ExternalLink, Award, Check, X, ShieldCheck } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { getReview, reviews } from "@/data/reviews";
import { getProduct, products } from "@/data";

export default function ReviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const review = getReview(slug);
  if (!review) notFound();

  const product = review.productSlug ? getProduct(review.productSlug) : null;
  const otherReviews = reviews.filter((r) => r.slug !== review.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Reviews
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono-tech text-muted-foreground">
              <span className="text-[var(--emerald-accent)] uppercase tracking-widest font-semibold">{review.category}</span>
              <span>·</span>
              <span>By {review.author}</span>
              <span>·</span>
              <span>{review.publishedAt}</span>
            </div>

            <SplitTextReveal text={review.title} className="font-display text-4xl lg:text-6xl font-bold tracking-tight" />
            
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--hairline)] px-4 py-2 rounded-full">
                <span className="font-mono text-xl font-bold text-[var(--emerald-accent)]">{review.overallScore.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground font-mono-tech uppercase">/ 10 Overall Grade</span>
              </div>
              {review.badge && (
                <span className="bg-[var(--emerald-accent)] text-background text-xs font-mono-tech font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Award className="size-3.5" /> {review.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]">
            <img src={review.image} alt={review.title} className="size-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="surface-card-2 p-6 rounded-2xl border border-[var(--hairline)] space-y-3">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--emerald-accent)] font-bold">Lab High Points</span>
              <ul className="space-y-2">
                {review.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="size-4 text-[var(--emerald-accent)] mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card-2 p-6 rounded-2xl border border-[var(--hairline)] space-y-3">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--cyan-accent)] font-bold">Lab Compromises</span>
              <ul className="space-y-2">
                {review.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                    <X className="size-4 text-[var(--cyan-accent)] mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface-card p-8 rounded-3xl border border-[var(--hairline)] space-y-6">
            <h3 className="font-display text-2xl font-bold">Score Breakdown</h3>
            <div className="space-y-4">
              {review.scores.map((s) => (
                <div key={s.category} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono-tech">
                    <span>{s.category}</span>
                    <span className="text-[var(--emerald-accent)] font-bold">{s.score}/10</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
                    <div className="h-full bg-[var(--emerald-accent)]" style={{ width: `${s.score * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-lg font-sans">
            {review.content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {product && (
            <div className="surface-card p-8 rounded-3xl border border-[var(--emerald-accent)]/40 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono-tech uppercase text-muted-foreground">Tested Hardware</span>
                <h4 className="font-display text-2xl font-bold">{product.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">${product.price} retail price</p>
              </div>
              <div className="flex gap-3">
                <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-accent rounded-full px-6 py-3 text-xs font-semibold inline-flex items-center gap-1.5">
                  Buy on Amazon <ExternalLink className="size-3.5" />
                </a>
                <Link href={`/product/${product.slug}`} className="btn-ghost-glow rounded-full px-6 py-3 text-xs font-semibold">
                  Specs
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

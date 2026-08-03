"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ExternalLink, Award, Check } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { getGuide, guides } from "@/data/guides";
import { products } from "@/data";

export default function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const guide = getGuide(slug);
  if (!guide) notFound();

  const featuredProduct = guide.featuredProductSlug ? products.find((p) => p.slug === guide.featuredProductSlug) : null;
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Buying Guides
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono-tech text-muted-foreground">
              <span className="text-[var(--emerald-accent)] uppercase tracking-widest font-semibold">{guide.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="size-3" /> {guide.readTime}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Calendar className="size-3" /> {guide.publishedAt}</span>
            </div>

            <SplitTextReveal text={guide.title} className="font-display text-4xl lg:text-6xl font-bold tracking-tight" />
            <p className="text-xl text-muted-foreground leading-relaxed">{guide.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)]">
            <img src={guide.image} alt={guide.title} className="size-full object-cover" />
          </div>

          {featuredProduct && (
            <div className="surface-card p-6 md:p-8 rounded-3xl border border-[var(--emerald-accent)]/30 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--surface-2)]">
                <img src={featuredProduct.image} alt={featuredProduct.name} className="size-full object-cover" />
              </div>
              <div className="space-y-3">
                <span className="bg-[var(--emerald-accent)] text-background text-[9px] font-bold font-mono-tech px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                  <Award className="size-3" /> Editor's Top Pick for this guide
                </span>
                <h3 className="font-display text-2xl font-bold">{featuredProduct.name}</h3>
                <p className="text-sm text-muted-foreground">{featuredProduct.shortDescription}</p>
                <div className="pt-2 flex gap-3">
                  <Link href={`/product/${featuredProduct.slug}`} className="btn-accent rounded-full px-5 py-2 text-xs font-semibold">
                    View Product details (${featuredProduct.price})
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-12">
            {guide.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">{section.title}</h2>
                <p className="text-foreground/80 leading-relaxed text-lg font-sans whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherGuides.length > 0 && (
        <section className="px-6 lg:px-10 py-16 border-t border-[var(--hairline)]">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-8">Related Buying Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherGuides.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="surface-card p-6 rounded-2xl border border-[var(--hairline)] space-y-3 block group">
                  <span className="text-[10px] font-mono-tech uppercase text-[var(--emerald-accent)]">{g.category}</span>
                  <h4 className="font-display text-xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors">{g.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

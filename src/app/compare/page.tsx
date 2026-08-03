"use client";

import Link from "next/link";
import { ArrowRight, GitCompare, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import { comparisons } from "@/data/comparisons";
import { products } from "@/data";

export default function CompareHubPage() {
  const router = useRouter();
  const [productA, setProductA] = useState("");
  const [productB, setProductB] = useState("");

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productA || !productB) return;
    if (productA === productB) return;

    const existing = comparisons.find(
      (c) =>
        (c.products.includes(productA) && c.products.includes(productB)) ||
        c.slug === `${productA}-vs-${productB}` ||
        c.slug === `${productB}-vs-${productA}`
    );

    if (existing) {
      router.push(`/compare/${existing.slug}`);
    } else {
      router.push(`/compare/${productA}-vs-${productB}`);
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)]">
            Head to Head Matrix
          </p>
          <SplitTextReveal text="Product Comparison Hub" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Compare premium laptops, headphones, monitors, and wearables side-by-side. <HandUnderline>Unbiased specs</HandUnderline>, clear winner.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-4xl mx-auto surface-card p-8 md:p-12 rounded-3xl border border-[var(--hairline)] relative overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--emerald-accent)] uppercase tracking-wider mb-6">
            <Sparkles className="size-4" /> Custom Comparison Generator
          </div>

          <form onSubmit={handleCompare} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="space-y-2">
                <label className="text-xs font-mono-tech text-muted-foreground uppercase">Select Product A</label>
                <select
                  value={productA}
                  onChange={(e) => setProductA(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-2xl p-4 text-sm font-medium text-foreground outline-none focus:border-[var(--emerald-accent)] transition-colors"
                >
                  <option value="">Choose first device...</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} ({p.brand})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid place-items-center size-10 rounded-full bg-[var(--surface)] border border-[var(--hairline)] text-muted-foreground mx-auto font-mono text-xs font-bold">
                VS
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-tech text-muted-foreground uppercase">Select Product B</label>
                <select
                  value={productB}
                  onChange={(e) => setProductB(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] rounded-2xl p-4 text-sm font-medium text-foreground outline-none focus:border-[var(--emerald-accent)] transition-colors"
                >
                  <option value="">Choose second device...</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug} disabled={p.slug === productA}>
                      {p.name} ({p.brand})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={!productA || !productB || productA === productB}
                className="btn-accent rounded-full px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Generate Side-by-Side Matrix <GitCompare className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Curated Showdowns</p>
              <h2 className="font-display text-3xl font-bold mt-1">Featured Comparisons</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((c) => (
              <TiltCard key={c.slug} className="surface-card p-6 md:p-8 rounded-3xl border border-[var(--hairline)] flex flex-col justify-between h-full group" max={4}>
                <div className="space-y-4">
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--cyan-accent)]">{c.category}</span>
                  <h3 className="font-display text-2xl font-bold group-hover:text-[var(--emerald-accent)] transition-colors">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{c.excerpt}</p>
                </div>

                <div className="pt-6 border-t border-[var(--hairline)]/50 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-muted-foreground">{c.specs.length} Specs Tested</span>
                  <Link href={`/compare/${c.slug}`} className="btn-ghost-glow rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5">
                    Compare Specs <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Award, Star } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";

export default function MacbookProReviewPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="size-4 text-[var(--emerald-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Editor's Choice · Expert Review</span>
          </div>
          <SplitTextReveal text="MacBook Pro M3 Max" className="font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Three weeks of real-life testing. The verdict: the <HandUnderline>most complete pro laptop</HandUnderline> Apple has ever shipped.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <span className="font-display text-6xl font-bold text-accent-gradient">9.4</span>
            <div>
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">By Editorial · 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-6xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden surface-card">
          <img src={laptopImg.src} alt="MacBook Pro M3 Max" className="size-full object-cover" />
        </div>
      </section>
    </>
  );
}

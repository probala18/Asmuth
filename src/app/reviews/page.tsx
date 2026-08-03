"use client";

import Link from "next/link";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { ReviewCard } from "@/components/site/ContentCards";
import { reviews } from "@/data";

export default function ReviewsIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] font-semibold">Independent Benchmarks</p>
          <SplitTextReveal text="Expert Lab Reviews" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Zero sponsored samples. Every product tested for 3+ weeks against <HandUnderline>standardized lab protocols</HandUnderline>.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { BrandCard } from "@/components/site/ContentCards";
import { brands } from "@/data/brands";

export default function BrandsIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Hardware Partners</p>
          <SplitTextReveal text="Curated Brands" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The hardware design labs and technology manufacturers featured in <HandUnderline>genCART benchmarks</HandUnderline>.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </section>
    </>
  );
}

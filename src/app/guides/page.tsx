"use client";

import Link from "next/link";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { GuideCard } from "@/components/site/ContentCards";
import { guides } from "@/data/guides";

export default function GuidesIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] font-semibold">Editorial Knowledge</p>
          <SplitTextReveal text="Buying Guides & Manuals" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive hardware manuals and workspace configuration guides built for <HandUnderline>developers and creators</HandUnderline>.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { Check, ShieldCheck, Truck, Star } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";

export default function LaptopAirPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <TiltCard className="relative aspect-square rounded-3xl overflow-hidden surface-card" max={4}>
            <img src={laptopImg.src} alt="genCART Laptop Air" className="size-full object-cover" />
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
          </TiltCard>

          <div className="space-y-6">
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Computing · 2026 Edition</p>
            <SplitTextReveal text="genCART Laptop Air" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
            <p className="text-muted-foreground text-lg max-w-md">
              M-class silicon. Edge-to-edge OLED. 22-hour battery. <HandUnderline>Engineered as one.</HandUnderline>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[var(--emerald-accent)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">4.9 · 1,284 reviews</span>
            </div>
            <p className="font-display text-5xl font-bold text-accent-gradient">$999</p>
            <div className="flex gap-3 pt-2">
              <button className="btn-accent rounded-full px-7 py-3.5 text-sm font-semibold">Add to Cart</button>
              <Link href="/reviews/macbook-pro" className="btn-ghost-glow rounded-full px-7 py-3.5 text-sm font-semibold">Read Review</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--hairline)]">
              {[
                { Icon: ShieldCheck, label: "Lifetime Warranty" },
                { Icon: Truck, label: "Free Shipping" },
                { Icon: Check, label: "30-Day Returns" },
              ].map((b) => (
                <div key={b.label} className="text-xs text-muted-foreground flex items-center gap-2">
                  <b.Icon className="size-4 text-[var(--emerald-accent)]" /> {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

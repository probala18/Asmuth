"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inbox, Trash2, Eye } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { getProduct } from "@/data";
import type { Product } from "@/types";

export default function RecentlyViewedPage() {
  const [historyItems, setHistoryItems] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("genCART-recently-viewed");
      if (stored) {
        const slugs = JSON.parse(stored) as string[];
        const items = slugs.map((s) => getProduct(s)).filter((p): p is Product => !!p);
        setHistoryItems(items);
      } else {
        const defaults = ["genCART-watch-x", "genCART-buds-pro"];
        const items = defaults.map((s) => getProduct(s)).filter((p): p is Product => !!p);
        setHistoryItems(items);
        localStorage.setItem("genCART-recently-viewed", JSON.stringify(defaults));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("genCART-recently-viewed");
    setHistoryItems([]);
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Your Activity</p>
          <SplitTextReveal text="Recently Viewed" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Your recently browsed equipment, specifications sheets, and lab analysis reports.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-8 min-h-[400px]">
        <div className="max-w-7xl mx-auto space-y-6">
          {historyItems.length > 0 ? (
            <>
              <div className="flex justify-between items-center border-b border-[var(--hairline)] pb-4">
                <span className="text-xs font-mono-tech uppercase text-muted-foreground">{historyItems.length} Visited item{historyItems.length !== 1 ? "s" : ""}</span>
                <button 
                  onClick={handleClear}
                  className="text-xs text-[var(--cyan-accent)] hover:text-foreground font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Trash2 className="size-4" /> Clear History
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {historyItems.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4">
              <Eye className="size-12 text-muted-foreground" />
              <h3 className="font-display text-xl font-semibold">Your history is clear</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Items you view while exploring our site will show up here.
              </p>
              <div className="pt-2">
                <Link href="/categories" className="btn-accent rounded-full px-6 py-3 text-xs font-semibold">
                  Browse Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

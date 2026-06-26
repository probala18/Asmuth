import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { products } from "@/data";

export const Route = createFileRoute("/trending")({
  head: () => ({
    meta: [
      { title: "Trending Premium Tech — AETHER" },
      { name: "description", content: "Explore the most popular and highly sought-after premium tech gear trending right now." },
    ],
  }),
  component: TrendingPage,
});

function TrendingPage() {
  // Filter trending products
  const trendingProducts = products.filter((p) => p.isTrending);

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Live Feed</p>
          <SplitTextReveal text="Trending Gear" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            High interest products. The absolute top <HandUnderline>user-engagement flagships</HandUnderline> across our active laboratory benchmarks.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

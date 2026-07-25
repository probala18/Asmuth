import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { products } from "@/data";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({
    meta: [
      { title: "New Arrivals — genCART" },
      { name: "description", content: "Discover the latest premium tech releases added to genCART's catalog." },
    ],
  }),
  component: NewArrivalsPage,
});

function NewArrivalsPage() {
  // Sort products by date descending (assuming createdAt exists or sorting by index/id)
  const newProducts = [...products]
    .sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Catalog Updates</p>
          <SplitTextReveal text="New Arrivals" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            The newest additions to our collection. <HandUnderline>Freshly audited and verified</HandUnderline> by our hardware editorial team.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

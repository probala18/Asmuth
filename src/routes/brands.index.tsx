import { createFileRoute } from "@tanstack/react-router";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { BrandCard } from "@/components/site/ContentCards";
import { brands } from "@/data/brands";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Partner Brands — genCART" },
      { name: "description", content: "Discover the premium hardware and software brands curated on genCART." },
    ],
  }),
  component: BrandsIndexPage,
});

function BrandsIndexPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3">Partner Ecosystem</p>
          <SplitTextReveal text="Curated Brands" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            We partner with architects of <HandUnderline>exceptional digital and physical tools</HandUnderline>. No compromises, pure utility.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </section>
    </>
  );
}

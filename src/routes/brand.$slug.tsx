import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Inbox } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { getBrand, brands } from "@/data/brands";
import { products } from "@/data";

export const Route = createFileRoute("/brand/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    const brand = getBrand(params.slug);
    return {
      meta: [
        { title: brand ? `${brand.name} — Brand Profile · AETHER` : "Brand Detail · AETHER" },
        { name: "description", content: brand ? brand.description : "View products by this brand." },
      ],
    };
  },
  loader: ({ params }) => {
    const brand = getBrand(params.slug);
    if (!brand) {
      throw notFound();
    }
    // Filter products matching this brand
    const brandProducts = products.filter(
      (p) => p.brand.toLowerCase() === brand.name.toLowerCase()
    );
    return { brand, brandProducts };
  },
  component: BrandDetailPage,
});

function BrandDetailPage() {
  const { brand, brandProducts } = Route.useLoaderData();

  // Find other brands for sidebar/bottom
  const otherBrands = brands
    .filter((b) => b.slug !== brand.slug)
    .slice(0, 3);

  return (
    <>
      {/* Brand Header */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Brands
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--hairline)]">
            <div className="space-y-4">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                Brand Directory
              </span>
              <SplitTextReveal text={brand.name} className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                {brand.description}
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="text-xs text-muted-foreground font-mono-tech uppercase tracking-wider">Official Site</span>
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-glow rounded-full px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5"
              >
                {brand.name.toLowerCase()}.design <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Products */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold">Catalog ({brandProducts.length})</h3>
            <p className="text-sm text-muted-foreground mt-1">Products manufactured by {brand.name} featured on AETHER.</p>
          </div>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4">
              <Inbox className="size-12 text-muted-foreground" />
              <h3 className="font-display text-xl font-semibold">No active products</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                We currently don't list any direct affiliate products for {brand.name}. Check back later as our editorial catalog expands.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Brands */}
      {otherBrands.length > 0 && (
        <section className="px-6 lg:px-10 py-16 border-t border-[var(--hairline)]">
          <div className="max-w-7xl mx-auto">
            <h4 className="font-display text-xl font-bold mb-8">Other partner manufacturers</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherBrands.map((b) => (
                <div key={b.slug} className="surface-card p-6 rounded-2xl border border-[var(--hairline)] flex justify-between items-center group">
                  <div>
                    <h5 className="font-display font-semibold group-hover:text-[var(--emerald-accent)] transition-colors">{b.name}</h5>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{b.description}</p>
                  </div>
                  <Link to={`/brand/${b.slug}`} className="btn-ghost-glow p-2 rounded-full">
                    <ArrowLeft className="size-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

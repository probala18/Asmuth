import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Inbox, ArrowRight } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { ReviewCard, GuideCard } from "@/components/site/ContentCards";
import { products, reviews } from "@/data";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || "",
    };
  },
  head: ({ search }) => ({
    meta: [
      { title: search.q ? `Search results for "${search.q}" — genCART` : "Search — genCART" },
      { name: "description", content: "Search premium tech reviews, specifications, and buying guides on genCART." },
    ],
  }),
  component: SearchPage,
});

type Tab = "all" | "products" | "reviews" | "guides";

function SearchPage() {
  const { q } = Route.useSearch();
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [localQuery, setLocalQuery] = useState(q);

  const query = localQuery.trim().toLowerCase();

  // Search logic
  const matchingProducts = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query)
      )
    : [];

  const matchingReviews = query
    ? reviews.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.excerpt.toLowerCase().includes(query) ||
          r.content.toLowerCase().includes(query) ||
          r.productName.toLowerCase().includes(query)
      )
    : [];

  const matchingGuides = query
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(query) ||
          g.excerpt.toLowerCase().includes(query) ||
          g.category.toLowerCase().includes(query)
      )
    : [];

  const totalResults = matchingProducts.length + matchingReviews.length + matchingGuides.length;

  return (
    <>
      <section className="relative pt-40 pb-12 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Search Matrix</p>
          <SplitTextReveal text="Grid Search" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          
          <div className="max-w-xl mx-auto relative mt-6">
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search products, reviews, guides..."
              className="w-full bg-[var(--surface)] border border-[var(--hairline)] rounded-full px-6 py-4 pl-12 text-sm text-foreground focus:outline-none focus:border-[var(--emerald-accent)] transition-colors shadow-md"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          </div>

          {query && (
            <p className="text-xs text-muted-foreground">
              Found {totalResults} result{totalResults !== 1 ? "s" : ""} for "{q}"
            </p>
          )}
        </div>
      </section>

      {/* Tabs and Results */}
      {query ? (
        <section className="px-6 lg:px-10 py-8 min-h-[400px]">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Tabs */}
            <div className="flex border-b border-[var(--hairline)] overflow-x-auto gap-8 justify-center">
              {[
                { id: "all", label: `All (${totalResults})` },
                { id: "products", label: `Products (${matchingProducts.length})` },
                { id: "reviews", label: `Reviews (${matchingReviews.length})` },
                { id: "guides", label: `Guides (${matchingGuides.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`pb-3 text-xs font-mono-tech uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "border-[var(--emerald-accent)] text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Results Rendering */}
            <div className="space-y-12">
              {/* 1. Products Tab / Section */}
              {(activeTab === "all" || activeTab === "products") && matchingProducts.length > 0 && (
                <div className="space-y-6">
                  {(activeTab === "all") && (
                    <h3 className="font-display text-xl font-bold border-b border-[var(--hairline)] pb-2 flex items-center justify-between">
                      <span>Products</span>
                      <button onClick={() => setActiveTab("products")} className="text-xs font-mono-tech text-[var(--emerald-accent)] hover:underline flex items-center gap-1">
                        View all <ArrowRight className="size-3" />
                      </button>
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchingProducts.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Reviews Tab / Section */}
              {(activeTab === "all" || activeTab === "reviews") && matchingReviews.length > 0 && (
                <div className="space-y-6">
                  {(activeTab === "all") && (
                    <h3 className="font-display text-xl font-bold border-b border-[var(--hairline)] pb-2 flex items-center justify-between">
                      <span>Expert Reviews</span>
                      <button onClick={() => setActiveTab("reviews")} className="text-xs font-mono-tech text-[var(--emerald-accent)] hover:underline flex items-center gap-1">
                        View all <ArrowRight className="size-3" />
                      </button>
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matchingReviews.map((review) => (
                      <ReviewCard key={review.slug} review={review} />
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Guides Tab / Section */}
              {(activeTab === "all" || activeTab === "guides") && matchingGuides.length > 0 && (
                <div className="space-y-6">
                  {(activeTab === "all") && (
                    <h3 className="font-display text-xl font-bold border-b border-[var(--hairline)] pb-2 flex items-center justify-between">
                      <span>Buying Guides</span>
                      <button onClick={() => setActiveTab("guides")} className="text-xs font-mono-tech text-[var(--emerald-accent)] hover:underline flex items-center gap-1">
                        View all <ArrowRight className="size-3" />
                      </button>
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {matchingGuides.map((guide) => (
                      <GuideCard key={guide.slug} guide={guide} />
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state per tab */}
              {((activeTab === "products" && matchingProducts.length === 0) ||
                (activeTab === "reviews" && matchingReviews.length === 0) ||
                (activeTab === "guides" && matchingGuides.length === 0) ||
                (activeTab === "all" && totalResults === 0)) && (
                <div className="text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4">
                  <Inbox className="size-12 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold">No results found</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Try checking for typos or searching a different term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 lg:px-10 py-16 text-center">
          <div className="max-w-md mx-auto surface-card p-8 rounded-2xl border border-[var(--hairline)] space-y-3">
            <Search className="size-8 mx-auto text-muted-foreground" />
            <h4 className="font-display font-semibold text-lg">Enter a search query</h4>
            <p className="text-sm text-muted-foreground">
              Search across our entire catalog of premium products, detailed lab reviews, and buying guides.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

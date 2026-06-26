import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowLeft, Inbox } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { Filters } from "@/components/site/UIComponents";
import { getCategory, getProductsByCategory } from "@/data";

export const Route = createFileRoute("/category/$slug")({
  parseParams: (params) => ({
    slug: params.slug,
  }),
  head: ({ params }) => {
    const cat = getCategory(params.slug);
    return {
      meta: [
        { title: cat ? `${cat.name} — ASMUTH` : "Category — ASMUTH" },
        { name: "description", content: cat ? cat.description : "Browse premium products in this category." },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) {
      throw notFound();
    }
    return { category: cat };
  },
  component: CategoryDetailPage,
});

function CategoryDetailPage() {
  const { category } = Route.useLoaderData();
  const products = getProductsByCategory(category.slug);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating-desc");

  const sortOptions = [
    { label: "Top Rated", value: "rating-desc" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Popularity", value: "popular" },
  ];

  // Filtering
  const filteredProducts = products.filter((p) => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "rating-desc") return b.rating - a.rating;
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "popular") return b.reviewCount - a.reviewCount;
    return 0;
  });

  const IconComponent = (Icons as any)[category.icon] || Icons.HelpCircle;

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative max-w-6xl mx-auto">
          <Link 
            to="/categories" 
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Categories
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/20 text-[var(--emerald-accent)]">
                  <IconComponent className="size-5" />
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Ecosystem</span>
              </div>
              <SplitTextReveal text={category.name} className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've reviewed {category.productCount} products in this category. Here is our <HandUnderline>editor's shortlist</HandUnderline>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Product List */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <Filters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOptions={sortOptions}
            placeholder={`Search ${category.name} products...`}
          />

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card-2 flex flex-col items-center justify-center space-y-4">
              <Inbox className="size-12 text-muted-foreground" />
              <h3 className="font-display text-2xl font-semibold">No products found</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                No products in this category match your search criteria. Try a different query.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

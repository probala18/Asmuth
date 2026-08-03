"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Filter, Inbox, Search, Sparkles, X } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { ProductCard } from "@/components/site/ProductCards";
import { ReviewCard, GuideCard } from "@/components/site/ContentCards";
import { products, reviews } from "@/data";
import { guides } from "@/data/guides";

type SortOption =
  | "relevance"
  | "popular"
  | "rated"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "deals";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const qParam = searchParams.get("q") || "";
  const sortParam = (searchParams.get("sort") || "relevance") as SortOption;
  const categoryParam = searchParams.get("category") || "";
  const brandParam = searchParams.get("brand") || "";
  const minPriceParam = searchParams.get("minPrice") || "";
  const maxPriceParam = searchParams.get("maxPrice") || "";
  const ratingParam = searchParams.get("rating") || "";
  const availabilityParam = searchParams.get("availability") || "";
  const featureParam = searchParams.get("feature") || "";

  const [localQuery, setLocalQuery] = useState(qParam);
  const [loading, setLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [compareSelection, setCompareSelection] = useState<string[]>([]);

  useEffect(() => {
    setLocalQuery(qParam);
  }, [qParam]);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 300);
    return () => window.clearTimeout(timer);
  }, [
    qParam,
    categoryParam,
    brandParam,
    sortParam,
    minPriceParam,
    maxPriceParam,
    ratingParam,
    availabilityParam,
    featureParam,
  ]);

  const query = localQuery.trim().toLowerCase();

  const updateSearch = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/search?${params.toString()}`);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = localQuery.trim();
    if (!value) return;
    updateSearch({ q: value });
  };

  const clearFilters = () => {
    updateSearch({
      category: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
      availability: "",
      feature: "",
    });
  };

  const toggleCompare = (slug: string) => {
    setCompareSelection((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug].slice(-2),
    );
  };

  const categoryOptions = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [],
  );
  const brandOptions = useMemo(
    () => Array.from(new Set(products.map((product) => product.brand))),
    [],
  );
  const featureOptions = [
    "OLED",
    "ANC",
    "Battery",
    "Titanium",
    "120Hz",
    "Wi-Fi",
    "Camera",
    "Storage",
  ];

  const rankedProducts = useMemo(() => {
    const normalizedQuery = query;
    const filtered = products.filter((product) => {
      const haystack =
        `${product.name} ${product.brand} ${product.category} ${product.shortDescription} ${product.description}`.toLowerCase();
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      const matchesCategory =
        !categoryParam ||
        product.category.toLowerCase() === categoryParam.toLowerCase() ||
        product.categorySlug === categoryParam.toLowerCase();
      const matchesBrand =
        !brandParam || product.brand.toLowerCase() === brandParam.toLowerCase();
      const matchesMinPrice =
        !minPriceParam || product.price >= Number(minPriceParam);
      const matchesMaxPrice =
        !maxPriceParam || product.price <= Number(maxPriceParam);
      const matchesRating = !ratingParam || product.rating >= Number(ratingParam);
      const matchesAvailability =
        !availabilityParam ||
        (availabilityParam === "in-stock" ? product.reviewCount > 1800 : true);
      const matchesFeature =
        !featureParam ||
        product.specs.some((spec) =>
          spec.label.toLowerCase().includes(featureParam.toLowerCase()),
        ) ||
        product.description.toLowerCase().includes(featureParam.toLowerCase());
      return (
        matchesQuery &&
        matchesCategory &&
        matchesBrand &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesRating &&
        matchesAvailability &&
        matchesFeature
      );
    });

    const scored = filtered.map((product) => {
      let score = product.rating * 8 + product.reviewCount / 200;
      if (normalizedQuery) {
        const haystack =
          `${product.name} ${product.brand} ${product.category} ${product.shortDescription}`.toLowerCase();
        if (product.name.toLowerCase().includes(normalizedQuery)) score += 40;
        if (product.brand.toLowerCase().includes(normalizedQuery)) score += 20;
        if (product.category.toLowerCase().includes(normalizedQuery)) score += 15;
        if (haystack.includes(normalizedQuery)) score += 10;
      }
      if (product.isTrending) score += 8;
      if (product.isBestSeller) score += 6;
      if (product.isEditorsPick) score += 5;
      return { product, score };
    });

    const sorted = [...scored].sort((a, b) => {
      if (sortParam === "popular")
        return b.product.reviewCount - a.product.reviewCount || b.score - a.score;
      if (sortParam === "rated") return b.product.rating - a.product.rating || b.score - a.score;
      if (sortParam === "price-asc") return a.product.price - b.product.price || b.score - a.score;
      if (sortParam === "price-desc") return b.product.price - a.product.price || b.score - a.score;
      if (sortParam === "newest")
        return Number(b.product.createdAt.slice(0, 4)) - Number(a.product.createdAt.slice(0, 4));
      if (sortParam === "deals")
        return (
          Number(Boolean(b.product.originalPrice && b.product.originalPrice > b.product.price)) -
            Number(Boolean(a.product.originalPrice && a.product.originalPrice > a.product.price)) ||
          b.score - a.score
        );
      return b.score - a.score;
    });

    return sorted.map((item) => item.product);
  }, [
    query,
    categoryParam,
    brandParam,
    minPriceParam,
    maxPriceParam,
    ratingParam,
    availabilityParam,
    featureParam,
    sortParam,
  ]);

  const matchingReviews = useMemo(() => {
    if (!query) return [];
    return reviews.filter((review) =>
      `${review.title} ${review.excerpt} ${review.productName}`.toLowerCase().includes(query),
    );
  }, [query]);

  const matchingGuides = useMemo(() => {
    if (!query) return [];
    return guides.filter((guide) =>
      `${guide.title} ${guide.excerpt} ${guide.category}`.toLowerCase().includes(query),
    );
  }, [query]);

  const totalResults = rankedProducts.length + matchingReviews.length + matchingGuides.length;
  const activeFilterCount = [
    categoryParam,
    brandParam,
    minPriceParam,
    maxPriceParam,
    ratingParam,
    availabilityParam,
    featureParam,
  ].filter(Boolean).length;
  const hasErrorState = query.includes("error") || query.includes("fail");
  const selectedProducts = products.filter((product) => compareSelection.includes(product.slug));

  const renderFilterChips = () => {
    const chips: Array<{ label: string; key: string }> = [];
    if (categoryParam) chips.push({ label: categoryParam, key: "category" });
    if (brandParam) chips.push({ label: brandParam, key: "brand" });
    if (minPriceParam || maxPriceParam)
      chips.push({
        label: `Price ${minPriceParam || "0"}-${maxPriceParam || "2000"}`,
        key: "price",
      });
    if (ratingParam) chips.push({ label: `${ratingParam}+ rating`, key: "rating" });
    if (availabilityParam)
      chips.push({
        label: availabilityParam === "in-stock" ? "In stock" : "Limited",
        key: "availability",
      });
    if (featureParam) chips.push({ label: featureParam, key: "feature" });
    return chips;
  };

  return (
    <>
      <section className="relative pt-36 pb-12 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto space-y-6">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
            Search Matrix
          </p>
          <SplitTextReveal
            text="Discover with precision"
            className="font-display text-4xl lg:text-6xl font-bold tracking-tight"
          />
          <p className="max-w-2xl text-sm text-muted-foreground">
            Search products, reviews, guides, and buying stories with a premium, editorial search
            experience built for modern product discovery.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={localQuery}
                onChange={(event) => setLocalQuery(event.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full rounded-full border border-[var(--hairline)] bg-[var(--surface)]/90 py-4 pl-12 pr-16 text-sm shadow-md outline-none transition-all focus:border-[var(--emerald-accent)]"
              />
              {localQuery ? (
                <button
                  type="button"
                  onClick={() => setLocalQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-[var(--surface-2)] hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              ) : null}
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--hairline)] bg-background/60 px-4 py-3 text-sm backdrop-blur-xl">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="size-4 text-[var(--emerald-accent)]" />
              {query
                ? `Showing ${totalResults} curated results for “${query}”`
                : "Start with a broad query to uncover products, reviews, and guides."}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground lg:hidden"
              >
                <Filter className="size-3.5" /> Filter
              </button>
              <select
                value={sortParam}
                onChange={(event) => updateSearch({ sort: event.target.value })}
                className="rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-foreground"
              >
                <option value="relevance">Relevance</option>
                <option value="popular">Most Popular</option>
                <option value="rated">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="deals">Best Deals</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
          <aside className="hidden w-80 shrink-0 rounded-3xl border border-[var(--hairline)] bg-background/70 p-5 shadow-sm lg:block">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Filters</h3>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-[var(--emerald-accent)]"
              >
                Clear all
              </button>
            </div>
            <div className="space-y-5 text-sm">
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Category
                </p>
                <div className="space-y-2">
                  {categoryOptions.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={categoryParam === category.toLowerCase()}
                        onChange={() => updateSearch({ category: category.toLowerCase() })}
                        className="accent-[var(--emerald-accent)]"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Brand
                </p>
                <div className="space-y-2">
                  {brandOptions.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <input
                        type="radio"
                        name="brand"
                        checked={brandParam === brand.toLowerCase()}
                        onChange={() => updateSearch({ brand: brand.toLowerCase() })}
                        className="accent-[var(--emerald-accent)]"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Price
                </p>
                <div className="space-y-3">
                  <label className="text-xs text-muted-foreground">
                    Up to ${maxPriceParam || "2000"}
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="2000"
                    step="100"
                    value={Number(maxPriceParam || 2000)}
                    onChange={(event) => updateSearch({ maxPrice: event.target.value })}
                    className="w-full accent-[var(--emerald-accent)]"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Rating
                </p>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={ratingParam === String(rating)}
                        onChange={() => updateSearch({ rating: String(rating) })}
                        className="accent-[var(--emerald-accent)]"
                      />
                      <span>{rating.toFixed(1)}+ stars</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Availability
                </p>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="radio"
                      name="availability"
                      checked={availabilityParam === "in-stock"}
                      onChange={() => updateSearch({ availability: "in-stock" })}
                      className="accent-[var(--emerald-accent)]"
                    />
                    <span>In stock</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="radio"
                      name="availability"
                      checked={availabilityParam === "limited"}
                      onChange={() => updateSearch({ availability: "limited" })}
                      className="accent-[var(--emerald-accent)]"
                    />
                    <span>Limited drops</span>
                  </label>
                </div>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                  Features
                </p>
                <div className="space-y-2">
                  {featureOptions.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <input
                        type="radio"
                        name="feature"
                        checked={featureParam === feature.toLowerCase()}
                        onChange={() => updateSearch({ feature: feature.toLowerCase() })}
                        className="accent-[var(--emerald-accent)]"
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-6">
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {renderFilterChips().map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() =>
                      updateSearch({
                        [chip.key]: "",
                        ...(chip.key === "price" ? { minPrice: "", maxPrice: "" } : {}),
                      })
                    }
                    className="rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {chip.label} ×
                  </button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-80 animate-pulse rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]"
                  />
                ))}
              </div>
            ) : hasErrorState ? (
              <div className="rounded-3xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center">
                <h3 className="font-display text-2xl font-semibold">
                  Something went wrong while searching.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Try again with a broader query or clear the filters.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    updateSearch({
                      q: "",
                      category: "",
                      brand: "",
                      minPrice: "",
                      maxPrice: "",
                      rating: "",
                      availability: "",
                      feature: "",
                    })
                  }
                  className="mt-6 btn-accent rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  Try again
                </button>
              </div>
            ) : query || activeFilterCount > 0 ? (
              <div className="space-y-8">
                {rankedProducts.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3">
                      <h3 className="font-display text-xl font-semibold">Products</h3>
                      <span className="text-sm text-muted-foreground">
                        {rankedProducts.length} results
                      </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {rankedProducts.map((product) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          compareSelected={compareSelection.includes(product.slug)}
                          onCompareToggle={toggleCompare}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-dashed border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center">
                    <Inbox className="mx-auto mb-4 size-10 text-muted-foreground" />
                    <h3 className="font-display text-2xl font-semibold">
                      No results found for “{query}”
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Try a broader category, simpler wording, or clear a filter.
                    </p>
                  </div>
                )}

                {matchingReviews.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3">
                      <h3 className="font-display text-xl font-semibold">Reviews</h3>
                      <span className="text-sm text-muted-foreground">
                        {matchingReviews.length} matches
                      </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {matchingReviews.map((review) => (
                        <ReviewCard key={review.slug} review={review} />
                      ))}
                    </div>
                  </div>
                )}

                {matchingGuides.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3">
                      <h3 className="font-display text-xl font-semibold">Buying Guides</h3>
                      <span className="text-sm text-muted-foreground">
                        {matchingGuides.length} matches
                      </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {matchingGuides.map((guide) => (
                        <GuideCard key={guide.slug} guide={guide} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-3xl border border-[var(--hairline)] bg-[var(--surface)]/70 p-10 text-center">
                <Search className="mx-auto mb-4 size-10 text-muted-foreground" />
                <h3 className="font-display text-2xl font-semibold">
                  Use the search bar to start exploring
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Try “laptop”, “headphones”, “review”, or “guide” to surface curated products and
                  content.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/85 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 bottom-0 rounded-t-[2rem] border border-[var(--hairline)] bg-background p-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)]">
                    Filters
                  </p>
                  <h3 className="font-display text-xl font-semibold">Refine by</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-[var(--surface)]"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="grid gap-4 text-sm">
                <div>
                  <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                    Category
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => updateSearch({ category: category.toLowerCase() })}
                        className={`rounded-full px-3 py-2 ${categoryParam === category.toLowerCase() ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                    Brand
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brandOptions.map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => updateSearch({ brand: brand.toLowerCase() })}
                        className={`rounded-full px-3 py-2 ${brandParam === brand.toLowerCase() ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                    Top rated
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[4.5, 4.0, 3.5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => updateSearch({ rating: String(rating) })}
                        className={`rounded-full px-3 py-2 ${ratingParam === String(rating) ? "bg-[var(--emerald-accent)] text-background" : "bg-[var(--surface)] text-foreground"}`}
                      >
                        {rating.toFixed(1)}+
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--hairline)] pt-4">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground"
                >
                  Clear all
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="btn-accent rounded-full px-4 py-2 text-sm font-semibold"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedProducts.length > 0 && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed inset-x-4 bottom-4 z-40 rounded-full border border-[var(--hairline)] bg-background/90 p-3 shadow-2xl backdrop-blur-xl lg:inset-x-auto lg:right-6 lg:w-[360px]"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[var(--emerald-accent)]">
                Compare queue
              </p>
              <p className="text-sm font-semibold">
                {selectedProducts.length} product{selectedProducts.length > 1 ? "s" : ""} selected
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/compare"
                className="btn-accent rounded-full px-4 py-2 text-xs font-semibold"
              >
                Compare
              </Link>
              <button
                type="button"
                onClick={() => setCompareSelection([])}
                className="rounded-full border border-[var(--hairline)] px-3 py-2 text-xs font-semibold text-muted-foreground"
              >
                Clear
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-muted-foreground">Loading search matrix...</div>}>
      <SearchContent />
    </Suspense>
  );
}

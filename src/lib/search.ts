import { brands, categories, guides, products, reviews } from "@/data";
import type { Brand, Category, Guide, Product, Review } from "@/types";

export interface SearchSuggestion {
  id: string;
  label: string;
  kind: "product" | "category" | "brand" | "review" | "guide" | "recent" | "trend";
  detail?: string;
  href?: string;
  params?: Record<string, string>;
}

export interface SearchSuggestionGroup {
  title: string;
  items: SearchSuggestion[];
}

const storageKey = "gencart-recent-searches";

const trendingSearches = [
  "MacBook Air",
  "Wireless headphones",
  "Gaming laptops",
  "Best monitors",
  "Smartwatches",
  "Mechanical keyboards",
  "Studio audio",
  "Creator laptops",
];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function getStoredRecentSearches(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

function saveRecentSearches(items: string[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(storageKey, JSON.stringify(items));
}

export function getRecentSearches(): string[] {
  return getStoredRecentSearches();
}

export function persistRecentSearch(term: string) {
  const normalized = term.trim();
  if (!normalized) return;

  const current = getStoredRecentSearches();
  const next = [
    normalized,
    ...current.filter((item) => item.toLowerCase() !== normalized.toLowerCase()),
  ].slice(0, 6);
  saveRecentSearches(next);
}

export function removeRecentSearch(term: string) {
  const current = getStoredRecentSearches();
  const next = current.filter((item) => item.toLowerCase() !== term.toLowerCase());
  saveRecentSearches(next);
}

export function clearRecentSearches() {
  saveRecentSearches([]);
}

export function getTrendingSearchTerms() {
  return trendingSearches;
}

export function getSearchSuggestions(
  query: string,
  recentSearches: string[] = [],
  savedProducts: Product[] = [],
): SearchSuggestionGroup[] {
  const term = normalize(query);
  const groups: SearchSuggestionGroup[] = [];

  if (term) {
    const productMatches = products
      .filter((product) => {
        const haystack =
          `${product.name} ${product.brand} ${product.category} ${product.shortDescription}`.toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 4)
      .map((product) => ({
        id: `product-${product.slug}`,
        label: product.name,
        kind: "product" as const,
        detail: `${product.brand} · ${product.category}`,
        href: "/product/$slug",
        params: { slug: product.slug },
      }));

    const categoryMatches = categories
      .filter(
        (category) =>
          normalize(category.name).includes(term) || normalize(category.slug).includes(term),
      )
      .slice(0, 3)
      .map((category) => ({
        id: `category-${category.slug}`,
        label: category.name,
        kind: "category" as const,
        detail: category.description,
        href: "/category/$slug",
        params: { slug: category.slug },
      }));

    const brandMatches = brands
      .filter(
        (brand) => normalize(brand.name).includes(term) || normalize(brand.slug).includes(term),
      )
      .slice(0, 3)
      .map((brand) => ({
        id: `brand-${brand.slug}`,
        label: brand.name,
        kind: "brand" as const,
        detail: brand.description,
        href: "/brand/$slug",
        params: { slug: brand.slug },
      }));

    const reviewMatches = reviews
      .filter((review) => {
        const haystack = `${review.title} ${review.excerpt} ${review.productName}`.toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 3)
      .map((review) => ({
        id: `review-${review.slug}`,
        label: review.title,
        kind: "review" as const,
        detail: review.productName,
        href: "/reviews/$slug",
        params: { slug: review.slug },
      }));

    const guideMatches = guides
      .filter((guide) => {
        const haystack = `${guide.title} ${guide.excerpt} ${guide.category}`.toLowerCase();
        return haystack.includes(term);
      })
      .slice(0, 3)
      .map((guide) => ({
        id: `guide-${guide.slug}`,
        label: guide.title,
        kind: "guide" as const,
        detail: guide.category,
        href: "/guides/$slug",
        params: { slug: guide.slug },
      }));

    if (productMatches.length) {
      groups.push({ title: "Products", items: productMatches });
    }
    if (categoryMatches.length) {
      groups.push({ title: "Categories", items: categoryMatches });
    }
    if (brandMatches.length) {
      groups.push({ title: "Brands", items: brandMatches });
    }
    if (reviewMatches.length) {
      groups.push({ title: "Reviews", items: reviewMatches });
    }
    if (guideMatches.length) {
      groups.push({ title: "Guides", items: guideMatches });
    }

    if (!groups.length) {
      groups.push({
        title: "Suggestions",
        items: getTrendingSearchTerms()
          .slice(0, 6)
          .map((item) => ({
            id: item,
            label: item,
            kind: "trend" as const,
            detail: "Trending discovery",
          })),
      });
    }
  } else {
    const recentItems = recentSearches
      .slice(0, 4)
      .map((item) => ({ id: item, label: item, kind: "recent" as const, detail: "Recent search" }));
    const trendingItems = getTrendingSearchTerms()
      .slice(0, 6)
      .map((item) => ({
        id: item,
        label: item,
        kind: "trend" as const,
        detail: "Trending discovery",
      }));

    if (recentItems.length) {
      groups.push({ title: "Recent searches", items: recentItems });
    }

    if (savedProducts.length) {
      groups.push({
        title: "Saved picks",
        items: savedProducts.slice(0, 4).map((product) => ({
          id: product.slug,
          label: product.name,
          kind: "product" as const,
          detail: `${product.brand} saved`,
          href: "/product/$slug",
          params: { slug: product.slug },
        })),
      });
    }

    groups.push({ title: "Trending searches", items: trendingItems });
  }

  return groups;
}

import { useEffect, useState } from "react";
import { getProduct } from "@/data";
import { getUserPreferences, saveUserPreferences } from "@/lib/preferences";
import type { Product } from "@/types";

const STORAGE_KEY = "genCART-saved-products";
const SAVED_PRODUCTS_CHANGED = "genCART:saved-products-changed";

export function getSavedProductSlugs(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((slug): slug is string => typeof slug === "string")
      : [];
  } catch {
    return [];
  }
}

export function getSavedProducts(): Product[] {
  return getSavedProductSlugs()
    .map((slug) => getProduct(slug))
    .filter((product): product is Product => Boolean(product));
}

export function isProductSaved(slug: string): boolean {
  return getSavedProductSlugs().includes(slug);
}

export function toggleSavedProduct(slug: string, product?: Product) {
  const current = getSavedProductSlugs();
  const isSaved = current.includes(slug);
  const next = isSaved ? current.filter((item) => item !== slug) : [...current, slug];

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
  }

  if (product) {
    const prefs = getUserPreferences();
    const interestSet = new Set([...prefs.interests, product.category]);
    const currentInterestSet = new Set([...prefs.currentInterests, product.name, product.category]);

    saveUserPreferences({
      interests: Array.from(interestSet),
      currentInterests: Array.from(currentInterestSet),
    });
  }

  return !isSaved;
}

export function removeSavedProduct(slug: string) {
  const current = getSavedProductSlugs().filter((item) => item !== slug);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
  }

  return current;
}

export function clearSavedProducts() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(SAVED_PRODUCTS_CHANGED));
  }

  return [];
}

export function useSavedProducts() {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const syncSavedProducts = () => {
      setSavedProducts(getSavedProducts());
    };

    syncSavedProducts();

    if (typeof window !== "undefined") {
      window.addEventListener(SAVED_PRODUCTS_CHANGED, syncSavedProducts);
      return () => window.removeEventListener(SAVED_PRODUCTS_CHANGED, syncSavedProducts);
    }

    return undefined;
  }, []);

  return savedProducts;
}

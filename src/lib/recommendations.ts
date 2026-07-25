/* ─── genCART — Recommendation Engine ─────────────────────────── */
import type { Product } from "@/types";
import type { UserPreferences } from "@/lib/preferences";

/**
 * Modular recommendation engine scoring function.
 * Scores products based on user onboarding preferences (categories, priorities,
 * budget, usage, brands, current interests) and product signals (ratings, editor picks, trending).
 *
 * Gracefully falls back to trending/editor-picked products if preferences are incomplete.
 */
export function getRecommendedProducts(
  prefs: UserPreferences,
  allProducts: Product[]
): Product[] {
  // Fallback to top products if no preferences exist or onboarding not completed
  if (!prefs || !prefs.interests || prefs.interests.length === 0) {
    return allProducts
      .filter((p) => p.isEditorsPick || p.isBestSeller || p.isTrending)
      .slice(0, 8);
  }

  const scored = allProducts.map((product) => {
    let score = 0;

    // 1. Category Interest Match (25 pts)
    const normalizedCategory = product.category.toLowerCase();
    const matchesCategory = prefs.interests.some(
      (interest) => interest.toLowerCase() === normalizedCategory
    );
    if (matchesCategory) score += 25;

    // 2. Current Interest / Keyword Match (20 pts)
    const productText = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase();
    prefs.currentInterests.forEach((ci) => {
      const keyword = ci.toLowerCase().replace(/s$/, ""); // e.g. "laptops" -> "laptop"
      if (productText.includes(keyword)) {
        score += 20;
      }
    });

    // 3. Preferred Brand Match (15 pts)
    if (prefs.preferredBrands.some((b) => b.toLowerCase() === product.brand.toLowerCase())) {
      score += 15;
    }

    // 4. Usage Match (15 pts)
    prefs.usage.forEach((u) => {
      const usageLower = u.toLowerCase();
      if (
        (usageLower.includes("programming") || usageLower.includes("work") || usageLower.includes("creative")) &&
        product.category === "Computing"
      ) {
        score += 15;
      }
      if (usageLower.includes("music") && product.category === "Audio") {
        score += 15;
      }
      if ((usageLower.includes("photo") || usageLower.includes("video")) && product.category === "Cameras") {
        score += 15;
      }
      if (usageLower.includes("gaming") && (product.category === "Gaming" || product.slug.includes("gaming"))) {
        score += 15;
      }
    });

    // 5. Priorities Match (10 pts)
    prefs.priorities.forEach((p) => {
      const priorityLower = p.toLowerCase();
      if (priorityLower.includes("value") && product.originalPrice && product.originalPrice > product.price) {
        score += 10;
      }
      if (priorityLower.includes("battery")) {
        const hasBattery = product.specs.some((s) => s.label.toLowerCase().includes("battery"));
        if (hasBattery) score += 10;
      }
      if (priorityLower.includes("performance") && (product.isEditorsPick || product.price > 500)) {
        score += 10;
      }
    });

    // 6. Budget Compatibility (20 pts)
    switch (prefs.budget) {
      case "Under $100":
        if (product.price <= 100) score += 20;
        break;
      case "$100–$300":
        if (product.price >= 100 && product.price <= 300) score += 20;
        break;
      case "$300–$700":
        if (product.price >= 300 && product.price <= 700) score += 20;
        break;
      case "$700–$1,500":
        if (product.price >= 700 && product.price <= 1500) score += 20;
        break;
      case "$1,500+":
        if (product.price >= 1500) score += 20;
        break;
      default:
        score += 10; // No preference bonus
        break;
    }

    // 7. Base Product Quality Signals (Rating & Badges)
    score += (product.rating || 4) * 2;
    if (product.isEditorsPick) score += 5;
    if (product.isBestSeller) score += 5;
    if (product.isTrending) score += 3;

    return { product, score };
  });

  // Sort products by calculated recommendation score descending
  scored.sort((a, b) => b.score - a.score);

  return scored.map((item) => item.product);
}

import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  DashboardHeroSection,
  DealsAndOffersSection,
  CategoryBrowserSection,
  PromotionalBannersSection,
  PopularProductsSection,
} from "@/components/dashboard/PersonalizedDashboardHero";
import { PersonalizedRecommendations } from "@/components/dashboard/PersonalizedRecommendations";
import { PersonalizationOnboarding } from "@/components/dashboard/PersonalizationOnboarding";
import { getUserPreferences, type UserPreferences } from "@/lib/preferences";
import { products } from "@/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Personalized Workspace · genCART" },
      { name: "description", content: "Your personal product discovery workspace on genCART." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const current = getUserPreferences();
    setPrefs(current);
    if (!current.onboardingCompleted) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = (updatedPrefs: UserPreferences) => {
    setPrefs(updatedPrefs);
    setShowOnboarding(false);
  };

  // Group products by category for the browser sections
  const computingProducts = products.filter((p) => p.categorySlug === "computing");
  const audioProducts = products.filter((p) => p.categorySlug === "audio");
  const mobileWearableProducts = products.filter(
    (p) => p.categorySlug === "mobile" || p.categorySlug === "wearables" || p.categorySlug === "cameras"
  );

  // Show nothing until preferences are loaded
  if (prefs === null) return null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Personalization Onboarding — only on first login */}
      {showOnboarding && (
        <PersonalizationOnboarding
          onComplete={handleOnboardingComplete}
          initialPreferences={prefs}
        />
      )}

      <main className="relative space-y-2">
        {/* 1. Hero: Category Sidebar + Banner + User Card */}
        <DashboardHeroSection />

        {/* 2. Recommended For You — Preference-driven */}
        <PersonalizedRecommendations />

        {/* 3. Deals & Offers: Countdown + Discount Products */}
        <DealsAndOffersSection />

        {/* 4. Category Browser: Computing */}
        <CategoryBrowserSection
          title="Computing & productivity"
          categorySlug="computing"
          accentColor="var(--emerald-accent)"
          categoryProducts={computingProducts}
        />

        {/* 5. Category Browser: Audio */}
        <CategoryBrowserSection
          title="Audio & sound"
          categorySlug="audio"
          accentColor="var(--cyan-accent)"
          categoryProducts={audioProducts}
        />

        {/* 6. Promotional Banners */}
        <PromotionalBannersSection />

        {/* 7. Category Browser: Mobile, Wearables & Cameras */}
        <CategoryBrowserSection
          title="Consumer electronics & gadgets"
          categorySlug="mobile"
          accentColor="var(--emerald-accent)"
          categoryProducts={mobileWearableProducts}
        />

        {/* 8. Popular Products Carousel */}
        <PopularProductsSection />
      </main>
    </div>
  );
}

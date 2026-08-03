import { useState, useEffect } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DashboardHeroSection,
  DealsAndOffersSection,
  CategoryBrowserSection,
  PromotionalBannersSection,
  PopularProductsSection,
  ContinueExploringSection,
  SavedProductsSection,
} from "@/components/dashboard/PersonalizedDashboardHero";
import { PersonalizedRecommendations } from "@/components/dashboard/PersonalizedRecommendations";
import { PersonalizationOnboarding } from "@/components/dashboard/PersonalizationOnboarding";
import { getUserPreferences, type UserPreferences } from "@/lib/preferences";
import { products } from "@/data";
import { supabase } from "@/supabase";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      throw redirect({ to: "/login" });
    }
  },
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

  const computingProducts = products.filter((p) => p.categorySlug === "computing");
  const audioProducts = products.filter((p) => p.categorySlug === "audio");
  const mobileWearableProducts = products.filter(
    (p) => p.categorySlug === "mobile" || p.categorySlug === "wearables" || p.categorySlug === "cameras"
  );

  if (prefs === null) return null;

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <PersonalizationOnboarding
          onComplete={handleOnboardingComplete}
          initialPreferences={prefs}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="relative space-y-2 pb-16">
        <DashboardHeroSection />
        <PersonalizedRecommendations />
        <ContinueExploringSection />
        <DealsAndOffersSection />
        <CategoryBrowserSection
          title="Computing & productivity"
          categorySlug="computing"
          accentColor="var(--emerald-accent)"
          categoryProducts={computingProducts}
        />
        <CategoryBrowserSection
          title="Audio & sound"
          categorySlug="audio"
          accentColor="var(--cyan-accent)"
          categoryProducts={audioProducts}
        />
        <PromotionalBannersSection />
        <CategoryBrowserSection
          title="Consumer electronics & gadgets"
          categorySlug="mobile"
          accentColor="var(--emerald-accent)"
          categoryProducts={mobileWearableProducts}
        />
        <SavedProductsSection />
        <PopularProductsSection />
      </main>
    </div>
  );
}

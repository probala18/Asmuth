"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

export default function DashboardPage() {
  const router = useRouter();
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/login");
      } else {
        setLoadingSession(false);
      }
    });
  }, [router]);

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

  if (loadingSession || prefs === null) return null;

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

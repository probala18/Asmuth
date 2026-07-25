import { createFileRoute } from "@tanstack/react-router";
import { LoggedInNavbar } from "@/components/dashboard/LoggedInNavbar";
import {
  DashboardHeroSection,
  DealsAndOffersSection,
  CategoryBrowserSection,
  PromotionalBannersSection,
  PopularProductsSection,
} from "@/components/dashboard/PersonalizedDashboardHero";
import { PersonalizedRecommendations } from "@/components/dashboard/PersonalizedRecommendations";
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
  // Group products by category for the browser sections
  const computingProducts = products.filter((p) => p.categorySlug === "computing");
  const audioProducts = products.filter((p) => p.categorySlug === "audio");
  const mobileWearableProducts = products.filter(
    (p) => p.categorySlug === "mobile" || p.categorySlug === "wearables" || p.categorySlug === "cameras"
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Logged-in Floating Navbar */}
      <LoggedInNavbar />

      <main className="relative space-y-2">
        {/* 1. Hero: Category Sidebar + Banner + User Card */}
        <DashboardHeroSection />

        {/* 2. Deals & Offers: Countdown + Discount Products */}
        <DealsAndOffersSection />

        {/* 3. Category Browser: Computing */}
        <CategoryBrowserSection
          title="Computing & productivity"
          categorySlug="computing"
          accentColor="var(--emerald-accent)"
          categoryProducts={computingProducts}
        />

        {/* 4. Category Browser: Audio */}
        <CategoryBrowserSection
          title="Audio & sound"
          categorySlug="audio"
          accentColor="var(--cyan-accent)"
          categoryProducts={audioProducts}
        />

        {/* 5. Promotional Banners */}
        <PromotionalBannersSection />

        {/* 6. Category Browser: Mobile, Wearables & Cameras */}
        <CategoryBrowserSection
          title="Consumer electronics & gadgets"
          categorySlug="mobile"
          accentColor="var(--emerald-accent)"
          categoryProducts={mobileWearableProducts}
        />

        {/* 7. Popular Products Carousel */}
        <PopularProductsSection />

        {/* 8. Personalized Recommendations */}
        <PersonalizedRecommendations />
      </main>
    </div>
  );
}

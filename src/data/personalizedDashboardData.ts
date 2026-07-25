/* ─── genCART — Personalized Dashboard Data ───────────────── */

export interface DashboardUser {
  name: string;
  firstName: string;
  email: string;
  avatar: string;
  savedCount: number;
  unreadNotifications: number;
  interests: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "deal" | "guide" | "compare";
  link: string;
}

export interface RecommendedProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  reason: string;
  image: string;
  badge?: string;
  accent: string;
  specs: { label: string; value: string }[];
}

export const dashboardData = {
  user: {
    name: "Bala Sundar",
    firstName: "Bala",
    email: "bala@gencart.io",
    avatar: "/assets/product-watch.jpg", // high-res local image used as avatar fallback
    savedCount: 3,
    unreadNotifications: 2,
    interests: ["Computing", "Audio", "Wearables", "AI & Automation"],
  } as DashboardUser,

  notifications: [
    {
      id: "1",
      title: "genCART Laptop Air price dropped 15%",
      description: "Now available for $999 ($200 off reference MSRP).",
      time: "12m ago",
      read: false,
      type: "deal",
      link: "/deals",
    },
    {
      id: "2",
      title: "New comparison: Laptop Air vs MacBook Pro M3",
      description: "Fresh editorial benchmark matrix published today.",
      time: "1h ago",
      read: false,
      type: "compare",
      link: "/compare",
    },
    {
      id: "3",
      title: "Buying Guide Updated: Best ANC Earbuds 2026",
      description: "Includes new reference testing for genCART Buds Pro.",
      time: "1d ago",
      read: true,
      type: "guide",
      link: "/guides",
    },
  ] as NotificationItem[],

  recommendations: [
    {
      id: "rec-1",
      slug: "genCART-laptop-air",
      name: "genCART Laptop Air",
      category: "Computing",
      rating: 4.9,
      reviewCount: 3412,
      price: 999,
      originalPrice: 1199,
      reason: "Because you explored laptops & creator tools",
      image: "/assets/product-laptop.jpg",
      badge: "Editors Choice",
      accent: "var(--emerald-accent)",
      specs: [
        { label: "Chip", value: "genCART M-class 12-core" },
        { label: "Display", value: "14.2\" OLED 120Hz" },
        { label: "Battery", value: "22 hours all-day" },
      ],
    },
    {
      id: "rec-2",
      slug: "genCART-buds-pro",
      name: "genCART Buds Pro",
      category: "Audio",
      rating: 4.9,
      reviewCount: 2341,
      price: 129,
      originalPrice: 159,
      reason: "Popular with users with your audio profile",
      image: "/assets/product-headphones.jpg",
      badge: "Bestseller",
      accent: "var(--cyan-accent)",
      specs: [
        { label: "Driver", value: "11mm custom dynamic" },
        { label: "ANC", value: "Adaptive 200x/sec" },
        { label: "Battery", value: "9.4h with ANC" },
      ],
    },
    {
      id: "rec-3",
      slug: "genCART-watch-x",
      name: "genCART Watch X",
      category: "Wearables",
      rating: 4.8,
      reviewCount: 1856,
      price: 199,
      originalPrice: 249,
      reason: "Trending match in Titanium Wearables",
      image: "/assets/product-watch.jpg",
      badge: "Top Match",
      accent: "var(--emerald-accent)",
      specs: [
        { label: "Display", value: "1.47\" AMOLED AOD" },
        { label: "Battery", value: "72 hours typical" },
        { label: "Body", value: "Grade 5 Titanium" },
      ],
    },
  ] as RecommendedProduct[],
};

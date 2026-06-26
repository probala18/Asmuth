/* ─── ASMUTH — Category Data ────────────────────────────────── */
import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "computing",
    name: "Computing",
    description: "Laptops, tablets, and workspace performance tools.",
    icon: "Laptop",
    productCount: 2,
    image: "/assets/product-laptop.jpg",
    featured: true,
  },
  {
    slug: "audio",
    name: "Audio",
    description: "Reference headphones, studio monitors, and wireless buds.",
    icon: "Headphones",
    productCount: 2,
    image: "/assets/product-headphones.jpg",
    featured: true,
  },
  {
    slug: "mobile",
    name: "Mobile",
    description: "Flagship phones and pocket-sized computational tools.",
    icon: "Smartphone",
    productCount: 1,
    image: "/assets/product-phone.jpg",
    featured: true,
  },
  {
    slug: "wearables",
    name: "Wearables",
    description: "Intelligent timepieces and vitals monitoring.",
    icon: "Watch",
    productCount: 1,
    image: "/assets/product-watch.jpg",
    featured: true,
  },
  {
    slug: "cameras",
    name: "Cameras",
    description: "Mirrorless cinema gear and creative imaging.",
    icon: "Camera",
    productCount: 1,
    image: "/assets/product-phone.jpg",
    featured: true,
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    description: "Matter-ready smart hubs and invisible home control.",
    icon: "Home",
    productCount: 1,
    image: "/assets/product-watch.jpg",
    featured: false,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

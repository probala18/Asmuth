/* ─── genCART — Brand Data ────────────────────────────────────── */
import type { Brand } from "@/types";

export const brands: Brand[] = [
  {
    slug: "genCART",
    name: "genCART",
    logo: "genCART Logo",
    description: "Architects of quiet, high-performance physical computing.",
    productCount: 8,
    website: "https://genCART.design",
    featured: true,
  },
  {
    slug: "linear",
    name: "Linear Labs",
    logo: "Linear Logo",
    description: "Tools optimized for high-speed software planning and development.",
    productCount: 0,
    website: "https://linear.app",
    featured: true,
  },
  {
    slug: "stripe",
    name: "Stripe",
    logo: "Stripe Logo",
    description: "Financial infrastructure for the internet, built with perfect design.",
    productCount: 0,
    website: "https://stripe.com",
    featured: true,
  },
  {
    slug: "vercel",
    name: "Vercel",
    logo: "Vercel Logo",
    description: "The frontend platform for hosting, feedback, and performance.",
    productCount: 0,
    website: "https://vercel.com",
    featured: true,
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

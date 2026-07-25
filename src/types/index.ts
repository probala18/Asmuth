/* ─── genCART — Core Types ──────────────────────────────────── */

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  badge?: "bestseller" | "new" | "editors-choice" | "trending" | "deal";
  shortDescription: string;
  description: string;
  affiliateUrl: string;
  specs: ProductSpec[];
  pros: string[];
  cons: string[];
  isTrending?: boolean;
  isBestSeller?: boolean;
  isEditorsPick?: boolean;
  createdAt: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
  image?: string;
  featured?: boolean;
}

export interface Brand {
  slug: string;
  name: string;
  logo: string;
  description: string;
  productCount: number;
  website: string;
  featured?: boolean;
}

export interface Review {
  slug: string;
  productSlug: string;
  productName: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  overallScore: number;
  image: string;
  scores: ReviewScore[];
  pros: string[];
  cons: string[];
  verdict: string;
  badge?: "editors-choice" | "best-value" | "premium-pick";
}

export interface ReviewScore {
  label: string;
  value: number;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  sections: GuideSection[];
  relatedProducts: string[];
}

export interface GuideSection {
  title: string;
  content: string;
}

export interface Comparison {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  products: string[];
  image: string;
  publishedAt: string;
  specs: ComparisonSpec[];
  verdict: string;
  winner: string;
}

export interface ComparisonSpec {
  label: string;
  values: { productSlug: string; value: string; isWinner: boolean }[];
}

export interface Deal {
  productSlug: string;
  discountPercent: number;
  endTime: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasMega?: boolean;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

# genCART / Asmuth — Complete Project Overview

## Project Summary

`genCART` is a content-first storefront and editorial site built with Next.js 16 App Router. It blends product reviews, buying guides, curated collections, and comparison content with an immersive, animation-driven UI.

## Technology Stack

- **Framework:** Next.js 16.2.12
- **Language:** TypeScript 5.8.3
- **React:** 19.2.8
- **Styling:** Tailwind CSS 4.2.1
- **Animation:** GSAP 3.15.0, `motion/react`
- **Icons:** `lucide-react`
- **Bundling / Deployment:** Vercel

## Project Structure

- `src/app/` — Active Next.js App Router pages and layouts
- `src/components/` — Shared UI components, motion utilities, dashboards, product cards
- `src/data/` — Static content sources for products, reviews, guides, brands, categories
- `src/lib/` — Utility and feature helpers for auth, preferences, search, error handling
- `src/types/` — TypeScript interfaces for app data models
- `src/assets/` — Static assets and visuals
- `src/routes/` — Legacy TanStack Router files (excluded from current build)

## Route Map

### Static app routes

- `/`
- `/about`
- `/affiliate-disclosure`
- `/best-of-2026`
- `/best-products`
- `/brands`
- `/categories`
- `/collections`
- `/compare`
- `/contact`
- `/dashboard`
- `/deals`
- `/dmca`
- `/editorial-policy`
- `/faq`
- `/guides`
- `/how-we-review`
- `/login`
- `/new-arrivals`
- `/privacy-policy`
- `/recently-viewed`
- `/reviews`
- `/search`
- `/sitemap.xml`
- `/terms`
- `/trending`
- `/wishlist`

### Dynamic app routes

- `/best/[category]`
- `/brand/[slug]`
- `/category/[slug]`
- `/compare/[slug]`
- `/guides/[slug]`
- `/product/[slug]`
- `/reviews/[slug]`

## Key Files

- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration
- `vercel.json` — Vercel deployment adapter config
- `src/app/layout.tsx` — Root layout metadata and global HTML structure
- `src/components/site/motion.tsx` — Client-only animated UI helpers and scroll-triggered effects
- `src/data/` — Primary static content sources consumed by pages
- `src/types/index.ts` — Domain model definitions used across app pages

## Deployment

- Deployed successfully to Vercel: `https://asmuth-kl6wtpmuo-balasundar0307-6539s-projects.vercel.app`
- Alias: `https://asmuth.vercel.app`

## Build Commands

- Local development: `npm run dev`
- Production build: `npm run build`

## Recent Fixes

- Added `"use client"` to `src/components/site/motion.tsx` to satisfy React Server/Client component rules.
- Updated the `Guide` type and guide page rendering to use `sections` instead of a nonexistent `content` property.
- Adjusted review detail page markup to avoid invalid fields on `Review` and `ReviewScore` types.
- Fixed callback refs in `src/components/site/CinematicHero.tsx` and `src/components/site/ProductStorytelling.tsx` to satisfy React ref callback signature.
- Excluded legacy TanStack Router and Start files from TypeScript compilation.
- Added `vercel.json` to force Vercel deployment on the Next.js adapter and avoid stale Vite detection.

## Notes

- The repository still contains legacy TanStack Router and TanStack Start files under `src/routes`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, and `src/routeTree.gen.ts`.
- These legacy files are currently excluded from the active TypeScript build by `tsconfig.json` to avoid build-time dependency drift.
- Active routing and page rendering are handled exclusively through the `src/app` directory.

## Recommended Next Steps

1. Remove or archive legacy `src/routes/*` and related TanStack Start files once the migration is complete.
2. Keep `tsconfig.json` and `vercel.json` aligned with the active Next.js deployment configuration.
3. Add E2E tests for key page flows if future validation is needed.

---

Generated for project overview and maintenance reference.

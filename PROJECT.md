# genCART / Asmuth

## Project Overview

This is a Next.js 16 app using the App Router. It is a content-driven storefront and editorial site for product reviews, buying guides, comparisons, and curated premium tech.

## Key Stack

- Next.js 16.2.12
- React 19.2.8
- TypeScript 5.8.3
- Tailwind CSS 4.2.1
- GSAP 3.15.0
- Vercel deployment

## Current Status

- Local production build passes successfully after excluding legacy `src/routes`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, and `vite.config.ts` from TypeScript checks.
- Deployed successfully to Vercel: `https://asmuth-kl6wtpmuo-balasundar0307-6539s-projects.vercel.app`
- Alias available: `https://asmuth.vercel.app`

## Build

```bash
npm run build
```

## Development

```bash
npm run dev
```

## Notes

- The project contains legacy TanStack Router / Start files that are no longer part of the active Next.js app route tree.
- A `vercel.json` file forces Next.js deployment and prevents Vercel from running the stale Vite build path.
- The app routes live under `src/app`.

## Useful Files

- `src/app/layout.tsx` — Next.js root layout
- `next.config.ts` — Next.js config
- `tsconfig.json` — TypeScript config, excludes legacy router files
- `vercel.json` — Vercel deployment config

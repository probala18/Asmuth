# genCART

genCART is a premium editorial e-commerce website built with React, TypeScript, Tailwind CSS, and TanStack Start. It combines product discovery, reviews, guides, and shopping navigation into a polished responsive experience.

## Features

- Responsive homepage with hero and editorial content
- Dark / light theme toggle
- Navbar with mega menu and category navigation
- Product listings, reviews, brands, and buying guides
- Tailwind CSS styling with reusable UI components
- Static asset support for logo and product imagery

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- TanStack Router
- TanStack Start
- GSAP
- Three.js

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
cd c:\Users\BALASUNDAR M\Downloads\e-commerce\genCART
npm install
```

### Run in development

```bash
npm run dev -- --host 127.0.0.1 --port 4174
```

Open your browser to:

```text
http://127.0.0.1:4174
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/`
  - `assets/` — static images used by the site
  - `components/` — shared UI and page components
    - `site/` — top-level site components like `Navbar`, `Footer`, `ThemeProvider`, and hero sections
    - `ui/` — reusable UI primitives and Radix-wrapped components
  - `data/` — product, brand, review, guide, and content data
  - `routes/` — page route components and metadata
  - `types/` — application TypeScript types
  - `server.ts` — SSR entry wrapper used by TanStack Start
  - `start.ts` — client entry point
  - `router.tsx` — router configuration

- `public/` — public assets and static files
  - `assets/` — logo and other static media files

## Branding

The site header logo is handled in:

- `src/components/site/Navbar.tsx`

The uploaded logo asset is located at:

- `public/assets/logo.png`

## Theming

Theme state is managed in:

- `src/components/site/ThemeProvider.tsx`
- `src/components/site/ThemeToggle.tsx`

## Notes

- This repo uses standard Vite and TanStack Start configuration for local development and builds.
- The Vite config is minimal, with server entry configured via `server: { entry: "server" }`.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — lint source files
- `npm run format` — format files with Prettier

## License

No license is specified in the repo. Add a `LICENSE` file if you want to define one.

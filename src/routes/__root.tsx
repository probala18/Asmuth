import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/app-error-reporting";
import { useAuthSession } from "../lib/auth";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { Navbar } from "../components/site/Navbar";
import { LoggedInNavbar } from "../components/dashboard/LoggedInNavbar";
import { Footer } from "../components/site/Footer";
import { PageTransition } from "../components/site/PageTransition";
import { ThemeProvider } from "../components/site/ThemeProvider";
import { ScrollChoreography } from "../components/site/ScrollChoreography";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-accent-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That route isn't on the grid. Head back home.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went sideways. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-accent rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-glow rounded-full px-5 py-2.5 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "genCART — Future Commerce" },
      { name: "description", content: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks." },
      { name: "author", content: "genCART" },
      { name: "theme-color", content: "#FAFBFC" },
      { property: "og:title", content: "genCART — Future Commerce" },
      { property: "og:description", content: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@genCART" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useRouterState({ select: (s) => s.location.pathname });
  const { isAuthenticated, isAuthLoading } = useAuthSession();

  const showLoggedInShell = !isAuthLoading && isAuthenticated;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SmoothScroll>
          <div className="cine-progress" aria-hidden />
          {showLoggedInShell ? <LoggedInNavbar key="logged-in" /> : <Navbar key="public" />}
          <ScrollChoreography>
            <PageTransition>
              <main className="relative" data-route={location}>
                <Outlet />
              </main>
            </PageTransition>
          </ScrollChoreography>
          <Footer />
        </SmoothScroll>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

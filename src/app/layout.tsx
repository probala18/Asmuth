import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";
import { ensurePublicAssets } from "@/lib/ensure-assets";

export const viewport: Viewport = {
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: {
    default: "genCART — Future Commerce",
    template: "%s — genCART",
  },
  description: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks.",
  authors: [{ name: "genCART" }],
  openGraph: {
    title: "genCART — Future Commerce",
    description: "Curated premium tech. Editorial reviews, in-depth buying guides, and signal-grade product picks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@genCART",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  ensurePublicAssets();

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="impact-site-verification" content="2a6e00e4-d244-4820-8efa-43560afd107e" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

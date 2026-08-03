"use client";

import { usePathname } from "next/navigation";
import { useAuthSession } from "@/lib/auth";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Navbar } from "@/components/site/Navbar";
import { LoggedInNavbar } from "@/components/dashboard/LoggedInNavbar";
import { Footer } from "@/components/site/Footer";
import { PageTransition } from "@/components/site/PageTransition";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { ScrollChoreography } from "@/components/site/ScrollChoreography";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, isAuthLoading } = useAuthSession();
  const showLoggedInShell = !isAuthLoading && isAuthenticated;

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="cine-progress" aria-hidden />
        {showLoggedInShell ? <LoggedInNavbar key="logged-in" /> : <Navbar key="public" />}
        <ScrollChoreography>
          <PageTransition>
            <main className="relative" data-route={pathname}>
              {children}
            </main>
          </PageTransition>
        </ScrollChoreography>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}

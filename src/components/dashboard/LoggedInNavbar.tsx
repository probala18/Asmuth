import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Bookmark, 
  Bell, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { SearchCommand } from "./SearchCommand";
import { NotificationPanel } from "./NotificationPanel";
import { ProfileDropdown } from "./ProfileDropdown";
import { dashboardData } from "@/data/personalizedDashboardData";

const loggedInNavItems = [
  { label: "Discover", href: "/dashboard", active: true },
  { label: "Collections", href: "/collections" },
  { label: "Reviews", href: "/reviews" },
  { label: "Deals", href: "/deals" },
  { label: "Guides", href: "/guides" },
  { label: "Compare", href: "/compare" },
];

export function LoggedInNavbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentPath = useRouterState({ select: (s) => s.location.pathname });

  // GSAP ScrollTrigger for smooth navbar height & blur compression on scroll
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let isMounted = true;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const nav = navRef.current;
      if (!nav || !isMounted) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const scrollTween = gsap.to(nav, {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
        borderColor: "var(--hairline)",
        ease: "none",
        scrollTrigger: {
          start: "top+=20 top",
          end: "top+=80 top",
          scrub: 0.3,
        },
      });

      cleanup = () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    })();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <>
      {/* ── Floating Logged-in Control Bar Container ── */}
      <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 pt-4 pointer-events-none">
        <motion.div
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto rounded-full border border-[var(--hairline)] bg-background/85 backdrop-blur-xl px-5 py-2.5 transition-all shadow-xl pointer-events-auto flex items-center justify-between gap-4"
        >
          {/* LEFT: Logo & Personal Tag */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/dashboard" className="flex items-center gap-2 group">
              <div
                className="relative w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ background: "var(--gradient-accent)" }}
              >
                <span className="font-display text-sm font-bold text-background">Æ</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                genCART<span className="text-[var(--emerald-accent)] text-[10px] align-top ml-0.5">®</span>
              </span>
            </Link>

            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--surface)] text-[10px] font-mono-tech uppercase tracking-widest text-[var(--emerald-accent)] border border-[var(--hairline)]">
              <Sparkles className="size-3" /> Workspace
            </span>
          </div>

          {/* CENTER: Staggered Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {loggedInNavItems.map((item, idx) => {
              const isActive = item.href === "/dashboard" 
                ? currentPath === "/dashboard" 
                : currentPath.startsWith(item.href);

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                      isActive
                        ? "text-foreground bg-[var(--surface-2)] font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-3 h-0.5 rounded-full bg-[var(--emerald-accent)]" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* RIGHT: Search, Saved, Notifications, User Profile & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] text-xs text-muted-foreground hover:text-foreground border border-[var(--hairline)] transition-all"
            >
              <Search className="size-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[9px] font-mono-tech text-muted-foreground bg-[var(--surface-2)] px-1.5 py-0.5 rounded border border-[var(--hairline)]">
                ⌘K
              </kbd>
            </motion.button>

            {/* Saved Products Link */}
            <Link to="/wishlist">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] text-xs font-medium text-foreground border border-[var(--hairline)] transition-all hover:border-[var(--emerald-accent)]"
              >
                <Bookmark className="size-3.5 text-[var(--emerald-accent)]" />
                <span className="hidden sm:inline">Saved</span>
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-[var(--emerald-accent)]/20 text-[10px] font-mono-tech text-[var(--emerald-accent)] font-bold">
                  {dashboardData.user.savedCount}
                </span>
              </motion.div>
            </Link>

            {/* Notifications Button & Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-full bg-[var(--surface)] text-foreground border border-[var(--hairline)] hover:border-[var(--emerald-accent)] transition-all"
              >
                <Bell className="size-4" />
                {dashboardData.user.unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 size-2 rounded-full bg-[var(--emerald-accent)] animate-pulse" />
                )}
              </motion.button>
              <NotificationPanel
                isOpen={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
              />
            </div>

            {/* User Profile Button & Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--emerald-accent)] transition-all"
              >
                <div className="size-6 rounded-full overflow-hidden bg-[var(--surface-2)] border border-[var(--hairline)] shrink-0 flex items-center justify-center">
                  <img
                    src={dashboardData.user.avatar}
                    alt={dashboardData.user.name}
                    className="size-full object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-foreground hidden sm:inline">
                  {dashboardData.user.firstName}
                </span>
                <ChevronDown className="size-3 text-muted-foreground" />
              </motion.button>
              <ProfileDropdown
                isOpen={profileOpen}
                onClose={() => setProfileOpen(false)}
              />
            </div>

            <ThemeToggle />

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full surface-card border border-[var(--hairline)] md:hidden text-foreground"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── Search Modal ── */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-30 surface-card-2 border border-[var(--hairline)] rounded-3xl p-6 shadow-2xl space-y-4 md:hidden"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-[var(--hairline)]">
              <div className="size-10 rounded-full overflow-hidden bg-[var(--surface-2)]">
                <img src={dashboardData.user.avatar} alt={dashboardData.user.name} className="size-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold">{dashboardData.user.name}</p>
                <p className="text-xs text-muted-foreground">{dashboardData.user.email}</p>
              </div>
            </div>

            <nav className="space-y-1">
              {loggedInNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-medium hover:bg-[var(--surface)] transition-all"
                >
                  {item.label}
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

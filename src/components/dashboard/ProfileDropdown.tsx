import { Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { User, Bookmark, Scale, Sparkles, Settings, LogOut } from "lucide-react";
import { dashboardData } from "@/data/personalizedDashboardData";
import { supabase } from "@/supabase";

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDropdown({ isOpen, onClose }: ProfileDropdownProps) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    onClose();
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  const menuItems = [
    { icon: User, label: "Profile", href: "/dashboard" },
    { icon: Sparkles, label: "My Interests", href: "/dashboard" },
    { icon: Bookmark, label: "Saved Products", href: "/wishlist" },
    { icon: Scale, label: "My Comparisons", href: "/compare" },
    { icon: Settings, label: "Settings", href: "/dashboard" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 w-64 surface-card-2 border border-[var(--hairline)] rounded-2xl shadow-2xl overflow-hidden z-50 p-2 space-y-1"
          >
            {/* Header info */}
            <div className="p-3 border-b border-[var(--hairline)] mb-1">
              <p className="font-display text-sm font-semibold text-foreground">
                {dashboardData.user.name}
              </p>
              <p className="font-mono-tech text-[11px] text-muted-foreground truncate">
                {dashboardData.user.email}
              </p>
            </div>

            {/* Links */}
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-[var(--surface)] transition-all group"
                >
                  <Icon className="size-4 text-muted-foreground group-hover:text-[var(--emerald-accent)] transition-colors" />
                  {item.label}
                </Link>
              );
            })}

            {/* Logout button */}
            <div className="pt-1 border-t border-[var(--hairline)]">
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-rose-500 hover:bg-rose-500/10 transition-all"
              >
                <LogOut className="size-4" />
                Log Out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

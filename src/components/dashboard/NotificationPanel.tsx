import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Tag, Scale, BookOpen, Check } from "lucide-react";
import { dashboardData } from "@/data/personalizedDashboardData";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Backdrop to close on click outside */}
          <div className="fixed inset-0 z-40" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 w-80 sm:w-96 surface-card-2 border border-[var(--hairline)] rounded-2xl shadow-2xl overflow-hidden z-50 p-4 space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[var(--hairline)]">
              <div className="flex items-center gap-2">
                <Bell className="size-4 text-[var(--emerald-accent)]" />
                <span className="font-display text-sm font-semibold text-foreground">Notifications</span>
              </div>
              <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--emerald-accent)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full">
                {dashboardData.user.unreadNotifications} NEW
              </span>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {dashboardData.notifications.map((item) => {
                const Icon = item.type === "deal" ? Tag : item.type === "compare" ? Scale : BookOpen;
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    onClick={onClose}
                    className="block p-3 rounded-xl hover:bg-[var(--surface)] transition-all relative group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--emerald-accent)] shrink-0 mt-0.5">
                        <Icon className="size-4" />
                      </div>
                      <div className="space-y-1 pr-2">
                        <p className="text-xs font-semibold text-foreground group-hover:text-[var(--emerald-accent)] transition-colors leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-normal line-clamp-2">
                          {item.description}
                        </p>
                        <span className="font-mono-tech text-[10px] text-muted-foreground/60 block pt-0.5">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[var(--hairline)] text-center">
              <button
                onClick={onClose}
                className="text-xs font-mono-tech text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <Check className="size-3 text-[var(--emerald-accent)]" /> Mark all as read
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

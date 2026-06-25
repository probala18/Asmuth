import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      className={
        "relative inline-flex items-center justify-center size-10 rounded-full border border-[var(--hairline)] " +
        "bg-[var(--surface)]/60 backdrop-blur transition-all duration-300 " +
        "hover:border-[var(--emerald-accent)] hover:shadow-[0_0_20px_color-mix(in_oklab,var(--emerald-accent)_30%,transparent)] " +
        className
      }
    >
      <Sun
        className={`absolute size-4 transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute size-4 transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
    </button>
  );
}

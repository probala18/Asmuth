import { useEffect, useRef, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useRouterState({ select: (s) => s.location.pathname });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-enter-active");
    // force reflow
    void el.offsetHeight;
    el.classList.add("page-enter-active");
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [location]);

  return (
    <div ref={ref} key={location} className="page-enter page-enter-active">
      {children}
    </div>
  );
}

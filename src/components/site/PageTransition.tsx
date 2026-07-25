import { type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useRouterState({ select: (s) => s.location.pathname });
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
        transition={{
          duration: shouldReduceMotion ? 0.05 : 0.28,
          ease: [0.215, 0.61, 0.355, 1], // Custom luxury cubic-bezier ease
        }}
        onAnimationComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


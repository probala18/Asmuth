import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/shimmer-button.tsx
var ShimmerButton = React.forwardRef(({ shimmerColor = "var(--emerald-accent)", shimmerSize = "0.1em", shimmerDuration = "2.5s", borderRadius = "9999px", background = "rgba(16, 185, 129, 0.1)", className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(motion.button, {
		whileHover: { scale: 1.03 },
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 25
		},
		className: cn("group relative flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] rounded-full", "border border-[var(--hairline)] bg-[var(--surface)] dark:bg-[var(--surface-2)]", className),
		ref,
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "absolute inset-0 overflow-hidden rounded-full pointer-events-none",
			children: /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-[var(--emerald-accent)]/20 to-transparent" })
		}), /* @__PURE__ */ jsx("span", {
			className: "relative z-10 flex items-center gap-2",
			children
		})]
	});
});
ShimmerButton.displayName = "ShimmerButton";
//#endregion
export { cn as n, ShimmerButton as t };

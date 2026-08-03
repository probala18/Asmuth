import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/terms.tsx?tsr-split=component
function TermsPage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Legal"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Terms of Service",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground leading-relaxed",
					children: "The guidelines and rules for visiting and utilizing the content on genCART."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 font-sans leading-relaxed text-foreground/80",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "1. Content Usage"
					}), /* @__PURE__ */ jsx("p", { children: "All benchmarks, editorial ratings, custom images, and text content published on genCART are copyrighted material. You may not scrape, copy, or republish our ratings or content without explicit written permission from our editorial board." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "2. Disclaimer of Liability"
					}), /* @__PURE__ */ jsx("p", { children: "genCART reviews and guides represent our editorial opinions based on laboratory benchmarks and daily driving. We are not liable for any issues, malfunctions, or warranty disputes arising from products you choose to purchase via links on our platform." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "3. Modifications to Service"
					}), /* @__PURE__ */ jsx("p", { children: "We reserve the right to modify, adjust scores, update benchmarks, or terminate parts of the genCART site at any time without prior notification." })]
				})
			]
		})]
	});
}
//#endregion
export { TermsPage as component };

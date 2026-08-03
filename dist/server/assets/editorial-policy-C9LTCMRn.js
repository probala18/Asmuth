import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/editorial-policy.tsx?tsr-split=component
function EditorialPolicyPage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Integrity"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Editorial Policy",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground leading-relaxed",
					children: "genCART stands for absolute editorial clarity. Our policy outlines our values, correction procedures, and independence principles."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 font-sans leading-relaxed text-foreground/80",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Independence and Autonomy"
					}), /* @__PURE__ */ jsx("p", { children: "genCART editors and writers have complete control over all reviews, articles, and guides. We do not pitch ideas to companies prior to testing, and we never show drafts of our coverage to any external entity before publication. If a product fails our laboratory benchmarks, we report it exactly as is." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Correction Guidelines"
					}), /* @__PURE__ */ jsx("p", { children: "While we strive for perfect accuracy in our hardware specifications, prices, and software details, errors can occur. When we identify a material error, we correct it immediately and append a public note to the top of the article detailing what was corrected." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Affiliate Relationship Separation"
					}), /* @__PURE__ */ jsx("p", { children: "Our review and guide authors are completely separated from our business and marketing teams. The editorial team selects which products to evaluate based on merit and reader interest, completely unaware of potential affiliate contracts or rates." })]
				})
			]
		})]
	});
}
//#endregion
export { EditorialPolicyPage as component };

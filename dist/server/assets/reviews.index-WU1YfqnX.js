import { n as reviews } from "./reviews-CbTxooB7.js";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.js";
import { r as ReviewCard } from "./ContentCards-BPnars1F.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/reviews.index.tsx?tsr-split=component
function ReviewsIndexPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-6xl mx-auto text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)] mb-3",
					children: "Independent Editorial"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Expert lab reviews",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-muted-foreground max-w-xl mx-auto",
					children: ["Three-week daily usage, standardised benchmarks, no sponsored content. ", /* @__PURE__ */ jsx(HandUnderline, { children: "We test it ourselves." })]
				})
			]
		})]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: reviews.map((r) => /* @__PURE__ */ jsx(ReviewCard, { review: r }, r.slug))
		})
	})] });
}
//#endregion
export { ReviewsIndexPage as component };

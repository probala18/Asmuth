import { i as products } from "./products-DK41-WSW.js";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.js";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/new-arrivals.tsx?tsr-split=component
function NewArrivalsPage() {
	const newProducts = [...products].sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-6xl mx-auto text-center space-y-4",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Catalog Updates"
					}),
					/* @__PURE__ */ jsx(SplitTextReveal, {
						text: "New Arrivals",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-muted-foreground text-sm max-w-md mx-auto",
						children: [
							"The newest additions to our collection. ",
							/* @__PURE__ */ jsx(HandUnderline, { children: "Freshly audited and verified" }),
							" by our hardware editorial team."
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-12",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: newProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.slug))
			})
		})
	})] });
}
//#endregion
export { NewArrivalsPage as component };

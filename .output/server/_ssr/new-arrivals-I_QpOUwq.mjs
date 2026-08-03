import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline } from "./motion-CSNJjo3r.mjs";
import { i as products } from "./products-DK41-WSW.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-arrivals-I_QpOUwq.js
var import_jsx_runtime = require_jsx_runtime();
function NewArrivalsPage() {
	const newProducts = [...products].sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
						children: "Catalog Updates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
						text: "New Arrivals",
						className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-sm max-w-md mx-auto",
						children: [
							"The newest additions to our collection. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandUnderline, { children: "Freshly audited and verified" }),
							" by our hardware editorial team."
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 lg:px-10 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: newProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		})
	})] });
}
//#endregion
export { NewArrivalsPage as component };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Inbox, V as ExternalLink, dt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as brands } from "./brands-BwVAGUhx.mjs";
import { t as Route } from "./brand._slug-B1AeH0yE.mjs";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand._slug-CraW2SbD.js
var import_jsx_runtime = require_jsx_runtime();
function BrandDetailPage() {
	const { brand, brandProducts } = Route.useLoaderData();
	const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/brands",
					className: "inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 group-hover:-translate-x-1 transition-transform" }), "Back to Brands"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--hairline)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
								children: "Brand Directory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
								text: brand.name,
								className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-lg max-w-xl leading-relaxed",
								children: brand.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start md:items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-mono-tech uppercase tracking-wider",
							children: "Official Site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: brand.website,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-ghost-glow rounded-full px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5",
							children: [
								brand.name.toLowerCase(),
								".design ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
							]
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-2xl font-semibold",
						children: [
							"Catalog (",
							brandProducts.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							"Products manufactured by ",
							brand.name,
							" featured on genCART."
						]
					})]
				}), brandProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: brandProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-12 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "No active products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground max-w-xs",
							children: [
								"We currently don't list any direct affiliate products for ",
								brand.name,
								". Check back later as our editorial catalog expands."
							]
						})
					]
				})]
			})
		}),
		otherBrands.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 lg:px-10 py-16 border-t border-[var(--hairline)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl font-bold mb-8",
					children: "Other partner manufacturers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
					children: otherBrands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6 rounded-2xl border border-[var(--hairline)] flex justify-between items-center group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "font-display font-semibold group-hover:text-[var(--emerald-accent)] transition-colors",
							children: b.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1 line-clamp-1",
							children: b.description
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/brand/${b.slug}`,
							className: "btn-ghost-glow p-2 rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 rotate-180" })
						})]
					}, b.slug))
				})]
			})
		})
	] });
}
//#endregion
export { BrandDetailPage as component };

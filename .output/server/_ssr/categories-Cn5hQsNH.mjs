import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal, n as HandUnderline, u as TiltCard } from "./motion-CSNJjo3r.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as categories } from "./categories-BkPZMTJV.mjs";
import { K as CircleQuestionMark, t as lucide_react_exports } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-Cn5hQsNH.js
var import_jsx_runtime = require_jsx_runtime();
function CategoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-5xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-8 h-px bg-[var(--emerald-accent)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
								children: "Browse the collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-8 h-px bg-[var(--emerald-accent)]" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
						text: "Discover every category",
						className: "font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-muted-foreground max-w-xl mx-auto",
						children: [
							"From ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandUnderline, { children: "flagship silicon" }),
							" to ambient smart home — the entire 2026 catalog, organized."
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 lg:px-10 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: categories.map((c) => {
				const IconComponent = lucide_react_exports[c.icon] || CircleQuestionMark;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					className: "surface-card-2 p-10 relative overflow-hidden group flex flex-col justify-between",
					max: 5,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-accent)_15%,transparent)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-16 rounded-2xl bg-[var(--surface)] border border-[var(--emerald-accent)]/25 grid place-items-center mb-8 group-hover:glow-emerald transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "size-7 text-[var(--emerald-accent)]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold mb-2",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed mb-6",
									children: c.description
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-[var(--hairline)]/50 pt-6 mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono-tech text-xs text-[var(--emerald-accent)]",
								children: [c.productCount, " products"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/category/${c.slug}`,
								className: "text-xs font-semibold text-foreground/70 hover:text-[var(--emerald-accent)] transition",
								children: "Explore →"
							})]
						})
					]
				}, c.slug);
			})
		})
	})] });
}
//#endregion
export { CategoriesPage as component };

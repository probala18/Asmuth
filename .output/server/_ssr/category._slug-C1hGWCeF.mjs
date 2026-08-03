import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCategory } from "./categories-BkPZMTJV.mjs";
import { J as CircleCheckBig, _ as Send, lt as ArrowUpDown, m as SlidersHorizontal, v as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-C1hGWCeF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email.trim()) return;
		setSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1200));
		setSubmitted(true);
		setSubmitting(false);
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl surface-card-2 p-8 lg:p-12 border border-[var(--hairline)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -right-20 -bottom-20 size-72 rounded-full blur-3xl opacity-20",
			style: { background: "var(--gradient-accent)" }
		}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center text-center py-6 animate-fade-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-14 text-[var(--success)] mb-4 animate-bounce" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold mb-2",
					children: "Welcome aboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-sm",
					children: "You've subscribed to The Signal. Get ready for five products worth your attention next Sunday."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[var(--emerald-accent)] mb-3",
					children: "The Signal · Weekly"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-3xl lg:text-4xl font-semibold mb-3 tracking-tight",
					children: [
						"Future-grade tech, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent-gradient",
							children: "delivered weekly"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm max-w-md leading-relaxed",
					children: "One email. Five products worth your attention. Zero ad clutter. Zero noise."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex items-center gap-2 max-w-md w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "you@signal.com",
					disabled: submitting,
					className: "flex-1 h-12 rounded-full bg-background border border-[var(--hairline)] px-5 text-sm placeholder:text-muted-foreground focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition-all"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: submitting,
					className: "btn-accent rounded-full h-12 px-6 inline-flex items-center gap-2 text-sm font-semibold disabled:opacity-50 cursor-pointer",
					children: [submitting ? "Sending..." : "Subscribe", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground mt-3 pl-4",
				children: "We respect your privacy. Unsubscribe at any time."
			})] })]
		})]
	});
}
function Filters({ searchQuery, setSearchQuery, sortBy, setSortBy, sortOptions, placeholder = "Search items..." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex-1 max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				value: searchQuery,
				onChange: (e) => setSearchQuery(e.target.value),
				placeholder,
				className: "w-full h-11 pl-11 pr-4 bg-background border border-[var(--hairline)] rounded-xl text-sm placeholder:text-muted-foreground focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/20 transition-all"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-mono-tech uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "size-3.5" }), " Sort by"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: sortBy,
					onChange: (e) => setSortBy(e.target.value),
					className: "h-11 px-4 pr-10 bg-background border border-[var(--hairline)] rounded-xl text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/20 transition-all appearance-none cursor-pointer font-medium text-foreground",
					children: sortOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: opt.value,
						children: opt.label
					}, opt.value))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5" })
				})]
			})]
		})]
	});
}
var $$splitComponentImporter = () => import("./category._slug-DqyXiz5B.mjs");
var Route = createFileRoute("/category/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const cat = getCategory(params.slug);
		return { meta: [{ title: cat ? `${cat.name} — genCART` : "Category — genCART" }, {
			name: "description",
			content: cat ? cat.description : "Browse premium products in this category."
		}] };
	},
	loader: ({ params }) => {
		const cat = getCategory(params.slug);
		if (!cat) throw notFound();
		return { category: cat };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Newsletter as n, Route as r, Filters as t };

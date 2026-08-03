import { n as getProduct } from "./products-DK41-WSW.js";
import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { r as ProductCard } from "./ProductCards-DO0DKzl3.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Eye, Trash2 } from "lucide-react";
//#region src/routes/recently-viewed.tsx?tsr-split=component
function RecentlyViewedPage() {
	const [historyItems, setHistoryItems] = useState([]);
	useEffect(() => {
		try {
			const stored = localStorage.getItem("genCART-recently-viewed");
			if (stored) setHistoryItems(JSON.parse(stored).map((s) => getProduct(s)).filter((p) => !!p));
			else {
				const defaults = ["genCART-watch-x", "genCART-buds-pro"];
				setHistoryItems(defaults.map((s) => getProduct(s)).filter((p) => !!p));
				localStorage.setItem("genCART-recently-viewed", JSON.stringify(defaults));
			}
		} catch (e) {
			console.error(e);
		}
	}, []);
	const handleClear = () => {
		localStorage.removeItem("genCART-recently-viewed");
		setHistoryItems([]);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-glow opacity-70" }), /* @__PURE__ */ jsxs("div", {
			className: "relative max-w-6xl mx-auto text-center space-y-4",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Your Activity"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Recently Viewed",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-sm max-w-md mx-auto",
					children: "Your recently browsed equipment, specifications sheets, and lab analysis reports."
				})
			]
		})]
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 lg:px-10 py-8 min-h-[400px]",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto space-y-6",
			children: historyItems.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex justify-between items-center border-b border-[var(--hairline)] pb-4",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-xs font-mono-tech uppercase text-muted-foreground",
					children: [
						historyItems.length,
						" Visited item",
						historyItems.length !== 1 ? "s" : ""
					]
				}), /* @__PURE__ */ jsxs("button", {
					onClick: handleClear,
					className: "text-xs text-[var(--cyan-accent)] hover:text-foreground font-semibold flex items-center gap-1.5 transition-colors cursor-pointer",
					children: [/* @__PURE__ */ jsx(Trash2, { className: "size-4" }), " Clear History"]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: historyItems.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.slug))
			})] }) : /* @__PURE__ */ jsxs("div", {
				className: "text-center py-20 border border-dashed border-[var(--hairline)] rounded-3xl surface-card flex flex-col items-center justify-center space-y-4",
				children: [
					/* @__PURE__ */ jsx(Eye, { className: "size-12 text-muted-foreground" }),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl font-semibold",
						children: "Your history is clear"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground max-w-xs",
						children: "Items you view while exploring our site will show up here."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pt-2",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/categories",
							className: "btn-accent rounded-full px-6 py-3 text-xs font-semibold",
							children: "Browse Products"
						})
					})
				]
			})
		})
	})] });
}
//#endregion
export { RecentlyViewedPage as component };

import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/affiliate-disclosure.tsx?tsr-split=component
function AffiliateDisclosurePage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Transparency"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "Affiliate Disclosure",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground leading-relaxed",
					children: "How genCART funds independent reviews. We believe in complete financial transparency with our readers."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 font-sans leading-relaxed text-foreground/80",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "How We Earn Commission"
					}), /* @__PURE__ */ jsx("p", { children: "When you click a link on genCART to purchase a product from Amazon or other retail partners, we receive a small commission from that sale. This does not increase the price you pay; the retailer shares a portion of their standard margin with us as a referral partner." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Amazon Associate Program"
					}), /* @__PURE__ */ jsx("p", { children: "genCART is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Separation of Editorial and Affiliate Business"
					}), /* @__PURE__ */ jsx("p", { children: "Our writers, benchmark engineers, and laboratory testers do not know which affiliate programs genCART has or what commission rates are earned from various stores. The editorial evaluation of a product's performance is conducted without commercial influence." })]
				})
			]
		})]
	});
}
//#endregion
export { AffiliateDisclosurePage as component };

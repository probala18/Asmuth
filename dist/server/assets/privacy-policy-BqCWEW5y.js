import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/privacy-policy.tsx?tsr-split=component
function PrivacyPolicyPage() {
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
					text: "Privacy Policy",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground leading-relaxed",
					children: "How genCART handles user information. We collect minimal data, focusing entirely on a fast, telemetry-free experience."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 font-sans leading-relaxed text-foreground/80",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Data Collection"
					}), /* @__PURE__ */ jsx("p", { children: "We do not require accounts to browse genCART. If you sign up for our newsletter, we collect only your email address. We do not use invasive tracking pixels or cross-site tracking scripts." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Cookies"
					}), /* @__PURE__ */ jsx("p", { children: "We use simple local storage values to persist user interface choices, such as your light/dark theme preference and active search filters. We do not sell this cookie data or share it with advertisers." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Third-Party Links"
					}), /* @__PURE__ */ jsx("p", { children: "When you click affiliate links to Amazon or partner brands, those external platforms will use cookies and track referrals in accordance with their own respective privacy policies." })]
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPolicyPage as component };

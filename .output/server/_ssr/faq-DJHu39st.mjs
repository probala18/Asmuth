import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as SplitTextReveal } from "./motion-CSNJjo3r.mjs";
import { K as CircleQuestionMark, Q as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DJHu39st.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		question: "How do you test and review products?",
		answer: "Every product reviewed on genCART undergoes at least two weeks of daily usage in real-world scenarios. We do not accept sponsored reviews or payments to influence our ratings. We test items under standard lab conditions and practical daily environments.",
		category: "General"
	},
	{
		question: "How does the affiliate link model work?",
		answer: "When you click a link on our platform to purchase a product from Amazon or other retailers, we may earn a small referral commission at no additional cost to you. This helps fund our independent testing lab and team of writers.",
		category: "Affiliate"
	},
	{
		question: "Do you get free review units from brands?",
		answer: "Occasionally, brands will send us review units. However, we return these units after testing or purchase them ourselves to maintain absolute editorial integrity. We never agree to positive coverage in exchange for hardware.",
		category: "Editorial"
	}
];
function FaqPage() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	const toggleFaq = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Help Desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitTextReveal, {
					text: "Common FAQs",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto",
					children: "Need a quick answer? We explain how we operate, how we maintain independence, and how we fund our research."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: faqs.map((faq, idx) => {
				const isOpen = openIndex === idx;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card rounded-2xl border border-[var(--hairline)] overflow-hidden transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleFaq(idx),
						className: "w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--surface-2)]/40 transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display font-semibold text-lg flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-5 text-[var(--emerald-accent)] shrink-0" }), faq.question]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-[var(--hairline)]" : "max-h-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6 text-sm text-muted-foreground leading-relaxed font-sans whitespace-pre-line bg-[var(--surface)]/30",
							children: faq.answer
						})
					})]
				}, idx);
			})
		})]
	});
}
//#endregion
export { FaqPage as component };

import { c as SplitTextReveal } from "./motion-CSNJjo3r.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/dmca.tsx?tsr-split=component
function DmcaPage() {
	return /* @__PURE__ */ jsxs("article", {
		className: "max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]",
					children: "Copyright"
				}),
				/* @__PURE__ */ jsx(SplitTextReveal, {
					text: "DMCA Copyright Policy",
					className: "font-display text-5xl lg:text-7xl font-bold tracking-tight"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-muted-foreground leading-relaxed",
					children: "How to file copyright notices with genCART. We respect intellectual property and respond promptly to legal claims."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 font-sans leading-relaxed text-foreground/80",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold text-foreground",
						children: "Submitting a DMCA Notice"
					}),
					/* @__PURE__ */ jsx("p", { children: "If you believe your copyrighted material is displayed on genCART in a way that constitutes copyright infringement, you may submit a formal notification under the Digital Millennium Copyright Act." }),
					/* @__PURE__ */ jsx("p", { children: "Your notice must contain:" }),
					/* @__PURE__ */ jsxs("ul", {
						className: "list-disc list-inside pl-4 space-y-2 mt-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("li", { children: "An electronic or physical signature of the person authorized to act on behalf of the copyright owner." }),
							/* @__PURE__ */ jsx("li", { children: "A description of the copyrighted work that you claim has been infringed." }),
							/* @__PURE__ */ jsx("li", { children: "The precise URL on genCART containing the material you claim is infringing." }),
							/* @__PURE__ */ jsx("li", { children: "Your contact details: email address, telephone number, and physical mailing address." }),
							/* @__PURE__ */ jsx("li", { children: "A statement that you have a good faith belief that the use is not authorized by the copyright owner." })
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "Contact details"
				}), /* @__PURE__ */ jsxs("p", { children: ["Please send all copyright notices to our legal team via: ", /* @__PURE__ */ jsx("span", {
					className: "font-mono font-semibold text-foreground",
					children: "legal@genCART.design"
				})] })]
			})]
		})]
	});
}
//#endregion
export { DmcaPage as component };

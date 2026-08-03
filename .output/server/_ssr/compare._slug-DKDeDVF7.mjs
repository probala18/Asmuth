import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProduct } from "./products-DK41-WSW.mjs";
import { n as getComparison } from "./comparisons-CETU7BC4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare._slug-DKDeDVF7.js
var $$splitComponentImporter = () => import("./compare._slug-77Pq2f2T.mjs");
var Route = createFileRoute("/compare/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const curated = getComparison(params.slug);
		if (curated) return { meta: [{ title: `${curated.title} — Comparison · genCART` }, {
			name: "description",
			content: curated.excerpt
		}] };
		const parts = params.slug.split("-vs-");
		if (parts.length === 2) {
			const prodA = getProduct(parts[0]);
			const prodB = getProduct(parts[1]);
			if (prodA && prodB) return { meta: [{ title: `${prodA.name} vs ${prodB.name} — Specs Match · genCART` }, {
				name: "description",
				content: `Compare ${prodA.name} and ${prodB.name} specs, prices, and features side-by-side.`
			}] };
		}
		return { meta: [{ title: "Product Comparison — genCART" }] };
	},
	loader: ({ params }) => {
		let comparison = getComparison(params.slug);
		let productA;
		let productB;
		if (comparison) {
			productA = getProduct(comparison.products[0]);
			productB = getProduct(comparison.products[1]);
		} else {
			const parts = params.slug.split("-vs-");
			if (parts.length === 2) {
				productA = getProduct(parts[0]);
				productB = getProduct(parts[1]);
				if (productA && productB) {
					const dynamicSpecs = [];
					Array.from(/* @__PURE__ */ new Set([...productA.specs.map((s) => s.label), ...productB.specs.map((s) => s.label)])).forEach((label) => {
						const valA = productA.specs.find((s) => s.label === label)?.value || "N/A";
						const valB = productB.specs.find((s) => s.label === label)?.value || "N/A";
						let winnerSlug = null;
						if (label.toLowerCase().includes("price")) winnerSlug = productA.price < productB.price ? productA.slug : productB.slug;
						else if (label.toLowerCase().includes("battery")) winnerSlug = valA.includes("h") && valB.includes("h") ? parseFloat(valA) > parseFloat(valB) ? productA.slug : productB.slug : null;
						dynamicSpecs.push({
							label,
							values: [{
								productSlug: productA.slug,
								value: valA,
								isWinner: winnerSlug === productA.slug
							}, {
								productSlug: productB.slug,
								value: valB,
								isWinner: winnerSlug === productB.slug
							}]
						});
					});
					const winnerSlug = productA.rating >= productB.rating ? productA.slug : productB.slug;
					comparison = {
						slug: params.slug,
						title: `${productA.name} vs. ${productB.name}`,
						excerpt: `Side-by-side dynamic specs analysis of ${productA.name} and ${productB.name}.`,
						category: productA.category === productB.category ? productA.category : "Cross-Category",
						products: [productA.slug, productB.slug],
						image: productA.image,
						publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
						specs: dynamicSpecs,
						verdict: `Based on customer satisfaction metrics and expert evaluation, the ${productA.slug === winnerSlug ? productA.name : productB.name} is currently our recommended choice for overall performance and value.`,
						winner: winnerSlug
					};
				}
			}
		}
		if (!comparison || !productA || !productB) throw notFound();
		return {
			comparison,
			productA,
			productB
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

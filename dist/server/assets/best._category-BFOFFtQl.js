import { r as getProductsByCategory } from "./products-DK41-WSW.js";
import { t as categories } from "./categories-BkPZMTJV.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/best.$category.tsx
var $$splitComponentImporter = () => import("./best._category-D5rb7ASJ.js");
var Route = createFileRoute("/best/$category")({
	parseParams: (params) => ({ category: params.category }),
	head: ({ params }) => {
		const cat = categories.find((c) => c.slug === params.category);
		return { meta: [{ title: cat ? `Best ${cat.name} of 2026 — genCART` : "Best Products — genCART" }, {
			name: "description",
			content: cat ? `Laboratory benchmarks and rankings of the best ${cat.name.toLowerCase()} products.` : "Best products."
		}] };
	},
	loader: ({ params }) => {
		const cat = categories.find((c) => c.slug === params.category);
		if (!cat) throw notFound();
		return {
			category: cat,
			catProducts: getProductsByCategory(cat.slug).sort((a, b) => b.rating - a.rating)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getProductsByCategory } from "./products-DK41-WSW.mjs";
import { t as categories } from "./categories-BkPZMTJV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/best._category-BFOFFtQl.js
var $$splitComponentImporter = () => import("./best._category-D5rb7ASJ.mjs");
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

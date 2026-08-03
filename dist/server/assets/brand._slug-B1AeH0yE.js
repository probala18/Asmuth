import { i as products } from "./products-DK41-WSW.js";
import { n as getBrand } from "./brands-BwVAGUhx.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/brand.$slug.tsx
var $$splitComponentImporter = () => import("./brand._slug-CraW2SbD.js");
var Route = createFileRoute("/brand/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const brand = getBrand(params.slug);
		return { meta: [{ title: brand ? `${brand.name} — Brand Profile · genCART` : "Brand Detail · genCART" }, {
			name: "description",
			content: brand ? brand.description : "View products by this brand."
		}] };
	},
	loader: ({ params }) => {
		const brand = getBrand(params.slug);
		if (!brand) throw notFound();
		return {
			brand,
			brandProducts: products.filter((p) => p.brand.toLowerCase() === brand.name.toLowerCase())
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as products } from "./products-DK41-WSW.mjs";
import { n as getBrand } from "./brands-BwVAGUhx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand._slug-B1AeH0yE.js
var $$splitComponentImporter = () => import("./brand._slug-CraW2SbD.mjs");
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

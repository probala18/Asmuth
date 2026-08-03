import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProduct } from "./products-DK41-WSW.mjs";
import { t as getGuide } from "./guides-DB9TZ9M8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides._slug-M3SiHEhZ.js
var $$splitComponentImporter = () => import("./guides._slug-DovGwjj7.mjs");
var Route = createFileRoute("/guides/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const guide = getGuide(params.slug);
		return { meta: [
			{ title: guide ? `${guide.title} · genCART` : "Buying Guide · genCART" },
			{
				name: "description",
				content: guide ? guide.excerpt : "Expert buying guide and setups."
			},
			{
				property: "og:title",
				content: guide ? `${guide.title} · genCART` : "Buying Guide · genCART"
			},
			{
				property: "og:description",
				content: guide ? guide.excerpt : "Expert buying guide."
			},
			{
				property: "og:image",
				content: guide?.image
			}
		] };
	},
	loader: ({ params }) => {
		const guide = getGuide(params.slug);
		if (!guide) throw notFound();
		return {
			guide,
			recommendedProducts: (guide.relatedProducts || []).map((slug) => getProduct(slug)).filter(Boolean)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

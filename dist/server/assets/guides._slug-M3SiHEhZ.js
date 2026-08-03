import { n as getProduct } from "./products-DK41-WSW.js";
import { t as getGuide } from "./guides-DB9TZ9M8.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/guides.$slug.tsx
var $$splitComponentImporter = () => import("./guides._slug-DovGwjj7.js");
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

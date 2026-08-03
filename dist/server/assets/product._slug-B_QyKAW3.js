import { n as getProduct } from "./products-DK41-WSW.js";
import { t as getReview } from "./reviews-CbTxooB7.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/product.$slug.tsx
var $$splitComponentImporter = () => import("./product._slug-DDpDs-5Q.js");
var Route = createFileRoute("/product/$slug")({
	parseParams: (params) => ({ slug: params.slug }),
	head: ({ params }) => {
		const product = getProduct(params.slug);
		return { meta: [{ title: product ? `${product.name} — genCART` : "Product — genCART" }, {
			name: "description",
			content: product ? product.shortDescription : "Browse product details."
		}] };
	},
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return {
			product,
			review: getReview(product.slug)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

//#region node_modules/.nitro/vite/services/ssr/assets/categories-BkPZMTJV.js
var categories = [
	{
		slug: "computing",
		name: "Computing",
		description: "Laptops, tablets, monitors, and workspace tools selected for performance and productivity.",
		icon: "Laptop",
		productCount: 2,
		image: "/assets/product-laptop.jpg",
		featured: true
	},
	{
		slug: "audio",
		name: "Audio",
		description: "From reference headphones to everyday earbuds, discover sound worth listening to.",
		icon: "Headphones",
		productCount: 2,
		image: "/assets/product-headphones.jpg",
		featured: true
	},
	{
		slug: "mobile",
		name: "Mobile",
		description: "Compare flagship smartphones and everyday devices to find the right fit for you.",
		icon: "Smartphone",
		productCount: 1,
		image: "/assets/product-phone.jpg",
		featured: true
	},
	{
		slug: "wearables",
		name: "Wearables",
		description: "Smartwatches and connected devices that help you stay informed, active, and on track.",
		icon: "Watch",
		productCount: 1,
		image: "/assets/product-watch.jpg",
		featured: true
	},
	{
		slug: "cameras",
		name: "Cameras",
		description: "Explore cameras, lenses, and creative gear built to capture your best work.",
		icon: "Camera",
		productCount: 1,
		image: "/assets/product-camera.png",
		featured: true
	},
	{
		slug: "gaming",
		name: "Gaming",
		description: "Gaming laptops, monitors, keyboards, mice, and accessories built for serious play.",
		icon: "Gamepad",
		productCount: 1,
		image: "/assets/product-gaming.png",
		featured: false
	}
];
function getCategory(slug) {
	return categories.find((c) => c.slug === slug);
}
//#endregion
export { getCategory as n, categories as t };

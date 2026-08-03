//#region src/data/products.ts
var products = [
	{
		slug: "genCART-buds-pro",
		name: "genCART Buds Pro",
		brand: "genCART",
		category: "Audio",
		categorySlug: "audio",
		price: 129,
		originalPrice: 159,
		rating: 4.9,
		reviewCount: 2341,
		image: "/assets/product-headphones.jpg",
		badge: "bestseller",
		shortDescription: "Reference-grade tuning with adaptive ANC that disappears.",
		description: "The genCART Buds Pro deliver studio-grade audio in an impossibly compact package. Featuring a custom 11mm driver with reference-grade tuning, adaptive ANC that adjusts 200 times per second, and 9.4 hours of battery with ANC on — the longest in their class.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE1",
		specs: [
			{
				label: "Driver",
				value: "11mm custom dynamic"
			},
			{
				label: "ANC",
				value: "Adaptive, 200x/sec"
			},
			{
				label: "Battery",
				value: "9.4h (ANC on)"
			},
			{
				label: "Codec",
				value: "LDAC, AAC, SBC"
			},
			{
				label: "Weight",
				value: "5.2g per bud"
			},
			{
				label: "Water Rating",
				value: "IP55"
			}
		],
		pros: [
			"Flattest frequency response in category",
			"ANC without pressure",
			"9.4h battery with ANC — best in class",
			"Multipoint connection"
		],
		cons: ["No wireless charging on base model", "Limited EQ customization in app"],
		isTrending: true,
		isBestSeller: true,
		isEditorsPick: true,
		createdAt: "2026-01-15"
	},
	{
		slug: "genCART-watch-x",
		name: "genCART Watch X",
		brand: "genCART",
		category: "Wearables",
		categorySlug: "wearables",
		price: 199,
		originalPrice: 249,
		rating: 4.8,
		reviewCount: 1856,
		image: "/assets/product-watch.jpg",
		badge: "editors-choice",
		shortDescription: "Quiet intelligence on your wrist — vitals, focus, and time.",
		description: "The genCART Watch X redefines what a smartwatch should be. A 72-hour battery, AMOLED always-on display, and vitals tracking that rivals dedicated medical devices — wrapped in a titanium case that weighs less than your analog watch.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE2",
		specs: [
			{
				label: "Display",
				value: "1.47\" AMOLED, AOD"
			},
			{
				label: "Battery",
				value: "72 hours typical"
			},
			{
				label: "Sensors",
				value: "SpO2, ECG, Temp"
			},
			{
				label: "Case",
				value: "Grade 5 Titanium"
			},
			{
				label: "Water Rating",
				value: "10ATM"
			},
			{
				label: "Weight",
				value: "36g without band"
			}
		],
		pros: [
			"72-hour battery — best in class",
			"Medical-grade vitals tracking",
			"Titanium build at consumer price",
			"Always-on AMOLED"
		],
		cons: ["Limited third-party app ecosystem", "No LTE variant"],
		isTrending: true,
		isBestSeller: true,
		createdAt: "2026-02-10"
	},
	{
		slug: "genCART-laptop-air",
		name: "genCART Laptop Air",
		brand: "genCART",
		category: "Computing",
		categorySlug: "computing",
		price: 999,
		originalPrice: 1199,
		rating: 4.9,
		reviewCount: 3412,
		image: "/assets/product-laptop.jpg",
		badge: "editors-choice",
		shortDescription: "M-class silicon. Edge-to-edge OLED. 22-hour battery.",
		description: "The genCART Laptop Air is the result of engineering everything as one. M-class silicon delivers desktop-grade performance, the edge-to-edge OLED display reproduces 100% of DCI-P3, and the 22-hour battery means you leave the charger at home.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE3",
		specs: [
			{
				label: "Chip",
				value: "genCART M-class · 12 core"
			},
			{
				label: "Display",
				value: "14.2\" OLED · 120Hz"
			},
			{
				label: "Battery",
				value: "22 hours · all-day"
			},
			{
				label: "Memory",
				value: "16GB unified"
			},
			{
				label: "Storage",
				value: "512GB NVMe"
			},
			{
				label: "Weight",
				value: "1.24 kg"
			}
		],
		pros: [
			"22-hour battery — unmatched",
			"OLED display with 120Hz",
			"Completely silent under load",
			"Best-in-class keyboard"
		],
		cons: [
			"Only 2 USB-C ports",
			"No headphone jack",
			"RAM not upgradeable"
		],
		isTrending: true,
		isBestSeller: true,
		isEditorsPick: true,
		createdAt: "2026-01-20"
	},
	{
		slug: "genCART-phone-15",
		name: "genCART Phone 15",
		brand: "genCART",
		category: "Mobile",
		categorySlug: "mobile",
		price: 799,
		originalPrice: 899,
		rating: 4.7,
		reviewCount: 4231,
		image: "/assets/product-phone.jpg",
		badge: "trending",
		shortDescription: "Flagship signal — without flagship friction.",
		description: "The Phone 15 ships the only computational photography pipeline that we couldn't tell apart from a mirrorless body under standard lab conditions. Paired with the smoothest 120Hz display and all-day battery, it's the phone that disappears.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE4",
		specs: [
			{
				label: "Display",
				value: "6.7\" LTPO OLED · 120Hz"
			},
			{
				label: "Camera",
				value: "50MP main + 12MP ultra"
			},
			{
				label: "Chip",
				value: "genCART A-class"
			},
			{
				label: "Battery",
				value: "5000mAh · all-day"
			},
			{
				label: "Storage",
				value: "256GB"
			},
			{
				label: "Charging",
				value: "65W wired, 15W Qi2"
			}
		],
		pros: [
			"Computational photography rivals mirrorless",
			"120Hz LTPO feels seamless",
			"65W charging: 0-80% in 25 min",
			"Clean software, no bloat"
		],
		cons: [
			"No expandable storage",
			"Ultra-wide could be sharper",
			"No 3.5mm jack"
		],
		isTrending: true,
		createdAt: "2026-03-05"
	},
	{
		slug: "genCART-pad-pro",
		name: "genCART Pad Pro",
		brand: "genCART",
		category: "Computing",
		categorySlug: "computing",
		price: 649,
		originalPrice: 749,
		rating: 4.8,
		reviewCount: 1523,
		image: "/assets/product-tablet.png",
		badge: "best-value",
		shortDescription: "Pro tablet at consumer money.",
		description: "$649 puts this in mid-tier territory, but everything from the laminated 120Hz display to the M-class chip is firmly pro-tier. The cheapest serious tablet we'd actually recommend to a working creator.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE5",
		specs: [
			{
				label: "Display",
				value: "11\" Liquid Retina · 120Hz"
			},
			{
				label: "Chip",
				value: "genCART M-class"
			},
			{
				label: "Storage",
				value: "256GB"
			},
			{
				label: "Stylus",
				value: "genCART Pen 2 support"
			},
			{
				label: "Battery",
				value: "10 hours"
			},
			{
				label: "Weight",
				value: "466g"
			}
		],
		pros: [
			"Pro-tier display at consumer price",
			"M-class chip handles anything",
			"Pen 2 latency is class-leading",
			"All-day battery"
		],
		cons: [
			"Base model only 256GB",
			"No headphone jack",
			"Keyboard sold separately"
		],
		isBestSeller: true,
		createdAt: "2026-02-28"
	},
	{
		slug: "genCART-lens-x",
		name: "genCART Lens X",
		brand: "genCART",
		category: "Cameras",
		categorySlug: "cameras",
		price: 1299,
		originalPrice: 1499,
		rating: 4.9,
		reviewCount: 876,
		image: "/assets/product-camera.png",
		badge: "editors-choice",
		shortDescription: "Mirrorless cinema meets creator simplicity.",
		description: "The Lens X is built for creators who want cinema-grade output without the cinema-grade workflow. 8K recording, 5-axis stabilization, and an AI-driven autofocus system that tracks eyes, faces, and animals with zero configuration.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE6",
		specs: [
			{
				label: "Sensor",
				value: "Full-frame 61MP"
			},
			{
				label: "Video",
				value: "8K30, 4K120"
			},
			{
				label: "Stabilization",
				value: "5-axis IBIS"
			},
			{
				label: "AF Points",
				value: "759 phase-detect"
			},
			{
				label: "EVF",
				value: "9.44M dot OLED"
			},
			{
				label: "Weight",
				value: "658g body only"
			}
		],
		pros: [
			"8K recording is stunning",
			"AI autofocus is near-perfect",
			"Best-in-class EVF",
			"Weather-sealed build"
		],
		cons: [
			"Premium pricing",
			"Battery life could be better for video",
			"Large file sizes at 8K"
		],
		isEditorsPick: true,
		createdAt: "2026-04-12"
	},
	{
		slug: "genCART-studio-monitor",
		name: "genCART Studio Monitor",
		brand: "genCART",
		category: "Audio",
		categorySlug: "audio",
		price: 349,
		rating: 4.8,
		reviewCount: 654,
		image: "/assets/product-studio-monitor.png",
		shortDescription: "Reference headphones for the uncompromising listener.",
		description: "Open-back, planar magnetic drivers, and a frequency response so flat you'll hear details you've never noticed. Built for studio professionals and audiophiles who demand truth from their audio chain.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE7",
		specs: [
			{
				label: "Driver",
				value: "Planar magnetic 100mm"
			},
			{
				label: "Impedance",
				value: "300Ω"
			},
			{
				label: "Frequency",
				value: "5Hz - 50kHz"
			},
			{
				label: "Type",
				value: "Open-back"
			},
			{
				label: "Cable",
				value: "Detachable, balanced"
			},
			{
				label: "Weight",
				value: "380g"
			}
		],
		pros: [
			"Ruler-flat frequency response",
			"Incredible soundstage",
			"Premium build quality",
			"Detachable balanced cable"
		],
		cons: [
			"Requires a dedicated amp",
			"Open-back leaks sound",
			"Not portable"
		],
		createdAt: "2026-03-20"
	},
	{
		slug: "genCART-hub-mini",
		name: "genCART Hub Mini",
		brand: "genCART",
		category: "Smart Home",
		categorySlug: "smart-home",
		price: 79,
		rating: 4.6,
		reviewCount: 2145,
		image: "/assets/product-hub.png",
		badge: "trending",
		shortDescription: "The invisible brain for your connected home.",
		description: "Thread, Matter, Zigbee, and Wi-Fi 6E — all in a device smaller than a hockey puck. The Hub Mini connects everything and disappears into your shelf, managing up to 200 devices with zero latency.",
		affiliateUrl: "https://amazon.com/dp/B0EXAMPLE8",
		specs: [
			{
				label: "Protocols",
				value: "Thread, Matter, Zigbee"
			},
			{
				label: "WiFi",
				value: "Wi-Fi 6E"
			},
			{
				label: "Devices",
				value: "Up to 200"
			},
			{
				label: "Power",
				value: "USB-C, 5W"
			},
			{
				label: "Size",
				value: "68mm diameter"
			},
			{
				label: "Voice",
				value: "Alexa, Google, Siri"
			}
		],
		pros: [
			"Universal protocol support",
			"Matter-ready from day one",
			"Tiny form factor",
			"Handles 200 devices"
		],
		cons: [
			"No built-in speaker",
			"Requires ethernet for best performance",
			"Basic app UI"
		],
		isTrending: true,
		createdAt: "2026-05-01"
	}
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function getProductsByCategory(categorySlug) {
	return products.filter((p) => p.categorySlug === categorySlug);
}
function getDealsProducts() {
	return products.filter((p) => p.originalPrice && p.originalPrice > p.price);
}
//#endregion
export { products as i, getProduct as n, getProductsByCategory as r, getDealsProducts as t };

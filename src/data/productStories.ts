/* ─── genCART — Product Storytelling Data ───────────────── */

export interface StoryChapter {
  title: string;
  description: string;
}

export interface ProductStory {
  id: string;
  category: string;
  product: string;
  slug: string;
  image: string;
  accent: string;
  chapters: StoryChapter[];
}

export const productStories: ProductStory[] = [
  {
    id: "01",
    category: "COMPUTING",
    product: "genCART Laptop Air",
    slug: "genCART-laptop-air",
    image: "/assets/product-laptop.jpg",
    accent: "var(--emerald-accent)",
    chapters: [
      {
        title: "Built for ambitious workflows.",
        description:
          "M-class performance designed for developers, creators, and professionals who refuse to compromise.",
      },
      {
        title: "Power that stays with you.",
        description:
          "22 hours of battery life — designed to keep up with demanding work without ever slowing you down.",
      },
      {
        title: "A display built for detail.",
        description:
          "Edge-to-edge OLED at 120Hz. 100% DCI-P3 color — designed to make every detail look its absolute best.",
      },
    ],
  },
  {
    id: "02",
    category: "AUDIO",
    product: "genCART Buds Pro",
    slug: "genCART-buds-pro",
    image: "/assets/product-headphones.jpg",
    accent: "var(--cyan-accent)",
    chapters: [
      {
        title: "Sound that disappears around you.",
        description:
          "Reference-grade tuning with adaptive noise cancellation that adjusts 200 times per second.",
      },
      {
        title: "Designed for everyday listening.",
        description:
          "5.2 grams per bud. 9.4 hours with ANC on. Comfortable, compact, and ready for wherever your day takes you.",
      },
      {
        title: "Everything you need. Nothing you don't.",
        description:
          "LDAC codec support, multipoint connection, and IP55 water resistance — built around simplicity and clarity.",
      },
    ],
  },
  {
    id: "03",
    category: "WEARABLES",
    product: "genCART Watch X",
    slug: "genCART-watch-x",
    image: "/assets/product-watch.jpg",
    accent: "var(--emerald-accent)",
    chapters: [
      {
        title: "Quiet intelligence on your wrist.",
        description:
          "Medical-grade vitals tracking — SpO2, ECG, and body temperature — wrapped in Grade 5 titanium at 36 grams.",
      },
      {
        title: "Built around your day.",
        description:
          "72-hour battery life and always-on AMOLED. Thoughtful features that help you stay informed without getting in the way.",
      },
      {
        title: "Technology that feels effortless.",
        description:
          "10ATM water resistance, a refined wearable experience designed to become part of your routine — not disrupt it.",
      },
    ],
  },
];

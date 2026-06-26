/* ─── ASMUTH — Comparison Data ───────────────────────────────── */
import type { Comparison } from "@/types";

export const comparisons: Comparison[] = [
  {
    slug: "aether-laptop-air-vs-dell-xps-16",
    title: "Aether Laptop Air vs. Dell XPS 16",
    excerpt: "Which premium laptop wins the developer crown? We compare performance, battery, display, and keyboard.",
    category: "Computing",
    products: ["aether-laptop-air", "dell-xps-16"],
    image: "/assets/product-laptop.jpg",
    publishedAt: "2026-06-20",
    specs: [
      {
        label: "Processor",
        values: [
          { productSlug: "aether-laptop-air", value: "M-class · 12-core silicon", isWinner: true },
          { productSlug: "dell-xps-16", value: "Intel Core Ultra 9", isWinner: false },
        ],
      },
      {
        label: "Display",
        values: [
          { productSlug: "aether-laptop-air", value: "14.2\" OLED 120Hz", isWinner: true },
          { productSlug: "dell-xps-16", value: "16.3\" OLED 90Hz", isWinner: false },
        ],
      },
      {
        label: "Battery Life",
        values: [
          { productSlug: "aether-laptop-air", value: "22 hours video run", isWinner: true },
          { productSlug: "dell-xps-16", value: "11.5 hours video run", isWinner: false },
        ],
      },
      {
        label: "Keyboard",
        values: [
          { productSlug: "aether-laptop-air", value: "1.3mm travel clicky", isWinner: true },
          { productSlug: "dell-xps-16", value: "Seamless zero-lattice", isWinner: false },
        ],
      },
      {
        label: "Starting Price",
        values: [
          { productSlug: "aether-laptop-air", value: "$999", isWinner: true },
          { productSlug: "dell-xps-16", value: "$1,899", isWinner: false },
        ],
      },
      {
        label: "Weight",
        values: [
          { productSlug: "aether-laptop-air", value: "1.24 kg", isWinner: true },
          { productSlug: "dell-xps-16", value: "2.13 kg", isWinner: false },
        ],
      },
    ],
    verdict: "The Aether Laptop Air is significantly lighter, lasts twice as long on a charge, has a superior 120Hz OLED screen, and costs almost half the price. It is the clear winner for mobile professionals.",
    winner: "aether-laptop-air",
  },
  {
    slug: "aether-buds-pro-vs-competitors",
    title: "Aether Buds Pro vs. Sony WF-1000XM5",
    excerpt: "A side-by-side comparison of active noise cancellation, audio quality, and battery metrics.",
    category: "Audio",
    products: ["aether-buds-pro", "sony-wf-1000xm5"],
    image: "/assets/product-headphones.jpg",
    publishedAt: "2026-06-25",
    specs: [
      {
        label: "Frequency Response",
        values: [
          { productSlug: "aether-buds-pro", value: "Flat reference, 5Hz - 40kHz", isWinner: true },
          { productSlug: "sony-wf-1000xm5", value: "Warm V-shaped curve", isWinner: false },
        ],
      },
      {
        label: "ANC Performance",
        values: [
          { productSlug: "aether-buds-pro", value: "Adaptive (No pressure sensation)", isWinner: true },
          { productSlug: "sony-wf-1000xm5", value: "Strong (High ear canal pressure)", isWinner: false },
        ],
      },
      {
        label: "Battery (ANC On)",
        values: [
          { productSlug: "aether-buds-pro", value: "9.4 hours", isWinner: true },
          { productSlug: "sony-wf-1000xm5", value: "8.0 hours", isWinner: false },
        ],
      },
      {
        label: "Price",
        values: [
          { productSlug: "aether-buds-pro", value: "$129", isWinner: true },
          { productSlug: "sony-wf-1000xm5", value: "$299", isWinner: false },
        ],
      },
    ],
    verdict: "At less than half the price of the Sony WF-1000XM5, the Aether Buds Pro deliver flatter sound, longer battery life, and more comfortable active noise cancellation without ear pressure.",
    winner: "aether-buds-pro",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

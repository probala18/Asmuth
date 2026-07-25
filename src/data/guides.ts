/* ─── genCART — Guide Data ────────────────────────────────────── */
import type { Guide } from "@/types";

export const guides: Guide[] = [
  {
    slug: "minimalist-developer-workspace",
    title: "How to Build a Minimalist Developer Workspace",
    excerpt: "Ditch the clutter and maximize focus. We break down the essentials of a high-performance, distraction-free environment.",
    category: "Computing",
    categorySlug: "computing",
    author: "Balasundar M",
    publishedAt: "2026-06-18",
    readTime: "8 min read",
    image: "/assets/product-laptop.jpg",
    sections: [
      {
        title: "The Core Philosophy: Silent Power",
        content: "A premium workspace starts with removing ambient friction. Choose computing hardware that operates silently under load, such as fanless or optimized silicon laptops, preventing thermal roar from breaking your flow state.",
      },
      {
        title: "Display Ergonomics and Resolution",
        content: "Focus on text clarity above all. A single high-density 4K OLED monitor or a pixel-perfect laptop screen will reduce eye strain during long programming sessions. Keep the screen at eye level to prevent neck strain.",
      },
      {
        title: "Audio Isolation as a Workspace Boundary",
        content: "Open offices or noisy homes require active acoustic barriers. A reference-grade pair of active noise-canceling earbuds will isolate you from distractions, while planar magnetic headphones provide critical spatial audio mapping for audio work.",
      },
      {
        title: "Intelligent Timepieces & Pacing",
        content: "Instead of staring at distracting menu bar clocks, use a smart wearable to track focus intervals, monitor heart rate variance, and schedule movement breaks quietly on your wrist.",
      },
    ],
    relatedProducts: ["genCART-laptop-air", "genCART-buds-pro", "genCART-watch-x"],
  },
  {
    slug: "high-fidelity-audio-guide",
    title: "The Producer's Guide to High-Fidelity Audio on the Go",
    excerpt: "Everything you need to mix, monitor, and master audio wherever inspiration strikes, without sacrificing accuracy.",
    category: "Audio",
    categorySlug: "audio",
    author: "Marcus Vance",
    publishedAt: "2026-06-22",
    readTime: "6 min read",
    image: "/assets/product-studio-monitor.png",
    sections: [
      {
        title: "Understanding Reference Responses",
        content: "Most consumer headphones boost bass and scoop mids to sound punchy. For professional production, you need a flat, uncolored frequency response where a decibel increase in the low end translates to actual acoustic power, not DSP tricks.",
      },
      {
        title: "Planar Magnetic vs. Dynamic Drivers",
        content: "Planar magnetic drivers use a flat diaphragm suspended in a magnetic field, resulting in incredibly low distortion and lightning-fast transient response. They are superior for soundstage definition but usually require an external amplifier.",
      },
      {
        title: "Mobile Audio Checkpoints",
        content: "When working outside the studio, carry dual systems: reference open-back headphones for high-fidelity mixing, and adaptive ANC wireless earbuds to verify how your mixes translate to real-world consumer devices.",
      },
    ],
    relatedProducts: ["genCART-studio-monitor", "genCART-buds-pro"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/* ─── genCART — FAQ Data ──────────────────────────────────────── */
import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    question: "How do you test and review products?",
    answer: "Every product reviewed on genCART undergoes at least two weeks of daily usage in real-world scenarios. We do not accept sponsored reviews or payments to influence our ratings. We test items under standard lab conditions and practical daily environments.",
    category: "General",
  },
  {
    question: "How does the affiliate link model work?",
    answer: "When you click a link on our platform to purchase a product from Amazon or other retailers, we may earn a small referral commission at no additional cost to you. This helps fund our independent testing lab and team of writers.",
    category: "Affiliate",
  },
  {
    question: "Do you get free review units from brands?",
    answer: "Occasionally, brands will send us review units. However, we return these units after testing or purchase them ourselves to maintain absolute editorial integrity. We never agree to positive coverage in exchange for hardware.",
    category: "Editorial",
  },
];

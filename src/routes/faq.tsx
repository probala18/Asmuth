import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, ChevronDown } from "lucide-react";
import { SplitTextReveal } from "@/components/site/motion";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — genCART" },
      { name: "description", content: "Answers to common questions about genCART, reviews, affiliate links, and editorial process." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4 text-center">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Help Desk</p>
        <SplitTextReveal text="Common FAQs" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Need a quick answer? We explain how we operate, how we maintain independence, and how we fund our research.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div 
              key={idx}
              className="surface-card rounded-2xl border border-[var(--hairline)] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--surface-2)]/40 transition-colors cursor-pointer"
              >
                <span className="font-display font-semibold text-lg flex items-center gap-3">
                  <HelpCircle className="size-5 text-[var(--emerald-accent)] shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown className={`size-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[300px] border-t border-[var(--hairline)]" : "max-h-0"
                }`}
              >
                <div className="p-6 text-sm text-muted-foreground leading-relaxed font-sans whitespace-pre-line bg-[var(--surface)]/30">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

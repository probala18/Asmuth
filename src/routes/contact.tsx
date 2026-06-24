import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AETHER" },
      { name: "description", content: "Get in touch with AETHER. Concierge service, editorial inquiries, partnerships." },
      { property: "og:title", content: "Contact — AETHER" },
      { property: "og:description", content: "Get in touch with the AETHER team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Open channel</p>
          <SplitTextReveal text="Talk to us" className="font-display text-6xl lg:text-8xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Concierge, editorial, partnerships. We <HandUnderline>actually respond.</HandUnderline>
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-4">
            {[
              { Icon: Mail, label: "Email", value: "hello@aether.co" },
              { Icon: MessageCircle, label: "Concierge", value: "+1 (800) AETHER-9" },
              { Icon: MapPin, label: "Studio", value: "San Francisco · New York · Berlin" },
            ].map((it) => (
              <div key={it.label} className="surface-card-2 p-6 flex items-center gap-4">
                <div className="size-12 grid place-items-center rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/30">
                  <it.Icon className="size-5 text-[var(--emerald-accent)]" />
                </div>
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.label}</p>
                  <p className="font-display text-lg">{it.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="surface-card-2 p-8 lg:p-10 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" />
              <Field label="Last name" />
            </div>
            <Field label="Email" type="email" />
            <Field label="Subject" />
            <div>
              <label className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2">Message</label>
              <textarea rows={5} className="w-full rounded-xl bg-[var(--surface)] border border-[var(--hairline)] px-4 py-3 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition resize-none" />
            </div>
            <button className="btn-accent w-full rounded-full py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2">
              <Send className="size-4" /> Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2">{label}</label>
      <input type={type} className="w-full h-12 rounded-xl bg-[var(--surface)] border border-[var(--hairline)] px-4 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition" />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Timer, Flame, Tag } from "lucide-react";
import { SplitTextReveal, TiltCard, HandUnderline } from "@/components/site/motion";
import laptopImg from "@/assets/product-laptop.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";
import watchImg from "@/assets/product-watch.jpg";
import phoneImg from "@/assets/product-phone.jpg";

const deals = [
  { slug: "genCART-laptop-air", name: "genCART Laptop Air", img: laptopImg, was: 1199, now: 999, off: 17, hours: 4 },
  { slug: "genCART-buds-pro", name: "genCART Buds Pro", img: headphonesImg, was: 159, now: 129, off: 19, hours: 8 },
  { slug: "genCART-watch-x", name: "genCART Watch X", img: watchImg, was: 249, now: 199, off: 20, hours: 12 },
  { slug: "genCART-phone-15", name: "genCART Phone 15", img: phoneImg, was: 899, now: 799, off: 11, hours: 6 },
  { slug: "genCART-pad-pro", name: "genCART Pad Pro", img: "/assets/product-tablet.png", was: 749, now: 649, off: 13, hours: 20 },
  { slug: "genCART-lens-x", name: "genCART Lens X", img: "/assets/product-camera.png", was: 1499, now: 1299, off: 13, hours: 16 },
];

function Countdown({ hours }: { hours: number }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + hours);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const h = Math.floor(difference / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  return <span className="font-mono-tech tabular-nums">{timeLeft}</span>;
}

export default function DealsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="size-4 text-[var(--emerald-accent)]" />
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Limited Drops</span>
          </div>
          <SplitTextReveal text="Editor-vetted deals" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl">
            We don't list every discount — only the ones <HandUnderline>worth your inbox.</HandUnderline>
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((d) => (
            <TiltCard key={d.name} className="surface-card overflow-hidden group" max={5}>
              <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-2)]">
                <img src={typeof d.img === 'string' ? d.img : d.img.src} alt={d.name} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold font-mono-tech text-background" style={{ background: "var(--gradient-accent)" }}>
                  -{d.off}%
                </span>
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[10px] font-mono-tech text-[var(--cyan-accent)]">
                  <Timer className="size-3 text-[var(--emerald-accent)]" /> 
                  <Countdown hours={d.hours} />
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold text-accent-gradient">${d.now}</span>
                  <span className="text-sm text-muted-foreground line-through">${d.was}</span>
                </div>
                <Link 
                  href={`/product/${d.slug}`} 
                  className="btn-ghost-glow w-full rounded-full py-2 text-xs font-semibold inline-flex items-center justify-center gap-2 mt-2"
                >
                  <Tag className="size-3" /> Grab deal
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}

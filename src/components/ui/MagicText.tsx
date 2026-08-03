"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export interface MagicTextProps {
  text: string;
  heading?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-1 mt-[8px] text-2xl font-semibold leading-[0.7] sm:text-3xl">
      <span className="absolute opacity-20 text-muted-foreground/40">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, heading }) => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const paragraphRef = React.useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [28, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const words = text.split(" ");
  const revealWindow = 0.9;

  return (
    <section className="px-6 py-4 sm:px-8 lg:px-10">
      <div ref={sectionRef} className="mx-auto flex min-h-[180vh] max-w-6xl items-center justify-center py-2">
        <motion.div
          style={{ y, opacity }}
          className="sticky top-1/2 w-full -translate-y-1/2 rounded-[2rem] border border-[var(--hairline)] bg-[var(--surface)]/70 px-6 py-10 shadow-[0_18px_70px_rgba(0,0,0,0.16)] backdrop-blur sm:px-10 sm:py-14"
        >
          {heading ? (
            <div className="mb-4 text-center">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">{heading}</p>
            </div>
          ) : null}

          <p ref={paragraphRef} className="flex flex-wrap leading-[0.78] text-muted-foreground/90">
            {words.map((word, i) => {
              const start = Math.max(0, i / Math.max(1, words.length - 1) - 0.08);
              const end = Math.min(1, start + revealWindow / Math.max(1, words.length - 1));

              return (
                <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

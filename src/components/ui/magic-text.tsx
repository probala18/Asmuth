"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, triggerRef }) => {
  const container = useRef<HTMLElement | null>(null);

  // If a triggerRef is provided (e.g., a tall wrapper), use it so
  // scroll progress maps across the whole section while the inner
  // MagicText remains sticky. Fallback to the local container.
  const { scrollYProgress } = useScroll({
    target: triggerRef ?? container,
    // Use viewport-relative offsets so the reveal maps reliably on small screens
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className="flex flex-wrap leading-[0.6] p-4">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default MagicText;

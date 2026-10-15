"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text?: string;
  words?: string[];
  className?: string;
  delay?: number;
}

export function TypingText({
  text = "",
  words,
  className,
  delay = 0
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const phrases = words?.length ? words : [text];
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: number | undefined;

    const type = () => {
      const current = phrases[phraseIndex] ?? "";
      setDisplayText(current.slice(0, charIndex));

      if (!deleting && charIndex < current.length) {
        charIndex += 1;
        timer = window.setTimeout(type, 92);
        return;
      }

      if (!deleting && charIndex === current.length) {
        deleting = true;
        timer = window.setTimeout(type, 1250);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timer = window.setTimeout(type, 42);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = window.setTimeout(type, 320);
    };

    const timeout = setTimeout(() => {
      type();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [text, words, delay]);

  return (
    <span className={className} aria-live="polite">
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-current"
      />
    </span>
  );
}

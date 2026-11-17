"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /**
   * Each direct child receives a staggered transition-delay.
   * Set to true to enable child staggering.
   */
  stagger?: boolean;
  /** Delay index (1–6) applied to this element itself */
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Children with `data-reveal` on them will individually animate when visible.
 */
export default function ScrollReveal({
  children,
  className,
  stagger = false,
  delay,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealAll = () => {
      el.classList.add("is-visible");
      el.querySelectorAll("[data-reveal]").forEach((t) => t.classList.add("is-visible"));
    };

    // Immediately reveal if already in or near viewport
    if (typeof window !== "undefined") {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 250) {
        revealAll();
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealAll();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      data-reveal-delay={delay}
      className={cn(className)}
    >
      {children}
    </div>
  );
}

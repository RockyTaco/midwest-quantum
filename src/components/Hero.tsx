import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WAITLIST_URL } from "@/lib/links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MascotBubble from "@/components/MascotBubble";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-64px)] flex-col justify-center overflow-hidden border-b border-border/60">
      {/* Vivid blue glow — top right */}
      <div
        className="pointer-events-none absolute -top-40 right-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-vivid/[0.09] blur-[100px]"
        aria-hidden="true"
      />
      {/* Slate fill — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-20 left-[-5%] -z-10 h-[320px] w-[480px] rounded-full bg-primary/[0.05] blur-[80px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 sm:px-8 py-2 sm:py-3 lg:py-3.5">
        <div className="hero-animate my-auto">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            {/* Left Column — Text content scaled 1.1x */}
            <div className="max-w-[580px] lg:max-w-[620px]">
              {/* 1 — Badge */}
              <div>
                <Badge
                  variant="accent"
                  className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                >
                  <span className="font-heading font-bold text-vivid mr-1.5">MidQWest</span>
                  · November 21–22, 2026 · Chicago, IL
                </Badge>
              </div>

              {/* 2 — Headline: 1.1x Larger, Bold & Commanding */}
              <h1 className="mt-3 font-heading text-[clamp(2.8rem,5.5vw,4.65rem)] font-bold leading-[1.04] tracking-[-0.025em]">
                <span className="block text-[13px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/80 mb-0.5 ml-1">
                  THE
                </span>
                Midwest{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.70 0.18 240) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Quantum
                </span>
                <br />
                Hackathon
              </h1>

              {/* 3 — Sub-copy: 1.1x Scale */}
              <p className="mt-3 max-w-lg text-[1.025rem] leading-[1.65] text-muted-foreground md:text-[1.1rem]">
                <strong className="font-semibold text-foreground">MidQWest</strong> is co-organized by quantum groups and regional partners at{" "}
                <span className="font-medium text-foreground">UIUC</span>,{" "}
                <span className="font-medium text-foreground">UChicago</span>,{" "}
                <span className="font-medium text-foreground">Purdue</span>,{" "}
                <span className="font-medium text-foreground">Purdue Northwest</span>,{" "}
                <span className="font-medium text-foreground">UW&#8209;Madison</span>,{" "}
                <span className="font-medium text-foreground">UIC Quantum</span>,{" "}
                <span className="font-medium text-foreground">Chicago WHPC</span>, and the{" "}
                <span className="font-medium text-foreground">Chicago Quantum Exchange</span>.
              </p>

              {/* 4 — CTAs: 1.1x Scale */}
              <div className="mt-4.5 flex flex-wrap items-center gap-3.5 sm:mt-5">
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-base font-semibold text-vivid-foreground transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
                    boxShadow: "0 4px 20px oklch(0.58 0.24 258 / 0.3)",
                  }}
                >
                  Apply now!
                  <ArrowRight className="size-4.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 py-3 text-base h-auto">
                  <Link href="/about">Learn more</Link>
                </Button>
              </div>
            </div>

            {/* Right Column — Interactive Mascot & Speech Bubble */}
            <div className="flex justify-center lg:justify-end">
              <MascotBubble />
            </div>
          </div>

          {/* 5 — Stats: 1.1x Scale */}
          <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-3 border-t border-border/60 pt-3.5 sm:gap-x-16 lg:mt-7 lg:pt-4">
            {[
              { value: "8",    label: "Collaborating orgs" },
              { value: "100%", label: "Free for students" },
              { value: "3",    label: "Midwest states" },
            ].map((s) => (
              <div key={s.label}>
                <dt
                  className="font-heading text-[2.25rem] font-bold tabular-nums leading-none md:text-[2.65rem]"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.70 0.18 240) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </dt>
                <dd className="mt-1 text-[12px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[12.5px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

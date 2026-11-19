import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SPONSORS } from "@/lib/sponsors";
import ScrollReveal from "@/components/ScrollReveal";

interface SponsorsProps {
  showCta?: boolean;
  className?: string;
}

function SponsorCard({
  sponsor,
  index,
  className = "",
}: {
  sponsor: (typeof SPONSORS)[number];
  index: number;
  className?: string;
}) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      data-reveal-delay={String(Math.min(index + 1, 6)) as "1" | "2" | "3" | "4" | "5" | "6"}
      className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-vivid/40 hover:bg-muted/20 card-lift ${className}`}
    >
      <div>
        {/* Top row: Logo + External link */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 items-center">
            <div className={`relative ${sponsor.logoWrapperClass || "h-10 w-44"}`}>
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </div>
          </div>
          <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
        </div>

        {/* Description */}
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          {sponsor.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-vivid">
        <span>Visit {sponsor.name}</span>
        <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

export default function Sponsors({ showCta = true, className = "" }: SponsorsProps) {
  const topSponsors = SPONSORS.slice(0, 3);
  const bottomSponsors = SPONSORS.slice(3);

  return (
    <section className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Supported by quantum industry leaders
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                Thank you to our premier sponsors and technology partners providing real-world challenge quests, student mentorship, and cloud quantum compute access.
              </p>
            </div>
            {showCta && (
              <div className="shrink-0">
                <Link
                  href="/sponsor"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Become a sponsor
                  <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Sponsors Grid: Stack of 3 on top of 2 (IBM & Q-CITI at the bottom) */}
          <div className="mt-12 space-y-6">
            {/* Top row: 3 Challenge Partners */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topSponsors.map((sponsor, i) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  index={i}
                  className={`h-full ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                />
              ))}
            </div>

            {/* Bottom row: IBM & Q-CITI - same card width as top row, centered */}
            <div className="flex flex-col sm:flex-row sm:justify-center gap-6">
              {bottomSponsors.map((sponsor, i) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  index={i + 3}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
                />
              ))}
            </div>
          </div>

          {/* Trademark and disclaimer line */}
          <div className="mt-8 border-t border-border/40 pt-4 text-[11px] text-muted-foreground/70 text-center sm:text-left">
            IBM and the IBM logo are trademarks of International Business Machines Corp., registered in many jurisdictions worldwide. All other logos are trademarks of their respective owners.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

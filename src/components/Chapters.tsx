import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ChapterLogo from "@/components/ChapterLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { CHAPTERS } from "@/lib/chapters";

export default function Chapters() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3.5 py-1 text-xs">
              Collaborating organizations
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem]">
              Organized in collaboration across universities & organizations
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Bringing together quantum groups, university hosts, and regional organizations across the Midwest.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTERS.map((chapter, i) => {
              const inner = (
                <div
                  data-reveal
                  data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                  className="group flex h-full items-center gap-4 bg-card p-6 transition-colors hover:bg-muted/20 card-lift"
                >
                  <ChapterLogo chapter={chapter} size={46} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-[0.95rem] font-bold leading-snug text-foreground">
                      {chapter.university}
                    </h3>
                    {chapter.org && (
                      <p className="mt-0.5 text-[13px] text-muted-foreground">{chapter.org}</p>
                    )}
                  </div>
                  {chapter.website && (
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                  )}
                </div>
              );

              return chapter.website ? (
                <a
                  key={chapter.university}
                  href={chapter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={chapter.university}>{inner}</div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

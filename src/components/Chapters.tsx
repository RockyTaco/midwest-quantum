import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ChapterLogo from "@/components/ChapterLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { CHAPTERS } from "@/lib/chapters";

export default function Chapters() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <ScrollReveal>
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4">
              Collaborating organizations
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              Organized in collaboration across universities & organizations
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bringing together quantum groups, university hosts, and regional organizations across the Midwest.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CHAPTERS.map((chapter, i) => {
              const isLast = i === CHAPTERS.length - 1;
              const inner = (
                <div
                  data-reveal
                  data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                  className={`group flex h-full items-center gap-4 bg-card p-6 transition-colors hover:bg-muted/20 card-lift ${
                    isLast ? "justify-start sm:justify-center" : ""
                  }`}
                >
                  <ChapterLogo chapter={chapter} />
                  <div className={isLast ? "min-w-0 flex-1 sm:flex-initial" : "min-w-0 flex-1"}>
                    <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
                      {chapter.university}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{chapter.org}</p>
                  </div>
                  {chapter.website && (
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                  )}
                </div>
              );

              return chapter.website ? (
                <a
                  key={chapter.org}
                  href={chapter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${isLast ? "sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={chapter.org}
                  className={isLast ? "sm:col-span-2 lg:col-span-3" : ""}
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

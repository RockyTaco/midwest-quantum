import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap, MapPin, School, Sparkles, Users } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChapterLogo from "@/components/ChapterLogo";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CHAPTERS, STUDENT_DIRECTORS, FACULTY_ADVISOR } from "@/lib/chapters";
import { WAITLIST_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Organizers & Student Coalition | MidQWest 2026",
  description:
    "Meet the student leaders, university chapters, faculty advisor, and regional quantum hubs co-organizing the Midwest Quantum Hackathon (MidQWest) at UIC Chicago.",
  keywords: [
    "MidQWest organizers",
    "Midwest quantum student coalition",
    "UIC quantum club",
    "UIUC SIGQuantum",
    "UChicago Quantum Society",
    "Purdue QSO",
    "UW-Madison WQCC",
    "Purdue Northwest QuantumLeap",
    "Chicago Quantum Exchange",
    "Chicago WHPC",
    "Dr. Zizwe Chase",
    "collegiate quantum hackathon organizers",
  ],
  alternates: {
    canonical: "/organizers",
  },
  openGraph: {
    title: "Organizers & Student Coalition — MidQWest 2026",
    description:
      "A first-of-its-kind collegiate quantum alliance uniting student organizations across UIC, UIUC, UChicago, Purdue, UW-Madison, and PNW.",
    url: "https://midqwest.dev/organizers",
    siteName: "MidQWest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Organizers & Student Coalition — MidQWest 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organizers & Student Coalition — MidQWest 2026",
    description:
      "A first-of-its-kind collegiate quantum alliance uniting student organizations across top Midwest universities.",
    images: ["https://midqwest.dev/og-image-v2.png"],
    creator: "@midqwest",
  },
};

export default function OrganizersPage() {
  const universityChapters = CHAPTERS.filter(
    (c) => c.role === "Host Institution" || c.role === "Founding Chapter"
  );
  const regionalPartners = CHAPTERS.filter((c) => c.role === "Regional Partner");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://midqwest.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Organizers",
        item: "https://midqwest.dev/organizers",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <div className="hero-animate max-w-3xl">
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] leading-[1.1]">
                The Student Coalition Behind MidQWest
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                MidQWest is a historic first-of-its-kind collegiate alliance uniting student quantum organizations, university faculty, and regional research hubs across the Midwest.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Founded and organized entirely by students, we are dedicated to expanding quantum computing literacy, fostering hands-on technical skills, and connecting collegiate builders directly with leading industry innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Host Institution & Faculty Advisor */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Host Campus &amp; Academic Leadership
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Proudly hosted in the heart of Chicago at the University of Illinois Chicago, with faculty guidance from the Department of Electrical and Computer Engineering.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Host Institution Card */}
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-vivid/40 card-lift">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{ background: "oklch(0.58 0.24 258 / 0.1)" }}
                      >
                        <School className="size-5" style={{ color: "oklch(0.58 0.24 258)" }} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          University of Illinois Chicago (UIC)
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Department of Electrical &amp; Computer Engineering (ECE)
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      As Chicago’s largest public research institution, UIC is centrally situated within the Illinois quantum corridor. UIC ECE provides the venue, institutional support, and academic backing to welcome 150–200 collegiate builders from across the Midwest.
                    </p>

                    <div className="mt-6 flex flex-col gap-2 rounded-xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <MapPin className="size-4 shrink-0 text-vivid" />
                        <span>Venue Location</span>
                      </div>
                      <p className="pl-6">
                        Illinois Room, Student Center East (SCE)<br />
                        750 S Halsted St, Chicago, IL 60607
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <a
                      href="https://ece.uic.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-vivid transition-colors"
                    >
                      Visit UIC ECE Department
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>

                {/* Faculty Advisor Card */}
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-vivid/40 card-lift">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{ background: "oklch(0.58 0.24 258 / 0.1)" }}
                      >
                        <GraduationCap className="size-5" style={{ color: "oklch(0.58 0.24 258)" }} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {FACULTY_ADVISOR.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {FACULTY_ADVISOR.title} · {FACULTY_ADVISOR.department}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {FACULTY_ADVISOR.bio}
                    </p>

                    <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">Academic Focus</p>
                      <p className="mt-1 leading-relaxed">
                        Quantum hardware, photonics, nanophotonics, and quantum information science research. Supporting student initiatives and regional workforce acceleration.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40">
                    <a
                      href={FACULTY_ADVISOR.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-vivid transition-colors"
                    >
                      UIC Faculty Profile
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Founding University Student Chapters */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Founding University Chapters
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Student-run quantum computing organizations from top research universities co-organizing the hackathon, hosting technical workshops, and mobilizing student delegations.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {universityChapters.map((chapter, i) => (
                  <div
                    key={chapter.university}
                    data-reveal
                    data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all hover:border-vivid/40 hover:bg-muted/10 card-lift"
                  >
                    <div>
                      {/* Top row: Logo + external link */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <ChapterLogo chapter={chapter} size={48} />
                          <div>
                            <h3 className="font-heading text-base font-bold text-foreground">
                              {chapter.org || chapter.university}
                            </h3>
                            <p className="text-xs text-muted-foreground">{chapter.university}</p>
                          </div>
                        </div>
                        {chapter.website && (
                          <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                        )}
                      </div>

                      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                        {chapter.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40">
                      {chapter.website ? (
                        <a
                          href={chapter.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-vivid transition-colors"
                        >
                          Visit chapter website
                          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground/60">
                          Host Campus Chapter
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Regional Ecosystem Hubs */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Regional Ecosystem Hubs &amp; Partners
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Collaborating with prominent Midwest quantum alliances and computing diversity organizations to bridge students with regional industry and research infrastructure.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {regionalPartners.map((partner, i) => (
                  <div
                    key={partner.university}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2"}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-vivid/40 card-lift"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <ChapterLogo chapter={partner} size={52} />
                          <div>
                            <h3 className="font-heading text-lg font-bold text-foreground">
                              {partner.university}
                            </h3>
                            <p className="text-xs text-muted-foreground">{partner.org}</p>
                          </div>
                        </div>
                        {partner.website && (
                          <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                        )}
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                        {partner.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40">
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-vivid transition-colors"
                        >
                          Visit {partner.monogram}
                          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Student Organizing Leadership */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Student Organizing Committee
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  MidQWest is driven by passionate undergraduate and graduate student leaders working across universities to create an unforgettable hackathon experience.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {STUDENT_DIRECTORS.map((lead, i) => (
                  <div
                    key={lead.name}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-vivid/40 card-lift"
                  >
                    <div>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-vivid/10 font-heading text-sm font-bold text-vivid">
                        {lead.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                        {lead.name}
                      </h3>
                      <p className="mt-1 font-medium text-xs text-vivid">
                        {lead.role}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {lead.school}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40">
                      {lead.website ? (
                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-vivid transition-colors"
                        >
                          Personal Website
                          <ExternalLink className="size-3" />
                        </a>
                      ) : lead.linkedin ? (
                        <a
                          href={lead.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-vivid transition-colors"
                        >
                          LinkedIn Profile
                          <ExternalLink className="size-3" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bring Your University / Join the Coalition */}
        <section className="bg-gradient-to-b from-card via-muted/20 to-background">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="rounded-3xl border border-vivid/20 bg-gradient-to-br from-card via-card to-vivid/[0.04] p-8 md:p-12 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                      Want your university or club involved?
                    </h2>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                      Are you a student leader or faculty member at a Midwest institution (Northwestern, Michigan, Notre Dame, Minnesota, Ohio State, and beyond)? We actively invite student delegations and campus partner clubs to collaborate with the coalition.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="size-4 text-vivid" />
                        Send a student delegation
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="size-4 text-vivid" />
                        Co-host regional workshops
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GraduationCap className="size-4 text-vivid" />
                        Expand collegiate quantum access
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="rounded-full">
                      <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                        Register as a student
                        <ArrowRight className="size-4 ml-2" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                      <Link href="/about">
                        About the hackathon
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
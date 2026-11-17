import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ExternalLink, MapPin, Sparkles, Trophy, Users } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { SCHEDULE } from "@/lib/schedule";
import { WAITLIST_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Official schedule for MidQWest 2026, the premier Midwest quantum hackathon at UIC Chicago. 24 hours of hacking, technical workshops, and judging on November 21–22, 2026.",
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "Schedule — MidQWest 2026 Quantum Hackathon",
    description:
      "Explore the 24-hour hackathon timeline at UIC Chicago. Saturday kickoff, challenge reveals, workshops, and Sunday project demos and awards.",
    url: "https://midqwest.dev/schedule",
    siteName: "MidQWest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "MidQWest 2026 Hackathon Schedule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule — MidQWest 2026 Quantum Hackathon",
    description: "24-hour quantum hackathon schedule at UIC Chicago on November 21–22, 2026.",
    images: ["/og-image-v2.png"],
  },
};

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    label: "No Experience Needed",
    desc: "Crash courses and workshops designed for beginners and experts alike.",
  },
  {
    icon: Users,
    label: "Team Formation",
    desc: "Teams of 2–5 builders. Come with a team or get matched with builders on Saturday morning.",
  },
  {
    icon: Clock,
    label: "24-Hour Hacking",
    desc: "Dedicated building time with continuous industry and academic mentorship.",
  },
  {
    icon: Trophy,
    label: "Demos & Prizes",
    desc: "Pitch live to sponsor judges for cash prizes and category awards.",
  },
];

export default function SchedulePage() {
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
        name: "Schedule",
        item: "https://midqwest.dev/schedule",
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
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <div className="hero-animate max-w-3xl">
              <div>
                <Badge variant="accent" className="mb-4">
                  Weekend Timeline · Working Schedule
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Hackathon Schedule
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                24 hours of quantum discovery, collaborative quests, and hands-on mentorship hosted in Chicago.
              </p>

              {/* Venue Card */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-vivid/10 text-vivid mt-0.5">
                    <MapPin className="size-4.5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      Illinois Room, Student Center East
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      University of Illinois Chicago (UIC) · 750 S Halsted St, Chicago, IL 60607
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="shrink-0 text-xs">
                  <a
                    href="https://maps.google.com/?q=750+S+Halsted+St+Chicago+IL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    Open in Maps
                    <ExternalLink className="size-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-vivid/10 text-vivid mt-0.5">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-semibold text-foreground">
                        {item.label}
                      </h4>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Days */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                  <h2 className="font-heading text-3xl font-bold tracking-tight">
                    Event Itinerary
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All times listed in Central Time (CT). Subject to minor operational updates prior to kickoff.
                  </p>
                </div>
                <div className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                  Live updates will be posted to Discord
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {SCHEDULE.map((dayPlan, dayIdx) => (
                  <div
                    key={dayPlan.day}
                    data-reveal
                    data-reveal-delay={String(dayIdx + 1) as "1" | "2"}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"
                  >
                    <div className="flex items-center justify-between border-b border-border/60 pb-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                            Day 0{dayIdx + 1}
                          </span>
                        </div>
                        <h3 className="mt-1 font-heading text-2xl font-bold text-foreground">
                          {dayPlan.day}
                        </h3>
                      </div>
                      <span className="rounded-full border border-border bg-muted/50 px-3.5 py-1 font-heading text-xs font-medium text-muted-foreground">
                        {dayPlan.date}
                      </span>
                    </div>

                    <div className="mt-6 flow-root">
                      <ul className="divide-y divide-border/40">
                        {dayPlan.events.map((event, idx) => (
                          <li
                            key={idx}
                            className={`py-4.5 first:pt-0 last:pb-0 ${
                              event.highlight
                                ? "rounded-xl border border-vivid/20 bg-vivid/5 p-4 my-2"
                                : ""
                            }`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                              <span className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-foreground">
                                <Clock className="size-3.5 text-vivid" />
                                {event.time}
                              </span>
                              {event.location && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                                  <MapPin className="size-3 text-muted-foreground/70" />
                                  {event.location}
                                </span>
                              )}
                            </div>
                            <h4
                              className={`mt-2 font-heading text-base font-semibold ${
                                event.highlight ? "text-vivid" : "text-foreground"
                              }`}
                            >
                              {event.activity}
                            </h4>
                            {event.details && (
                              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                {event.details}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What to Expect / Prep checklist */}
        <section className="border-b border-border/60 bg-muted/15">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-16 md:py-20">
            <ScrollReveal>
              <div className="max-w-2xl">
                <Badge variant="accent" className="mb-3">
                  Checklist
                </Badge>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                  What to bring &amp; preparation
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Everything you need to know before stepping foot on the UIC campus.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Laptop & Charger",
                    desc: "Bring your development laptop with a modern web browser and Python / Git environment installed.",
                  },
                  {
                    title: "Student ID",
                    desc: "A valid university student ID card is required for on-site registration check-in.",
                  },
                  {
                    title: "Zero Prior Quantum Req.",
                    desc: "You don't need a physics degree. Crash courses and mentorship will get you productive immediately.",
                  },
                  {
                    title: "Food & Refreshments",
                    desc: "Catered lunch, food trucks, snacks, and caffeine provided free of charge throughout the event.",
                  },
                  {
                    title: "Discord Access",
                    desc: "Join our official hackathon Discord for live announcements, mentor help channels, and team matching.",
                  },
                  {
                    title: "Hardware & Swag",
                    desc: "Official hackathon swag and sponsor computing credits (including IBM Quantum access) provided.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                  >
                    <CheckCircle2 className="size-4.5 shrink-0 text-vivid mt-0.5" />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 text-center">
          <div className="mx-auto w-full max-w-4xl px-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to hack with us in Chicago?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Applications are completely free for all undergraduate and graduate students. Register early to guarantee hardware access and food accommodations!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-vivid-foreground transition-all hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
                  boxShadow: "0 4px 20px oklch(0.58 0.24 258 / 0.3)",
                }}
              >
                Apply now
                <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 text-sm">
                <Link href="/about">Learn about the organizing team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

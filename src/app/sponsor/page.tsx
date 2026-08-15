"use client";

import { Check, Info } from "lucide-react";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

/** Tooltip shown on info-icon hover */
function InfoTooltip({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <Info
        className="ml-1 size-3.5 shrink-0 cursor-help text-muted-foreground/70 hover:text-vivid transition-colors"
        aria-label="More info"
      />
      {visible && (
        <span
          role="tooltip"
          className="
            absolute bottom-full left-1/2 z-50 mb-2
            w-60 -translate-x-1/2
            rounded-lg border border-border bg-card px-3 py-2
            text-xs leading-relaxed text-foreground shadow-lg
            pointer-events-none
          "
        >
          {text}
          {/* Arrow */}
          <span
            className="
              absolute left-1/2 top-full -translate-x-1/2
              border-4 border-transparent border-t-border
            "
          />
          <span
            className="
              absolute left-1/2 top-full -translate-x-1/2 mt-[-1px]
              border-4 border-transparent border-t-card
            "
          />
        </span>
      )}
    </span>
  );
}

const PERK_INFO: Record<string, string> = {
  "Logo on website, signage, and event t-shirts":
    "All tiers include branding on our website, event T-shirts, and other promotional materials. Higher tiers also get prominent logo placement on event banners and social media recognition posts on our Instagram and LinkedIn.",
  "Discord community shoutout":
    "A dedicated shoutout post in the MidQWest Discord server, reaching our community of quantum-interested students across Midwest universities.",
  "Access to resume book":
    "Receive a curated collection of résumés from hackathon participants — top CS, physics, and engineering students from UIUC, UChicago, Purdue, and more — for recruiting pipelines.",
  "Technical Workshop":
    "Host a workshop or tech talk during the hackathon. Share expertise in a skill, programming language, or topic relevant to the challenges. A great way to connect with and mentor potential future talent.",
  "Dedicated sponsor table at the venue":
    "A sponsor table in a central location within the hackathon space. Display pamphlets, hand out swag, and have on-site recruiters interact directly with students throughout the event.",
  "Workshop or challenge-problem slot":
    "Opportunity to host a specific challenge during the hackathon, potentially incorporating your API or products, or simply bearing your company's name. Alternatively, opt to judge a prize category and choose the winning team.",
  "Seat on the judging panel":
    "Join the judging panel to evaluate participant projects, directly shaping which teams and solutions are recognized — and getting a firsthand look at student ingenuity.",
  "Front and center branding":
    "Maximum visibility: your logo and name are featured prominently across all event materials, the main stage, opening and closing ceremonies, and all digital and physical signage.",
  "Work with organizing team to create custom challenge problem":
    "Collaborate directly with the MidQWest organizing team to design a fully custom hackathon challenge. Incorporate your APIs, products, or research themes for a tailored showcase of your technology to all participants.",
};

const TIERS = [
  {
    name: "Qubit",
    badge: "Starter",
    price: "$500",
    tagline: "The fundamental unit… a superposition of both half a band and two-level system!",
    description: "Establish your brand presence and reach Midwest quantum talent.",
    perks: [
      "Logo on website, signage, and event t-shirts",
      "Discord community shoutout",
    ],
    accent: "border-border text-muted-foreground",
  },
  {
    name: "Bell",
    badge: "Supporter",
    price: "$1,000",
    tagline: "Entangled in financials! Isn't that grand…",
    description: "Engage with participants and connect your team with quantum-curious students.",
    perks: [
      "Logo on website, signage, and event t-shirts",
      "Discord community shoutout",
      "Access to resume book",
      "Technical Workshop",
    ],
    accent: "border-vivid/40 bg-vivid/5 text-vivid",
  },
  {
    name: "GHZ",
    badge: "Partner",
    price: "$3,000",
    tagline: "Sponsors demonstrate nonlocality by influencing hackathons at a distance…",
    description: "Engage directly with participants and lead a technical session on-site.",
    perks: [
      "Logo on website, signage, and event t-shirts",
      "Discord community shoutout",
      "Access to resume book",
      "Technical Workshop",
      "Dedicated sponsor table at the venue",
      "Workshop or challenge-problem slot",
      "Seat on the judging panel",
    ],
    accent: "border-transparent bg-vivid text-vivid-foreground",
  },
  {
    name: "Partner",
    badge: "Title Sponsor",
    price: "$10,000",
    tagline: "For not even the price of a gram of Helium-3…",
    description: "Anchor the event with top billing, maximum visibility, and the deepest student access.",
    perks: [
      "Logo on website, signage, and event t-shirts",
      "Discord community shoutout",
      "Access to resume book",
      "Technical Workshop",
      "Dedicated sponsor table at the venue",
      "Workshop or challenge-problem slot",
      "Seat on the judging panel",
      "Front and center branding",
      "Work with organizing team to create custom challenge problem",
    ],
    accent: "border-foreground/20 bg-foreground text-background",
  },
] as const;

const BUDGET = [
  {
    allocation: "Student Prizes",
    impact: "Cash awards and grants for top teams across each quest category.",
    extra: false,
  },
  {
    allocation: "Food & Catering",
    impact: "Breakfasts, lunches, dinners, snacks, and coffee throughout the weekend.",
    extra: false,
  },
  {
    allocation: "Merchandise",
    impact: "Event T-shirts, badges, and promotional materials for all participants.",
    extra: false,
  },
  {
    allocation: "Challenge Development",
    impact: "Resources, compute credits, and tooling needed to build and run hackathon quests.",
    extra: false,
  },
  {
    allocation: "Travel Support",
    impact: "Extra funds go toward travel stipends and subsidies to help students attend from across the Midwest.",
    extra: true,
  },
];

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="hero-animate max-w-3xl">
              <div>
                <Badge variant="accent" className="mb-6">
                  Sponsors &amp; partners
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Support regional quantum innovation
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Partner with MidQWest to connect with top CS, physics, and engineering
                students and help build a lasting Midwest quantum talent pipeline.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="/MidQWest Sponsorship Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View sponsorship brochure
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Package */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <div data-reveal className="max-w-2xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Sponsorship package
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Four tiers, one goal: connect your team with the Midwest&apos;s
                  top quantum talent. 100% of funding goes directly to running the event.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-4">
                {TIERS.map((tier, i) => (
                  <div
                    key={tier.name}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2" | "3" | "4"}
                    className="flex flex-col rounded-xl border border-border bg-card p-7 card-lift"
                  >
                    <h3 className="font-heading text-2xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-2 font-heading text-4xl font-bold text-vivid">
                      {tier.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>

                    <div className="mt-6 border-t border-border/60 pt-6">
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-foreground">
                        Included benefits
                      </p>
                      <ul className="mt-4 space-y-3">
                        {tier.perks.map((perk) => (
                          <li key={perk} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-vivid" />
                            <span className="leading-relaxed text-foreground flex items-center flex-wrap gap-x-0.5">
                              {perk}
                              {PERK_INFO[perk] && (
                                <InfoTooltip text={PERK_INFO[perk]} />
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hardware & Platform Callout */}
              <div
                data-reveal
                data-reveal-delay="5"
                className="mt-8 flex flex-col items-start gap-6 rounded-xl border border-border/80 bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                    Hardware &amp; Platform Partners
                  </p>
                  <p className="mt-1.5 max-w-xl text-xs text-muted-foreground leading-relaxed">
                    Interested in providing QPU time or demonstrating your stack? Partners can offer processing credits to hackers, host dedicated tech talks/workshops, or sponsor custom challenge tracks around their platform.
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0">
                  <a href="mailto:riveryc2@illinois.edu">
                    Get in touch
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Budget */}
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Where funding goes
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Every dollar goes directly toward removing participation barriers
                for students across the Midwest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {BUDGET.filter((row) => !row.extra).map((row, i) => (
                  <div
                    key={row.allocation}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2" | "3" | "4"}
                    className="bg-card p-7"
                  >
                    <p className="mt-1 font-heading text-base font-semibold text-foreground">
                      {row.allocation}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {row.impact}
                    </p>
                  </div>
                ))}
              </div>

              {/* Travel — extra funds callout */}
              {BUDGET.filter((row) => row.extra).map((row, i) => (
                <div
                  key={row.allocation}
                  data-reveal
                  data-reveal-delay={String(i + 5) as "5" | "6"}
                  className="mt-4 flex flex-col gap-3 rounded-xl border border-dashed border-border/80 bg-muted/30 px-6 py-5 sm:flex-row sm:items-center sm:gap-6"
                >
                  <p className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid shrink-0">
                    + Extra funds
                  </p>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {row.allocation}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {row.impact}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

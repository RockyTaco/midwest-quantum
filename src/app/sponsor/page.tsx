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
  "Logo on website, signage, and event materials":
    "Company name and logo featured across our official website, digital signage, print banners, and event materials.",
  "Social media recognition":
    "Shoutouts across our official social channels (LinkedIn, Instagram, Discord) recognizing your company as an official sponsor.",
  "Access to resume book":
    "Receive a curated collection of résumés from hackathon participants — top CS, physics, and engineering students from UIUC, UChicago, Purdue, UIC, UW-Madison, and PNW.",
  "Technical workshop (60 min)":
    "Host a 60-minute technical session or workshop during the hackathon. Share expertise, showcase your tech stack, and mentor students.",
  "Shared sponsor table":
    "Table space at the venue to distribute swag, display promotional materials, and interact directly with attendees.",
  "All Bell benefits":
    "Includes all benefits from the Bell tier (branding, social media recognition, resume book, 60-min technical workshop).",
  "Dedicated sponsor table":
    "A full, dedicated sponsor table in a central location at the venue for your team and recruiters throughout the weekend.",
  "Single challenge-problem slot":
    "Opportunity to host a dedicated challenge problem or prize category tailored to your technology or problem area.",
  "Seat on the judging panel":
    "Directly evaluate student submissions and help select winning teams, getting a firsthand look at top talent.",
  "More prominent logo placement":
    "Elevated brand visibility with larger, primary logo placement on event banners, stage backdrops, and promotional materials.",
  "All GHZ benefits":
    "Includes all benefits from the GHZ tier (dedicated table, challenge slot, judging seat, workshop, resume book, and prominent branding).",
  "Named category of multiple challenges":
    "Top-tier challenge integration: sponsor and brand a full challenge track across multiple challenge categories.",
  "Dedicated social media feature":
    "Individual spotlight feature across all our social media channels highlighting your company's mission and quantum initiatives.",
  "Premium table placement":
    "Prime, high-traffic booth placement at the venue entrance/central hall for maximum student engagement.",
  "Post-event impact report":
    "Comprehensive summary report detailing attendee demographics, project submissions, reach metrics, and event outcomes.",
};

const TIERS = [
  {
    name: "Bell",
    price: "$5,000",
    tagline: "Entangled in financials!",
    description: "Establish your presence, recruit students, and lead a technical session at the event.",
    perks: [
      "Logo on website, signage, and event materials",
      "Social media recognition",
      "Access to resume book",
      "Technical workshop (60 min)",
      "Shared sponsor table",
    ],
    accent: "border-border text-muted-foreground",
  },
  {
    name: "GHZ",
    price: "$7,000",
    tagline: "Sponsors demonstrate nonlocality by influencing hackathons at a distance, but also by attending in person!",
    description: "Dedicated sponsor table, single challenge-problem slot, and judging panel representation.",
    perks: [
      "All Bell benefits",
      "Dedicated sponsor table",
      "Single challenge-problem slot",
      "Seat on the judging panel",
      "More prominent logo placement",
    ],
    accent: "border-vivid/40 bg-vivid/5 text-vivid",
  },
  {
    name: "Partner",
    price: "$10,000",
    tagline: "For less than the market price for a gram of Helium-3…",
    description: "Premier event partner with named challenge category, dedicated features, and impact reporting.",
    perks: [
      "All GHZ benefits",
      "Named category of multiple challenges",
      "Dedicated social media feature",
      "Premium table placement",
      "Post-event impact report",
    ],
    accent: "border-transparent bg-vivid text-vivid-foreground",
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
                  Three tiers, one goal: connect your team with the Midwest&apos;s
                  top quantum talent. 100% of funding goes directly to running the event.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {TIERS.map((tier, i) => (
                  <div
                    key={tier.name}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
                    className="flex flex-col rounded-xl border border-border bg-card p-7 card-lift"
                  >
                    <h3 className="font-heading text-2xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-xs italic text-muted-foreground/80">
                      {tier.tagline}
                    </p>
                    <p className="mt-3 font-heading text-4xl font-bold text-vivid">
                      {tier.price}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
                data-reveal-delay="4"
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

import type { Metadata } from "next";
import { Clock, ExternalLink, MapPin } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChapterLogo from "@/components/ChapterLogo";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { CHAPTERS } from "@/lib/chapters";

export const metadata: Metadata = {
  title: "About the Hackathon",
  description:
    "Learn about MidQWest 2026, the premier student-led Midwest quantum hackathon at UIC Chicago. Discover our mission, 150–200 student builders, schedule, and FAQs.",
  keywords: [
    "About MidQWest",
    "Midwest Quantum Hackathon schedule",
    "UIC quantum hackathon location",
    "quantum quests hackathon",
    "Year of Illinois Quantum event",
    "150-200 student builders",
    "Midwest quantum student organizations",
    "UIUC UChicago Purdue UIC UW-Madison quantum",
    "collegiate quantum hackathon mission",
    "quantum hackathon FAQs",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "MidQWest is a premier student-led quantum hackathon at UIC Chicago uniting 150–200 builders from top Midwest universities to solve quantum quests.",
    url: "https://midqwest.dev/about",
    siteName: "MidQWest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "About MidQWest 2026 — Midwest Quantum Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "MidQWest unites 150–200 student builders from top Midwest universities to solve quantum quests at UIC.",
    images: ["https://midqwest.dev/og-image-v2.png"],
    creator: "@midqwest",
  },
};

const EXPECT = [
  {
    num: "01",
    title: "Challenge \'Quests\'",
    body: "Multiple tracks designed by student organizations and sponsors, covering quantum algorithms, error correction, quantum machine learning, and pulse programming.",
  },
  {
    num: "02",
    title: "Workshops & Crash Courses",
    body: "Hands-on sessions for all experience levels. Write your first quantum circuit or dive into variational algorithms and noise mitigation.",
  },
  {
    num: "03",
    title: "Mentorship",
    body: "Guidance from experienced students, researchers, and industry mentors throughout the weekend to help every team build and present something real.",
  },
  {
    num: "04",
    title: "Demos & Judging",
    body: "Present to judges from academia and industry. Prizes awarded for technical depth, creativity, and real-world applicability.",
  },
];

const FAQ = [
  {
    q: "When is MidQWest?",
    a: "November 21–22, 2026 in Chicago (weekend of November 20–22). Check-in and opening events begin Saturday morning, with 24 hours of hacking followed by project demos and awards Sunday afternoon.",
  },
  {
    q: "Where will it be held?",
    a: "University of Illinois Chicago (UIC) campus on Chicago's Near West Side — centrally located and easily accessible for universities across the Midwest.",
  },
  {
    q: "Who can participate?",
    a: "150–200 undergraduate and graduate students from universities across the Midwest studying CS, Physics, Engineering, and related fields. No prior quantum computing experience is required — crash courses and mentors are provided.",
  },
  {
    q: "What are 'Quests'?",
    a: "Quests are sponsor- and organizer-designed hackathon challenge tracks spanning quantum algorithms, error correction, quantum machine learning, simulation, and pulse engineering.",
  },
  {
    q: "Is there a cost?",
    a: "No. MidQWest is 100% free for all participating students. Sponsorship funding covers meals, venue operations, and prize pools.",
  },
  {
    q: "How are teams formed?",
    a: "Students work in teams of 3–5 to tackle challenge quests. You can register with a team or join our team-matching sessions on Discord and on-site at the event. Solo builders are warmly welcomed!",
  },
  {
    q: "Want your university or company involved?",
    a: "If your university quantum club wants to bring a student delegation, or your company wants to sponsor challenge tracks and recruit talent, reach out to our organizing team.",
  },
];

interface ScheduleEvent {
  time: string;
  activity: string;
  location?: string;
  details?: string;
  highlight?: boolean;
}

interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

const SCHEDULE: ScheduleDay[] = [
  {
    day: "Saturday",
    date: "November 21, 2026",
    events: [
      {
        time: "8:00 AM – 9:15 AM",
        activity: "Registration & Check-In",
        location: "Fort Dearborn A",
        details: "Participant check-in, attendance logging, and nametag distribution.",
      },
      {
        time: "8:00 AM – 9:00 AM",
        activity: "Sponsor Tabling & Early Networking",
        location: "IL C",
        details: "Early opportunity to meet company representatives and mentors at sponsor tables.",
      },
      {
        time: "9:00 AM – 9:15 AM",
        activity: "Opening Remarks",
        location: "IL AB",
        details: "Official welcome address from the MidQWest student organizing team.",
      },
      {
        time: "9:15 AM – 9:30 AM",
        activity: "Challenge Tracks & Team Rosters",
        location: "IL AB",
        details: "Overview of quest tracks and live team assignment release via QR code / spreadsheet.",
      },
      {
        time: "9:30 AM – 12:00 PM",
        activity: "Sponsor Talks & Tech Workshops",
        location: "IL AB",
        details: "Technical deep-dives, developer tooling walkthroughs, and challenge prep sessions.",
      },
      {
        time: "12:00 PM – 1:15 PM",
        activity: "Lunch (UIC Catering)",
        location: "Fort Dearborn A",
        details: "Catered lunch for all participants. (1:15 PM is the hard deadline to confirm team rosters).",
      },
      {
        time: "1:15 PM – 2:00 PM",
        activity: "Hackathon Challenges & Instructions Officially Released",
        location: "IL AB",
        details: "Sponsors and organizers officially reveal quest prompts and grading criteria. Teams assemble together.",
      },
      {
        time: "2:00 PM",
        activity: "Hackathon Work Time Starts! (24 Hours)",
        location: "IL AB & Hacker Spaces",
        details: "The 24-hour hacking sprint begins! Student teams spread out to build. Overnight support on Discord.",
        highlight: true,
      },
      {
        time: "5:00 PM – 6:00 PM",
        activity: "Social Break & Networking",
        location: "Main Concourse",
        details: "Mid-day break to connect with companies, mentors, and fellow builders.",
      },
    ],
  },
  {
    day: "Sunday",
    date: "November 22, 2026",
    events: [
      {
        time: "12:00 PM – 1:30 PM",
        activity: "Food Trucks (Brunch / Lunch)",
        location: "Outside",
        details: "On-site food trucks to keep hackers fueled for the final stretch.",
      },
      {
        time: "2:00 PM",
        activity: "Hackathon Work Time Ends!",
        location: "IL AB",
        details: "24-hour timer concludes — all code, repositories, and project submissions due.",
        highlight: true,
      },
      {
        time: "2:00 PM – 4:00 PM",
        activity: "Project Demos & Judging",
        location: "Dearborn B",
        details: "Student teams present challenge solutions to sponsors and judges. Each project evaluated against the rubric by multiple reviewers.",
      },
      {
        time: "4:00 PM – 4:30 PM",
        activity: "Closing Remarks & Announce Winners",
        location: "IL AB",
        details: "Award ceremony, category winners revealed, and prize announcements.",
        highlight: true,
      },
      {
        time: "4:30 PM – 5:00 PM",
        activity: "Sponsor Tabling Wrap-Up & Farewell",
        location: "IL C & Concourse",
        details: "Final networking with company representatives, team photos, and farewells.",
      },
      {
        time: "5:00 PM",
        activity: "Hackathon Concludes",
        location: "UIC Campus",
        details: "MidQWest 2026 officially concludes.",
      },
      {
        time: "5:30 PM",
        activity: "Venue Clean-Up",
        location: "UIC Campus",
        details: "Organizing team and volunteer tear-down.",
      },
    ],
  },
];

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
        name: "About",
        item: "https://midqwest.dev/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
              <div>
                <Badge variant="accent" className="mb-6">
                  Student-Led Regional Initiative
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] leading-[1.1]">
                About the Midwest Quantum Hackathon
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                The Midwest Quantum Hackathon, or <strong className="font-semibold text-foreground">MidQWest</strong> for short, is a premier student-led initiative targeting quantum workforce development in Chicago and the broader Midwest as the region pushes to become a leading hub for quantum technologies.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Hosted at the University of Illinois Chicago (UIC) campus over the weekend of November 20–22, 2026, MidQWest will follow a hackathon format where 150–200 students collaborate in teams to apply quantum information science and engineering to solve challenges called &ldquo;quests.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Purpose Pillars */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-4 px-3.5 py-1 text-xs">
                  Our Mission
                </Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Empowering the next generation of quantum talent
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground">
                  Inspired by nationally recognized collegiate quantum hackathons like MIT’s iQuHACK and Yale’s YQuantum, MidQWest was founded to fulfill three critical goals:
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Pillar 1 */}
                <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-vivid/40 card-lift">
                  <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vivid">
                    01 · Regional Ecosystem
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                    A Central Gathering Point
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Fill a critical gap in the current academic and professional ecosystem, establishing a dedicated central venue for Midwest students to connect, collaborate, and compete.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-vivid/40 card-lift">
                  <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vivid">
                    02 · Regional Momentum
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                    Celebrate Illinois Quantum
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Celebrate the &ldquo;Year of Illinois Quantum,&rdquo; aligning directly with state, regional, and national initiatives to advance quantum science and technology leadership.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-vivid/40 card-lift">
                  <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vivid">
                    03 · Workforce Acceleration
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                    Career & Skill Development
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Enable workforce development across the Midwest by accelerating technical skills, cultivating competitive project portfolios, and forging enduring peer networks.
                  </p>
                </div>
              </div>

              {/* Recruitment & Industry Callout */}
              <div className="mt-8 rounded-2xl border border-vivid/20 bg-gradient-to-r from-vivid/[0.04] via-card to-vivid/[0.02] p-7 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                      Top-Tier Midwest Talent
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                      Where Industry Connects with Future Quantum Leaders
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Organized in collaboration with the region’s top student quantum organizations, MidQWest brings together students from top-10 programs in Engineering, Physics, and Computer Science. The event serves as an ideal venue for companies and national labs to mentor builders and recruit for interns, co-ops, and full-time roles during the peak November hiring season.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="/sponsor"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-vivid-foreground transition-all hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
                        boxShadow: "0 2px 12px oklch(0.58 0.24 258 / 0.25)",
                      }}
                    >
                      Sponsor & Recruit
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                What to expect
              </h2>
              <p className="mt-3 text-muted-foreground">
                A weekend-long hackathon bringing together student builders from across the Midwest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {EXPECT.map((item, i) => (
                  <div
                    key={item.num}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1"|"2"|"3"|"4"}
                    className="bg-card p-6"
                  >
                    <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-vivid">
                      {item.num}
                    </p>
                    <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Schedule */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div>
                <Badge variant="accent" className="mb-4">
                  Tentative Schedule
                </Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Weekend schedule <span className="text-muted-foreground text-xl font-normal">(Tentative)</span>
                </h2>
                <p className="mt-2 text-muted-foreground">
                  November 21–22, 2026 · University of Illinois Chicago (UIC) Campus
                </p>
              </div>

              {/* Tentative Callout Banner */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs text-foreground/90">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-[11px]">
                  !
                </span>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Working schedule:</strong> All session timings, room assignments, and workshop slots are subject to minor adjustments as sponsor challenges and logistics are finalized. All official day-of announcements, room directions, and mentor support channels will be communicated live through Discord.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-heading text-[10px] font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                            Tentative
                          </span>
                        </div>
                        <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                          {dayPlan.day}
                        </h3>
                      </div>
                      <span className="rounded-full border border-border bg-muted/50 px-3 py-1 font-heading text-xs font-medium text-muted-foreground">
                        {dayPlan.date}
                      </span>
                    </div>

                    <div className="mt-6 flow-root">
                      <ul className="divide-y divide-border/40">
                        {dayPlan.events.map((event, idx) => (
                          <li
                            key={idx}
                            className={`py-4 first:pt-0 last:pb-0 ${
                              event.highlight ? "rounded-lg bg-vivid/5 px-3 py-3 -mx-3" : ""
                            }`}
                          >
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-foreground">
                                <Clock className="size-3 text-vivid" />
                                {event.time}
                              </span>
                              {event.location && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                                  <MapPin className="size-3 text-muted-foreground/70" />
                                  {event.location}
                                </span>
                              )}
                            </div>
                            <h4
                              className={`mt-1.5 font-heading text-sm font-semibold ${
                                event.highlight ? "text-vivid" : "text-foreground"
                              }`}
                            >
                              {event.activity}
                            </h4>
                            {event.details && (
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
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

              <p className="mt-6 text-center text-xs font-medium text-amber-700/90 dark:text-amber-400">
                * All times are in Central Time (CT). This schedule is strictly tentative and subject to change prior to event kickoff.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Organizing chapters */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Organized in collaboration across universities & organizations
              </h2>
              <p className="mt-3 text-muted-foreground">
                Quantum groups, university hosts, and regional organizations co-organizing MidQWest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {CHAPTERS.map((chapter, i) => {
                  const inner = (
                    <div
                      data-reveal
                      data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                      className="group flex h-full items-center gap-3.5 bg-card p-5 sm:p-6 transition-colors hover:bg-muted/40 card-lift"
                    >
                      <ChapterLogo chapter={chapter} size={42} />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-sm font-semibold leading-snug text-foreground">
                          {chapter.university}
                        </h3>
                        {chapter.org && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {chapter.org}
                          </p>
                        )}
                      </div>
                      {chapter.website && (
                        <ExternalLink className="size-3.5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
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

        {/* FAQs */}
        <section>
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                FAQs
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
                {FAQ.map((item, i) => (
                  <div
                    key={item.q}
                    data-reveal
                    data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                    className="bg-card p-6"
                  >
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

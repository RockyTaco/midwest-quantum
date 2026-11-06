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
    "Learn about MidQWest 2026, the mission to empower Midwest quantum talent, co-organizing university chapters, event structure, and FAQs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Learn about the mission, organizing student chapters from UIUC, UChicago, Purdue, Purdue Northwest, UIC, and UW-Madison, and FAQs for MidQWest 2026.",
    url: "/about",
  },
  twitter: {
    title: "About MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Learn about the mission, organizing student chapters, and event structure for MidQWest 2026.",
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
    a: "November 21–22, 2026 in Chicago. Register to receive venue details, schedule information, and logistics updates.",
  },
  {
    q: "Where will it be held?",
    a: "University of Illinois Chicago (UIC) campus on Chicago's Near West Side — centrally located and easily accessible for universities across the Midwest.",
  },
  {
    q: "Who can participate?",
    a: "Any undergraduate or graduate student at a Midwest university. No prior quantum experience required; dedicated workshops cover key fundamentals.",
  },
  {
    q: "Is there a cost?",
    a: "No. MidQWest is 100% free for all participating students. Sponsorship funding covers meals, venue operations, and prize pools.",
  },
  {
    q: "How are teams formed?",
    a: "Register with a team or join our team-matching sessions at the event. Solo hackers are welcome.",
  },
  {
    q: "Want your university involved?",
    a: "If your school has a quantum computing student organization and you want to co-organize or bring a delegation, reach out. We are actively expanding.",
  },
];

const SCHEDULE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/18AGlF_M6t0e0tSnmxXtlBA2Jgs4QvOJa0xNsMgAiVAU/edit?usp=sharing";

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
        time: "8:00 AM – 9:30 AM",
        activity: "Registration & Sponsor Tabling",
        location: "Fort Dearborn A & IL C",
        details: "Participant check-in, nametags, and initial networking with sponsors.",
      },
      {
        time: "9:00 AM – 9:30 AM",
        activity: "Opening Remarks",
        location: "IL AB",
        details: "Official welcome address from the MidQWest student organizers.",
      },
      {
        time: "9:30 AM – 12:00 PM",
        activity: "Sponsor Talks & Tech Workshops",
        location: "IL AB",
        details: "Technical deep-dives, challenge prep, and Q&A sessions.",
      },
      {
        time: "12:00 PM – 1:15 PM",
        activity: "Catered Lunch",
        location: "Fort Dearborn A",
        details: "Lunch provided for all participating students and mentors.",
      },
      {
        time: "1:15 PM – 2:00 PM",
        activity: "Hackathon Challenges & 'Quests' Released",
        location: "IL AB",
        details: "Official challenge tracks and problem statements presented by sponsors and organizers.",
      },
      {
        time: "2:00 PM",
        activity: "Hackathon Work Time Starts!",
        location: "IL AB & Breakout Spaces",
        details: "24-hour hack sprint officially begins — teams start hacking!",
        highlight: true,
      },
      {
        time: "5:00 PM – 6:00 PM",
        activity: "Social Break & Mentor Networking",
        location: "Venue Space",
        details: "Mid-day break to connect with company reps and mentors.",
      },
    ],
  },
  {
    day: "Sunday",
    date: "November 22, 2026",
    events: [
      {
        time: "Morning (Pre-2:00 PM)",
        activity: "Food Trucks (Brunch / Lunch)",
        location: "Outside / Patio",
        details: "On-site food trucks to keep builders fueled through the final stretch.",
      },
      {
        time: "2:00 PM",
        activity: "Hackathon Work Time Ends!",
        location: "IL AB",
        details: "24 hours end — all project submissions and presentations due.",
        highlight: true,
      },
      {
        time: "2:00 PM – 4:00 PM",
        activity: "Project Demos & Judging",
        location: "Dearborn B",
        details: "Teams present their work to academic and industry judges evaluated against rubrics.",
      },
      {
        time: "2:00 PM – 4:00 PM",
        activity: "Professional Networking",
        location: "Exhibition Areas",
        details: "Students talk with sponsors, share resumes, and showcase hackathon work.",
      },
      {
        time: "5:00 PM",
        activity: "Awards Ceremony & Winners Announced",
        location: "IL AB",
        details: "Recognition, prizes, and grants announced for winning teams.",
        highlight: true,
      },
      {
        time: "6:00 PM",
        activity: "Event Conclusion",
        location: "Venue Space",
        details: "Closing remarks, final photos, and farewells.",
      },
    ],
  },
];

export default function AboutPage() {
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
                  Regional initiative
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                About the Midwest Quantum Hackathon
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                MidQWest is organized in collaboration with university hosts, academic partners, and student organizations across the Midwest. With student organizers coordinating event logistics and collaborating closely with sponsors on hackathon challenge tracks, our mission is to empower undergraduates and build a lasting Midwest quantum community.
              </p>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
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
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
                <a
                  href={SCHEDULE_SHEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-vivid transition-opacity hover:opacity-80 sm:self-auto"
                >
                  View live schedule in Google Sheets
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              {/* Tentative Callout Banner */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs text-foreground/90">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-[11px]">
                  !
                </span>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Tentative working schedule:</strong> All session timings, room assignments, and workshop slots are preliminary and subject to change as sponsor challenges and logistical details are finalized. Refer to the live Google Sheet for real-time updates.
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
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Organized in collaboration across universities & organizations
              </h2>
              <p className="mt-3 text-muted-foreground">
                Student chapters, university partners, and regional computing organizations co-organizing MidQWest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {CHAPTERS.map((chapter, i) => {
                  const inner = (
                    <div
                      data-reveal
                      data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                      className="group flex h-full items-center gap-4 bg-card p-6 transition-colors hover:bg-muted/40 card-lift"
                    >
                      <ChapterLogo chapter={chapter} size={44} />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-sm font-semibold leading-snug text-foreground">
                          {chapter.university}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {chapter.org}
                        </p>
                      </div>
                      {chapter.website && (
                        <ExternalLink className="size-3.5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                      )}
                    </div>
                  );

                  return chapter.website ? (
                    <a
                      key={chapter.org}
                      href={chapter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={chapter.org}>{inner}</div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
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

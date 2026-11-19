import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlyerSection from "@/components/FlyerSection";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { WAITLIST_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About the Hackathon | MidQWest 2026",
  description:
    "Learn about MidQWest 2026, the premier student-led Midwest quantum hackathon at UIC Chicago. Discover our mission, 150–200 student builders, workshops, schedule, and FAQs.",
  keywords: [
    "About MidQWest",
    "Midwest Quantum Hackathon schedule",
    "UIC quantum hackathon location",
    "Midwest quantum hackathon",
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
      "MidQWest is a premier student-led quantum hackathon at UIC Chicago uniting 150–200 builders from top Midwest universities.",
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
      "MidQWest unites 150–200 student builders from top Midwest universities at UIC.",
    images: ["https://midqwest.dev/og-image-v2.png"],
    creator: "@midqwest",
  },
};

const EXPECT = [
  {
    num: "01",
    title: "Challenge 'Quests'",
    body: "Real-world challenge tracks designed with our industry sponsors, revealed live at kickoff with dedicated mentor support and prize pools.",
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
    a: "November 21–22, 2026 in Chicago. Check-in and opening events begin Saturday morning, followed by 24 hours of hacking, sponsor tech workshops, and Sunday project demos and awards.",
  },
  {
    q: "Where will it be held?",
    a: "Illinois Room, Student Center East (SCE), University of Illinois Chicago (UIC) campus on Chicago's Near West Side — centrally located and easily accessible for universities across the Midwest.",
  },
  {
    q: "Who can participate?",
    a: "150–200 undergraduate and graduate students from universities across the Midwest. There are no major restrictions — all interested students are welcome! No prior quantum computing experience is required.",
  },
  {
    q: "What are 'Quests'?",
    a: "Quests are hackathon challenge tracks designed with our industry partners and organizers. Full challenge prompts, datasets, and rubric criteria will be unveiled during opening ceremonies on Saturday morning.",
  },
  {
    q: "Is there a cost to participate?",
    a: "No. MidQWest is 100% free for all participating students. Sponsorship funding covers meals, venue operations, compute credits, and prize pools.",
  },
  {
    q: "How are teams formed?",
    a: "Students work in teams of 2–5 to tackle hackathon challenges. You can register with a pre-formed team or join our team-matching sessions on Discord and on-site at the event. Solo builders are warmly welcomed!",
  },
  {
    q: "What hardware and software will be available?",
    a: "Participants receive access to cloud quantum compute hardware and advanced simulation platforms through our technology partners, including IBM cloud compute access, BlueQubit simulation tools, and open-source SDKs like Qiskit.",
  },
  {
    q: "Want your university or company involved?",
    a: "If your university quantum club wants to bring a student delegation, visit our Organizers page. If your company wants to sponsor challenge tracks and mentor students, explore our Sponsors page.",
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
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] leading-[1.1]">
                About the Midwest Quantum Hackathon
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                The Midwest Quantum Hackathon, or <strong className="font-semibold text-foreground">MidQWest</strong> for short, is a premier student-led initiative targeting quantum workforce development in Chicago and the broader Midwest as the region pushes to become a leading hub for quantum technologies.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                Hosted at the University of Illinois Chicago (UIC) campus over the weekend of November 21–22, 2026, MidQWest brings together 150–200 students to collaborate in teams, learn from industry experts, and apply quantum information science to solve challenge &ldquo;quests.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Purpose Pillars */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <div className="max-w-3xl">
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
                    Career &amp; Skill Development
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
                      Organized in collaboration with the region’s top student quantum organizations, MidQWest brings together students from top programs in Engineering, Physics, and Computer Science. The event serves as an ideal venue for companies and national labs to mentor builders and recruit top talent.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/sponsor"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-vivid-foreground transition-all hover:opacity-90"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
                        boxShadow: "0 2px 12px oklch(0.58 0.24 258 / 0.25)",
                      }}
                    >
                      Sponsor &amp; Recruit
                    </Link>
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
                Everything you need to know about the 24-hour hackathon experience.
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

        {/* Schedule Callout */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-16">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:p-10 card-lift">
                <div className="max-w-2xl">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                    24-hour hackathon timeline &amp; itinerary
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Check out the complete hour-by-hour schedule at UIC Chicago, from Saturday morning registration and sponsor tech workshops to Sunday project demos, judging expo, and awards.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/schedule" className="inline-flex items-center gap-2">
                      View full schedule
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Coalition & Organizers Bridge */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-16">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:p-10 card-lift">
                <div className="max-w-2xl">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                    Organized by a Midwest student coalition
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    MidQWest is 100% student-organized across 6 university clubs and organizations (UIC, UIUC, UChicago, Purdue, UW-Madison, PNW) with faculty guidance from UIC ECE and regional partnership from Chicago Quantum Exchange (CQE) and Chicago WHPC.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="/organizers" className="inline-flex items-center gap-2">
                      Meet the organizers &amp; clubs
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Official Flyer Section */}
        <FlyerSection />

        {/* FAQs */}
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Frequently Asked Questions
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

        {/* Apply CTA */}
        <section className="bg-gradient-to-b from-card via-muted/20 to-background">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-20 md:py-24 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build with quantum computing?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed">
                Applications are open and 100% free for all undergraduate and graduate students across the Midwest. Secure your spot today!
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                    Apply now
                    <ArrowRight className="size-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/schedule">
                    View weekend schedule
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
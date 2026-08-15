import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship & Partnerships",
  description:
    "Partner with MidQWest 2026 to connect with top CS, physics, and engineering students across the Midwest. Explore tiers, perks, and hardware partner opportunities.",
  alternates: {
    canonical: "/sponsor",
  },
  openGraph: {
    title: "Sponsor MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Support regional quantum innovation. Connect with top talent from UIUC, UChicago, Purdue, UIC, and UW-Madison.",
    url: "/sponsor",
  },
  twitter: {
    title: "Sponsor MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Support regional quantum innovation and connect with top Midwest quantum engineering talent.",
  },
};

export default function SponsorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

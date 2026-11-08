import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship & Partnerships",
  description:
    "Partner with MidQWest 2026 to connect with top CS, physics, and engineering students across the Midwest. Explore tiers, perks, and hardware partner opportunities.",
  keywords: [
    "Sponsor MidQWest",
    "MidQWest sponsorship tiers",
    "quantum hackathon sponsor",
    "recruit quantum computing talent",
    "Midwest quantum workforce recruiting",
    "quantum computing internships fall",
    "Chicago quantum event sponsor",
    "top physics CS engineering talent Midwest",
  ],
  alternates: {
    canonical: "/sponsor",
  },
  openGraph: {
    title: "Sponsor MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Support regional quantum innovation. Connect with top talent from UIUC, UChicago, Purdue, UIC, and UW-Madison.",
    url: "https://midqwest.dev/sponsor",
    siteName: "MidQWest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Sponsor MidQWest 2026 — Midwest Quantum Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Support regional quantum innovation and connect with top Midwest quantum engineering talent.",
    images: ["https://midqwest.dev/og-image-v2.png"],
    creator: "@midqwest",
  },
};

export default function SponsorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: "Sponsors",
        item: "https://midqwest.dev/sponsor",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

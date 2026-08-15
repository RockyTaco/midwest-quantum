import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midqwest.dev"),
  title: {
    default: "MidQWest 2026 — Midwest Quantum Hackathon",
    template: "%s | MidQWest 2026",
  },
  description:
    "MidQWest is the premier Midwest quantum computing hackathon hosted at UIC Chicago on November 14–15, 2026. Organized by student leaders from UIUC, UChicago, Purdue, UIC, and UW-Madison.",
  applicationName: "MidQWest",
  authors: [{ name: "MidQWest Organizing Team", url: "https://midqwest.dev" }],
  generator: "Next.js",
  keywords: [
    "MidQWest",
    "MidQWest 2026",
    "Midwest Quantum Hackathon",
    "MQH",
    "quantum hackathon",
    "quantum computing hackathon",
    "Chicago quantum hackathon",
    "student quantum hackathon",
    "Purdue quantum",
    "UIUC quantum",
    "UChicago quantum",
    "UIC quantum",
    "UW Madison quantum",
    "quantum workforce",
    "quantum algorithms",
    "quantum computing competition",
  ],
  referrer: "origin-when-cross-origin",
  creator: "MidQWest Organizers",
  publisher: "MidQWest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "Join top Midwest undergraduates in Chicago on Nov 14–15, 2026 for 24+ hours of quantum computing challenges, workshops, and industry networking.",
    url: "https://midqwest.dev",
    siteName: "MidQWest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MidQWest 2026 — Midwest Quantum Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MidQWest 2026 — Midwest Quantum Hackathon",
    description:
      "The premier Midwest quantum computing hackathon. Nov 14–15, 2026 at UIC Chicago. Free for all students.",
    images: ["/og-image.png"],
    creator: "@midqwest",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${ibmPlexSans.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}


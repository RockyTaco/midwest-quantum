import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MidQWest 2026 — Midwest Quantum Hackathon",
    short_name: "MidQWest",
    description:
      "A student-led quantum computing hackathon organized across Midwest universities, hosted in Chicago on November 14–15, 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a2530",
    icons: [
      {
        src: "/icon.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
  };
}

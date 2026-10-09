export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://midqwest.dev/#website",
        "url": "https://midqwest.dev",
        "name": "MidQWest",
        "alternateName": [
          "MidQWest 2026",
          "Midwest Quantum Hackathon",
          "MQH"
        ],
        "description": "The premier Midwest quantum computing hackathon organized by student leaders from UIUC, UChicago, Purdue, Purdue Northwest, UIC, and UW-Madison.",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://midqwest.dev/#organization",
        "name": "MidQWest",
        "alternateName": "Midwest Quantum Hackathon Organizers",
        "url": "https://midqwest.dev",
        "logo": "https://midqwest.dev/MQW_light_grad_black.png",
        "sameAs": [
          "https://sigquantum.com",
          "https://qsopurdue.org",
          "https://ucquantum.com",
          "https://wqi.wisc.edu/wqcc/",
          "https://mypnwlife.pnw.edu/quantumleap/home/"
        ]
      },
      {
        "@type": "Event",
        "@id": "https://midqwest.dev/#event",
        "name": "MidQWest 2026 — Midwest Quantum Hackathon",
        "description": "A premier student-led quantum computing hackathon in Chicago bringing together top undergraduate and graduate talent from universities across the Midwest for quests, workshops, and industry networking.",
        "startDate": "2026-11-21T09:00:00-06:00",
        "endDate": "2026-11-22T18:00:00-06:00",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": "University of Illinois Chicago (UIC) Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60607",
            "addressCountry": "US"
          }
        },
        "image": [
          "https://midqwest.dev/og-image.png",
          "https://midqwest.dev/MQW_light_grad_black.png"
        ],
        "organizer": {
          "@type": "Organization",
          "name": "MidQWest Organizing Chapters",
          "url": "https://midqwest.dev"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://midqwest.dev",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01T00:00:00-06:00"
        },
        "isAccessibleForFree": true,
        "typicalAgeRange": "18-26"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

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
          "MQH",
          "MidQWest Quantum Hackathon"
        ],
        "description": "The premier Midwest quantum computing hackathon organized with the Chicago Quantum Exchange, Chicago Women in HPC, and student leaders from UIUC, UChicago, Purdue, Purdue Northwest, UIC, and UW-Madison.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://midqwest.dev/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://midqwest.dev/#organization",
        "name": "MidQWest",
        "alternateName": "Midwest Quantum Hackathon Organizers",
        "url": "https://midqwest.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://midqwest.dev/MQW_light_grad_black.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://sigquantum.com",
          "https://qsopurdue.org",
          "https://ucquantum.com",
          "https://wqi.wisc.edu/wqcc/",
          "https://mypnwlife.pnw.edu/quantumleap/home/",
          "https://www.chicagowhpc.org",
          "https://chicagoquantum.org"
        ],
        "subOrganization": [
          { "@type": "Organization", "name": "Quantum Student Organization (QSO) at Purdue", "url": "https://qsopurdue.org" },
          { "@type": "Organization", "name": "ACM SIGQuantum at UIUC", "url": "https://sigquantum.com" },
          { "@type": "Organization", "name": "UC Quantum at UChicago", "url": "https://ucquantum.com" },
          { "@type": "Organization", "name": "Wisconsin Quantum Computing Club (WQCC) at UW-Madison", "url": "https://wqi.wisc.edu/wqcc/" },
          { "@type": "Organization", "name": "QuantumLeap Club at Purdue Northwest", "url": "https://mypnwlife.pnw.edu/quantumleap/home/" },
          { "@type": "Organization", "name": "UIC Quantum", "url": "https://midqwest.dev" },
          { "@type": "Organization", "name": "Chicago Women in High Performance Computing (WHPC)", "url": "https://www.chicagowhpc.org" },
          { "@type": "Organization", "name": "Chicago Quantum Exchange (CQE)", "url": "https://chicagoquantum.org" }
        ]
      },
      {
        "@type": "Event",
        "@id": "https://midqwest.dev/#event",
        "name": "MidQWest 2026 — Midwest Quantum Hackathon",
        "alternateName": "MidQWest 2026",
        "description": "A premier student-led quantum computing hackathon in Chicago bringing together 150–200 top undergraduate and graduate student builders from Midwest universities to collaborate on quantum quests, attend workshops, and advance regional quantum workforce development.",
        "startDate": "2026-11-21T08:00:00-06:00",
        "endDate": "2026-11-22T17:30:00-06:00",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": "University of Illinois Chicago (UIC) Campus — Student Center East",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "750 S Halsted St",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60607",
            "addressCountry": "US"
          }
        },
        "image": [
          "https://midqwest.dev/og-image-v2.png",
          "https://midqwest.dev/MQW_light_grad_black.png"
        ],
        "organizer": {
          "@id": "https://midqwest.dev/#organization"
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
        "typicalAgeRange": "18-28",
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "Undergraduate and Graduate Students in STEM, Physics, Computer Science, and Engineering"
        },
        "about": [
          { "@type": "Thing", "name": "Quantum Computing" },
          { "@type": "Thing", "name": "Quantum Information Science and Engineering" },
          { "@type": "Thing", "name": "Quantum Algorithms" },
          { "@type": "Thing", "name": "Quantum Workforce Development" },
          { "@type": "Thing", "name": "Year of Illinois Quantum" }
        ]
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

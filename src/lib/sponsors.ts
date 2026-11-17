export interface Sponsor {
  name: string;
  role: "Sponsor & Challenge Partner" | "Cloud Compute Partner";
  tier?: string;
  logo: string;
  url: string;
  description: string;
  trademarkNotice?: string;
  logoWrapperClass?: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: "Northrop Grumman",
    role: "Sponsor & Challenge Partner",
    logo: "/images/northrop_grumman_official.png",
    url: "https://www.northropgrumman.com/",
    logoWrapperClass: "h-10 w-44",
    description:
      "Global aerospace, defense, and quantum technology innovator sponsoring real-world challenge quests and mentoring student teams.",
  },
  {
    name: "Infleqtion",
    role: "Sponsor & Challenge Partner",
    logo: "/images/infleqtion_official.svg",
    url: "https://www.infleqtion.com/",
    logoWrapperClass: "h-9 w-40",
    description:
      "Quantum information company developing neutral atom quantum computing, RF sensing, and quantum software tools.",
  },
  {
    name: "BlueQubit",
    role: "Sponsor & Challenge Partner",
    logo: "/images/bluequbit_official.svg",
    url: "https://www.bluequbit.io/",
    logoWrapperClass: "h-9 w-44",
    description:
      "Frontier quantum software and simulation platform empowering developers to build and test high-performance quantum algorithms.",
  },
  {
    name: "IBM",
    role: "Cloud Compute Partner",
    logo: "/images/ibm_official.png",
    url: "https://www.ibm.com/",
    logoWrapperClass: "h-14 w-36",
    description:
      "Official cloud quantum compute partner providing access to quantum hardware and Qiskit resources for hackathon participants.",
    trademarkNotice:
      "IBM and the IBM logo are trademarks of International Business Machines Corp., registered in many jurisdictions worldwide.",
  },
];

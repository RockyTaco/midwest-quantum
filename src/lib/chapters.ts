export interface Chapter {
  university: string;
  org?: string;
  /** Path to a logo in /public, if one is available. */
  logo?: string;
  /** Fallback initials shown when no logo file exists. */
  monogram: string;
  website?: string;
  description?: string;
  role?: "Host Institution" | "Founding Chapter" | "Regional Partner";
}

export const CHAPTERS: Chapter[] = [
  {
    university: "University of Illinois Chicago",
    org: "UIC Quantum Club",
    monogram: "UIC",
    role: "Host Institution",
    website: "https://midqwest.dev",
    description:
      "Host campus student chapter spearheading MidQWest 2026 at UIC, bridging Chicago's premier public research university with the regional quantum corridor.",
  },
  {
    university: "University of Illinois Urbana-Champaign",
    org: "SIGQuantum @ UIUC",
    logo: "/images/sigquantum_logo.png",
    monogram: "UIUC",
    role: "Founding Chapter",
    website: "https://sigquantum.com",
    description:
      "One of the nation's premier student-led quantum computing organizations, hosting technical workshops, quantum software hackathons, and research projects.",
  },
  {
    university: "Purdue University",
    org: "Quantum Student Organization (QSO)",
    logo: "/images/qso_logo.png",
    monogram: "QSO",
    role: "Founding Chapter",
    website: "https://qsopurdue.org",
    description:
      "Uniting Boilermakers across physics, CS, and engineering to build quantum algorithms, simulate physical systems, and foster collegiate research.",
  },
  {
    university: "University of Chicago",
    org: "UChicago Quantum Society",
    logo: "/images/ucq_logo.jpg",
    monogram: "UCQ",
    role: "Founding Chapter",
    website: "https://ucquantum.com",
    description:
      "Connecting undergraduate and graduate students with world-class quantum research across UChicago, the Pritzker School of Molecular Engineering, and national labs.",
  },
  {
    university: "University of Wisconsin–Madison",
    org: "Wisconsin Quantum Computing Club (WQCC)",
    logo: "/images/wqcc_logo.png",
    monogram: "UW",
    role: "Founding Chapter",
    website: "https://wqi.wisc.edu/wqcc/",
    description:
      "Empowering students across disciplines to explore quantum algorithms, hardware architectures, and collaborative open-source quantum software.",
  },
  {
    university: "Purdue University Northwest",
    org: "QuantumLeap Club",
    logo: "/images/quantumleap_logo.png",
    monogram: "PNW",
    role: "Founding Chapter",
    website: "https://mypnwlife.pnw.edu/quantumleap/home/",
    description:
      "Purdue Northwest's quantum student society advancing hands-on quantum circuit simulation, community workshops, and industry career pathways.",
  },
  {
    university: "Chicago Women in High Performance Computing",
    org: "Chicago WHPC Chapter",
    logo: "/images/whpc_logo.png",
    monogram: "WHPC",
    role: "Regional Partner",
    website: "https://www.chicagowhpc.org",
    description:
      "Fostering collaboration, networking, and mentorship for women and underrepresented groups across high-performance computing and quantum science.",
  },
  {
    university: "Chicago Quantum Exchange",
    org: "Regional Quantum Hub (CQE)",
    logo: "/images/cqe_logo.png",
    monogram: "CQE",
    role: "Regional Partner",
    website: "https://chicagoquantum.org",
    description:
      "The premier Midwest quantum hub connecting universities, national laboratories (Argonne, Fermilab), and industry to accelerate regional quantum innovation.",
  },
];

export interface LeadershipMember {
  name: string;
  role: string;
  school: string;
  linkedin?: string;
  website?: string;
}

export const STUDENT_DIRECTORS: LeadershipMember[] = [
  {
    name: "Ryan Manley",
    role: "Co-Founder & Lead Organizer",
    school: "University of Illinois Chicago",
    website: "https://ryanymanley.com",
  },
  {
    name: "Rohit Mandapati",
    role: "Co-Founder & Operations Lead",
    school: "University of Illinois Chicago",
    linkedin: "https://www.linkedin.com/in/rohitmandapati/",
  },
  {
    name: "River Chen",
    role: "Co-Founder & Hackathon Experience Lead",
    school: "University of Chicago",
    linkedin: "https://www.linkedin.com/in/river-chen",
  },
];

export interface FacultyAdvisor {
  name: string;
  title: string;
  department: string;
  institution: string;
  bio: string;
  profileUrl?: string;
}

export const FACULTY_ADVISOR: FacultyAdvisor = {
  name: "Dr. Zizwe Chase",
  title: "Assistant Professor",
  department: "Department of Electrical and Computer Engineering",
  institution: "University of Illinois Chicago (UIC)",
  bio: "Assistant Professor of Electrical and Computer Engineering at UIC whose research explores quantum hardware, nanophotonics, and quantum information science. Dr. Chase provides faculty sponsorship, academic guidance, and institutional leadership for MidQWest.",
  profileUrl: "https://ece.uic.edu/",
};

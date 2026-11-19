export interface Chapter {
  university: string;
  org?: string;
  /** Path to a logo in /public, if one is available. */
  logo?: string;
  /** Fallback initials shown when no logo file exists. */
  monogram: string;
  website?: string;
  description?: string;
  role?: "Host Institution" | "Founding Organization" | "Regional Partner";
}

export const CHAPTERS: Chapter[] = [
  {
    university: "University of Illinois Chicago",
    org: "UIC Quantum Club",
    monogram: "UIC",
    logo: "/images/uic_quantum_club_mark.png",
    role: "Host Institution",
    website: "https://midqwest.dev",
    description:
      "Host campus student club spearheading MidQWest 2026 at UIC, bridging Chicago's premier public research university with the regional quantum corridor.",
  },
  {
    university: "University of Illinois Urbana-Champaign",
    org: "SIGQuantum @ UIUC",
    logo: "/images/sigquantum_logo.png",
    monogram: "UIUC",
    role: "Founding Organization",
    website: "https://sigquantum.com",
    description:
      "One of the nation's premier student-led quantum computing organizations, hosting technical workshops, quantum software hackathons, and research projects.",
  },
  {
    university: "Purdue University",
    org: "Quantum Student Organization (QSO)",
    logo: "/images/qso_logo.png",
    monogram: "QSO",
    role: "Founding Organization",
    website: "https://qsopurdue.org",
    description:
      "Uniting Boilermakers across physics, CS, and engineering to build quantum algorithms, simulate physical systems, and foster collegiate research.",
  },
  {
    university: "University of Chicago",
    org: "UChicago Quantum Society",
    logo: "/images/ucq_logo.jpg",
    monogram: "UCQ",
    role: "Founding Organization",
    website: "https://ucquantum.com",
    description:
      "Connecting undergraduate and graduate students with world-class quantum research across UChicago, the Pritzker School of Molecular Engineering, and national labs.",
  },
  {
    university: "University of Wisconsin–Madison",
    org: "Wisconsin Quantum Computing Club (WQCC)",
    logo: "/images/wqcc_logo.png",
    monogram: "UW",
    role: "Founding Organization",
    website: "https://wqi.wisc.edu/wqcc/",
    description:
      "Empowering students across disciplines to explore quantum algorithms, hardware architectures, and collaborative open-source quantum software.",
  },
  {
    university: "Purdue University Northwest",
    org: "QuantumLeap Club",
    logo: "/images/quantumleap_logo.png",
    monogram: "PNW",
    role: "Founding Organization",
    website: "https://mypnwlife.pnw.edu/quantumleap/home/",
    description:
      "Purdue Northwest's quantum student society advancing hands-on quantum circuit simulation, community workshops, and industry career pathways.",
  },
  {
    university: "Chicago Women in High Performance Computing",
    org: "Chicago WHPC",
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
  role?: string;
  org: string;
  school: string;
  bio?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  email?: string;
}

export const STUDENT_ORGANIZERS: LeadershipMember[] = [
  {
    name: "River Chen",
    role: "Organizer",
    org: "SIGQuantum @ UIUC",
    school: "University of Illinois Urbana-Champaign",
    bio: "President of SIGQuantum at UIUC. Co-organizing all aspects of MidQWest, including hackathon experience, operations, and cross-university coalition building.",
    linkedin: "https://www.linkedin.com/in/river-chen",
  },
  {
    name: "Ryan Manley",
    role: "Organizer",
    org: "Quantum Student Organization (QSO)",
    school: "Purdue University",
    bio: "President of QSO at Purdue. Co-organizing all aspects of MidQWest, including web development, event logistics, sponsor coordination, and student outreach.",
    website: "https://ryanymanley.com",
  },
  {
    name: "Rohit Mandapati",
    role: "Organizer",
    org: "Argonne National Laboratory",
    school: "Boston University",
    bio: "Physics student at BU and researcher at Argonne who helped with web development.",
    linkedin: "https://www.linkedin.com/in/rohitmandapati/",
  },
  {
    name: "Ashe Francq",
    role: "Organizer",
    org: "UIC Quantum Club",
    school: "University of Illinois Chicago",
    bio: "UIC student organizer serving as communicator, representing the student body, and coordinating on-campus venue logistics.",
    email: "kfrancq2@uic.edu",
  },
  {
    name: "Srihas Pendekanti",
    role: "Organizer",
    org: "Social Media & Outreach",
    school: "University of Illinois Chicago",
    bio: "UIC student managing social media outreach and community engagement across Instagram and LinkedIn for MidQWest.",
    linkedin: "https://www.linkedin.com/in/srihas115/",
    github: "https://github.com/srihas115",
    email: "pgupt50@uic.edu",
  },
];

export const STUDENT_DIRECTORS = STUDENT_ORGANIZERS;

export interface InstitutionalAdvisor {
  name: string;
  title: string;
  department: string;
  institution: string;
  role: string;
  bio: string;
  profileUrl: string;
  profileLabel?: string;
  email?: string;
}

export const INSTITUTIONAL_ADVISORS: InstitutionalAdvisor[] = [
  {
    name: "Dr. Zizwe Chase",
    title: "Assistant Professor",
    department: "Department of Electrical and Computer Engineering",
    institution: "University of Illinois Chicago",
    role: "Faculty Sponsor & Academic Guidance",
    bio: "Assistant Professor of ECE at UIC researching quantum hardware, nanophotonics, and quantum information science. Serving as faculty sponsor and academic advisor for MidQWest.",
    profileUrl: "https://ece.uic.edu/profiles/chase-zizwe/",
    profileLabel: "UIC Faculty Profile",
  },
  {
    name: "Dr. Ana Marija Sokovic",
    title: "Lead Computational Scientist & Chair, WHPC",
    department: "Applied Psychology (APAC) / ACER",
    institution: "University of Illinois Chicago",
    role: "Faculty Leadership & Computing Advisor",
    bio: "Lead Computational Scientist at UIC and Chair of Chicago WHPC, providing institutional leadership and advising on advanced computing and regional ecosystem connections.",
    profileUrl: "https://apac.uic.edu/profiles/sokovic-ana/",
    profileLabel: "UIC Profile",
  },
  {
    name: "Brian Brookey",
    title: "Executive Director of Development",
    department: "College of Engineering",
    institution: "University of Illinois Chicago",
    role: "Event Financial Administration",
    bio: "Handling event financial administration and institutional development through the UIC College of Engineering.",
    profileUrl: "https://engineering.uic.edu/",
    profileLabel: "UIC College of Engineering",
  },
  {
    name: "Nicholas Kinney",
    title: "Director of Development",
    department: "College of Engineering",
    institution: "University of Illinois Chicago",
    role: "Event Financial Administration",
    bio: "Handling event financial administration and institutional development through the UIC College of Engineering.",
    profileUrl: "https://engineering.uic.edu/",
    profileLabel: "UIC College of Engineering",
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
  profileUrl: "https://ece.uic.edu/profiles/chase-zizwe/",
};

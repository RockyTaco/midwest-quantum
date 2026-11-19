export interface ScheduleEvent {
  time: string;
  activity: string;
  location?: string;
  details?: string;
  highlight?: boolean;
  category?: "Ceremony" | "Hacking" | "Workshop" | "Meal" | "Judging" | "Social";
}

export interface ScheduleDay {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

export const SCHEDULE: ScheduleDay[] = [
  {
    day: "Saturday",
    date: "November 21, 2026",
    events: [
      {
        time: "8:00 AM – 9:15 AM",
        activity: "Registration & Check-In",
        location: "Fort Dearborn A",
        details: "Participant check-in, attendance logging, swag pick-up, and nametag distribution.",
        category: "Ceremony",
      },
      {
        time: "8:00 AM – 9:00 AM",
        activity: "Sponsor Tabling & Early Networking",
        location: "IL C",
        details: "Early opportunity to meet company representatives, explore quantum technologies, and connect with mentors at sponsor booths.",
        category: "Social",
      },
      {
        time: "9:00 AM – 9:15 AM",
        activity: "Opening Remarks & Welcome Address",
        location: "IL AB",
        details: "Official welcome address from the MidQWest student organizing team and university partners.",
        category: "Ceremony",
      },
      {
        time: "9:15 AM – 9:30 AM",
        activity: "Challenge Tracks & Team Rosters Released",
        location: "IL AB",
        details: "Overview of quest tracks and live team assignment release via QR code and Discord channels.",
        category: "Ceremony",
      },
      {
        time: "9:30 AM – 12:00 PM",
        activity: "Sponsor Tech Talks & Developer Workshops",
        location: "IL AB",
        details: "Hands-on technical deep dives, cloud hardware and SDK tooling walkthroughs, and challenge preparation sessions led by sponsor engineers.",
        category: "Workshop",
      },
      {
        time: "12:00 PM – 1:15 PM",
        activity: "Catered Lunch & Final Team Confirmations",
        location: "Fort Dearborn A",
        details: "Catered lunch for all participants. (1:15 PM is the hard deadline to confirm finalized team rosters).",
        category: "Meal",
      },
      {
        time: "1:15 PM – 2:00 PM",
        activity: "Hackathon Challenges & Prompts Officially Revealed",
        location: "IL AB",
        details: "Sponsors officially release problem statements, datasets, and rubric criteria. Teams assemble in work zones.",
        category: "Ceremony",
      },
      {
        time: "2:00 PM",
        activity: "24-Hour Hackathon Sprint Begins!",
        location: "IL AB & Hacker Spaces",
        details: "The 24-hour hacking countdown starts! Student teams build quantum algorithms, simulators, and applications with live sponsor mentorship.",
        highlight: true,
        category: "Hacking",
      },
      {
        time: "5:00 PM – 6:00 PM",
        activity: "Social Break & Mentor Networking",
        location: "Main Concourse",
        details: "Afternoon break with snacks, mentor office hours, and student club networking.",
        category: "Social",
      },
      {
        time: "Evening & Overnight",
        activity: "Overnight Hacking & Virtual Mentor Helpdesk",
        location: "Hacker Zones & Discord",
        details: "Continued hacking sprints with snack stations and round-the-clock technical support from mentors on Discord.",
        category: "Hacking",
      },
    ],
  },
  {
    day: "Sunday",
    date: "November 22, 2026",
    events: [
      {
        time: "8:00 AM – 9:00 AM",
        activity: "Breakfast & Morning Coffee",
        location: "Fort Dearborn A",
        details: "Morning fuel, coffee, and sprint progress check-ins with team members.",
        category: "Meal",
      },
      {
        time: "12:00 PM – 1:30 PM",
        activity: "Food Trucks (Brunch / Lunch)",
        location: "Outside Student Center East",
        details: "On-site food trucks to keep hackers energized for final submission polishing.",
        category: "Meal",
      },
      {
        time: "2:00 PM",
        activity: "Code Freeze & Submission Deadline",
        location: "IL AB",
        details: "The 24-hour hacking timer ends — all code, repositories, slides, and project writeups must be submitted.",
        highlight: true,
        category: "Hacking",
      },
      {
        time: "2:00 PM – 4:00 PM",
        activity: "Project Demos & Judging Expo",
        location: "Dearborn B",
        details: "Science-fair style expo where student teams pitch and demo their solutions to industry and academic judges.",
        category: "Judging",
      },
      {
        time: "4:00 PM – 4:30 PM",
        activity: "Awards Ceremony & Winner Announcements",
        location: "IL AB",
        details: "Official closing ceremony, track winners revealed, prize awards, and celebration of student achievements.",
        highlight: true,
        category: "Ceremony",
      },
      {
        time: "4:30 PM – 5:00 PM",
        activity: "Sponsor Farewell & Team Photos",
        location: "IL C & Concourse",
        details: "Final conversations with sponsors, group photos, and farewells.",
        category: "Social",
      },
      {
        time: "5:00 PM",
        activity: "MidQWest 2026 Concludes",
        location: "UIC Campus",
        details: "Official conclusion of the Midwest Quantum Hackathon.",
        category: "Ceremony",
      },
    ],
  },
];

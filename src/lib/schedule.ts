export interface SubScheduleItem {
  time: string;
  sponsor: string;
  note?: string;
}

export interface ScheduleEvent {
  time: string;
  activity: string;
  location?: string;
  details?: string;
  highlight?: boolean;
  category?: "Talk" | "Hacking" | "Workshop" | "Meal" | "Judging" | "Social" | "Check-In" | "General";
  subSchedule?: SubScheduleItem[];
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
        activity: "Check-In",
        location: "Fort Dearborn A",
        details: "Participant check-in, attendance logging, swag pick-up, and nametag distribution.",
        category: "Check-In",
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
        activity: "Opening Remarks & Welcome Talk",
        location: "IL AB",
        details: "Official welcome address from MidQWest student organizers alongside remarks by Dr. Ana Marija Sokovic (Lead Computational Scientist at UIC & Chair, Chicago WHPC).",
        category: "Talk",
      },
      {
        time: "9:15 AM – 9:30 AM",
        activity: "Keynote Talk: CCMC Global",
        location: "IL AB",
        details: "Keynote presentation by Caleb Williams (CTO & Co-Founder) and Mario (CEO & Co-Founder) of CCMC Global on quantum startup entrepreneurship and deep-tech innovation in Chicago. Track descriptions released via Discord.",
        category: "Talk",
      },
      {
        time: "9:30 AM – 12:00 PM",
        activity: "Sponsor Talks",
        location: "IL AB",
        details: "45-minute company introductions and challenge quest briefings by sponsor engineering teams, with 5-minute buffer and Q&A.",
        category: "Talk",
        subSchedule: [
          {
            time: "9:30 AM – 10:15 AM",
            sponsor: "Northrop Grumman",
            note: "5 min buffer and Q&A",
          },
          {
            time: "10:20 AM – 11:05 AM",
            sponsor: "Infleqtion",
            note: "5 min buffer and Q&A",
          },
          {
            time: "11:10 AM – 11:55 AM",
            sponsor: "BlueQubit",
            note: "5 min buffer and Q&A",
          },
        ],
      },
      {
        time: "12:00 PM – 1:15 PM",
        activity: "Catered Lunch & Final Team Confirmations",
        location: "Fort Dearborn A",
        details: "Catered lunch for all participants. (1:15 PM is the hard deadline to confirm finalized team rosters).",
        category: "Meal",
      },
      {
        time: "1:15 PM – 1:30 PM",
        activity: "Keynote Talk: Andrew Lytle (IQMP)",
        location: "IL AB",
        details: "Featured keynote presentation by Andrew Lytle from the Illinois Quantum Information Science and Technology Center (IQMP).",
        category: "Talk",
      },
      {
        time: "1:30 PM – 2:00 PM",
        activity: "Hackathon Challenges & Prompts Revealed",
        location: "IL AB",
        details: "Sponsors officially release problem statements, datasets, and rubric criteria. Teams assemble throughout venue ahead of the 2:00 PM sprint launch.",
        category: "Talk",
      },
      {
        time: "2:00 PM",
        activity: "24-Hour Hackathon Sprint Begins!",
        location: "IL AB & throughout venue",
        details: "The 24-hour hacking countdown starts! Student teams build quantum algorithms, simulators, and applications with live sponsor mentorship.",
        highlight: true,
        category: "Hacking",
      },
      {
        time: "5:00 PM – 6:00 PM",
        activity: "Social Break & Mentor Networking",
        location: "Main Concourse",
        details: "Afternoon break, mentor office hours, and student club networking.",
        category: "Social",
      },
      {
        time: "Evening & Overnight",
        activity: "Overnight Hacking & Virtual Mentor Helpdesk",
        location: "Throughout venue & Discord",
        details: "Continued hacking sprints and round-the-clock technical support from mentors on Discord.",
        category: "Hacking",
      },
    ],
  },
  {
    day: "Sunday",
    date: "November 22, 2026",
    events: [
      {
        time: "8:30 AM – 10:30 AM",
        activity: "Catered Breakfast, Brunch & Morning Coffee",
        location: "Fort Dearborn A",
        details: "Catered breakfast and brunch spread with fresh morning coffee to fuel teams for the final hacking stretch.",
        category: "Meal",
      },
      {
        time: "12:00 PM – 1:00 PM",
        activity: "Midday Coffee & Final Sprint Prep",
        location: "Fort Dearborn A & throughout venue",
        details: "Morning coffee refresh and quick energy fuel as teams polish their code and demo decks ahead of the 2:00 PM code freeze.",
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
        activity: "Closing Talk & Awards",
        location: "IL AB",
        details: "Closing remarks, track winners revealed, prize awards, and celebration of student achievements.",
        highlight: true,
        category: "Talk",
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
        category: "General",
      },
    ],
  },
];

export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Drop a file in /public/committee/ and set e.g. "/committee/alex.jpg" */
  image: string | null;
};

export type EventItem = {
  id: string;
  title: string;
  /** Display date/time string shown on the page */
  date: string;
  /**
   * When this event should move to Past (ISO 8601).
   * Use Australia/Perth local time with +08:00 offset.
   * For multi-day series, use the end of the last session.
   */
  endsAt: string;
  location: string;
  description: string;
  /** Drop a file in /public/events/ and set e.g. "/events/dj-sessions.jpg" */
  poster: string | null;
  ticketUrl?: string;
};

export const club = {
  name: "Tonedeaf",
  tagline: "ECU's DJ, electronic music & event production club",
  about:
    "Tonedeaf fosters a vibrant community for ECU students passionate about DJing, electronic music, and event production. We organise events such as music events at nightclubs, bars and pubs, open-deck nights, and DJ showcases, plus workshops during the week to learn more about the art of DJing.",
  instagram: "https://www.instagram.com/tonedeaf_ecu/",
  tickets: "https://www.trybooking.com/events/landing/1609932",
  email: "tonedeaf.ecu@gmail.com",
  location: "ECU City Campus, 500 Wellington St, Perth WA 6000",
};

export const committee: Person[] = [
  {
    id: "president",
    name: "Max Van Zutphen (MAZE)",
    role: "Club President",
    bio: "Bio coming soon. Swap this copy and add a photo when you're ready.",
    image: "/committee/max-van-zutphen.JPG",
  },
  {
    id: "dj-1",
    name: "Dante Rives",
    role: "DJ, Music Producer, Photographer, Videographer",
    bio: "Passionate about music, DJing, production and media, Dante is a long time creative. Currently 24 years old and learning all about music and media from the age of 15, his over 9 years of experience helps him in being confident in what he loves, creating and performing music for people to feel something and enjoy, as well as captuing life's most special moments to look back on for other people. He helps Tonedeaf by teaching newcomers how to DJ and produce music, as well as helping organise events and performing at them as well.",
    image: "/committee/dante-rives.JPEG",
  },
  {
    id: "dj-2",
    name: "Utkarsh Singh (KATO)",
    role: "DJ",
    bio: "Bio coming soon. Genre, vibe, and favourite sets go here.",
    image: "/committee/utkarsh-singh.JPG",
  },
  {
    id: "dj-3",
    name: "Name TBD",
    role: "DJ",
    bio: "Bio coming soon. Genre, vibe, and favourite sets go here.",
    image: null,
  },
];

/** All events live in one list — the site sorts them into Upcoming / Past from `endsAt`. */
export const events: EventItem[] = [
  {
    id: "start-of-semester-party",
    title: "Start of Semester Party",
    date: "Friday 7 August 2026 · 6:30PM – 10:30PM",
    endsAt: "2026-08-07T22:30:00+08:00",
    location: "Birra Bar, ECU Joondalup",
    description: "ECU Student Guild presents — $5 tickets.",
    poster: "/events/start-of-semester-party.JPG",
    ticketUrl: "https://events.humanitix.com/start-of-semester-party-x4wr93k5",
  },
  {
    id: "asylum-takeover",
    title: "Tonedeaf x Asylum Takeover",
    date: "Friday 14 August 2026 · 9PM – 3AM",
    endsAt: "2026-08-15T03:00:00+08:00",
    location: "Paramount Nightclub, 163 James St, Northbridge",
    description: "Garage · House · Techno.",
    poster: "/events/asylum-takeover.PNG",
    ticketUrl:
      "https://tally.so/r/WOPL6P?fbclid=IwdGRleATVOUhjbGNrBNAgqGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHq7NtyQJxwq0-XUK3dSNjxnZVS13KcW_VX7UrkO9LgAq8KC4-SoKBYPq25m5_aem_VTWhmO6G6vkfz5_PHEmMDQ",
  },
  {
    id: "dj-workshop-open-day",
    title: "Tonedeaf DJ Workshop",
    date: "9 August 2028 · ECU Open Day",
    endsAt: "2028-08-09T23:59:59+08:00",
    location: "CreatorsLAB, Ground Floor, ECU City",
    description: "Get on the decks and learn how to DJ.",
    poster: "/events/dj-workshop-open-day.PNG",
  },
  {
    id: "orientation-celebration",
    title: "Orientation Celebration",
    date: "23 July 2026 · 2:00PM – 4:00PM",
    endsAt: "2026-07-23T16:00:00+08:00",
    location: "Birra Bar, ECU Joondalup",
    description:
      "Kick off your university journey — pool, peer leaders, and drinks on us.",
    poster: "/events/orientation-celebration.PNG",
  },
  {
    id: "dj-workshops",
    title: "DJ Workshops",
    date: "3 July · 17 July · 31 July 2026 · 2:00PM – 4:00PM",
    endsAt: "2026-07-31T16:00:00+08:00",
    location: "CreatorsLAB, Ground Floor, ECU City",
    description: "Get on the decks and learn how to DJ with Tonedeaf.",
    poster: "/events/dj-workshops.JPG",
  },
  {
    id: "student-night",
    title: "Tonedeaf Wednesdays — Student Night",
    date: "Wednesday 6 May 2026 · 6:00PM",
    endsAt: "2026-05-06T23:59:59+08:00",
    location: "Chambers Room, The Court, Perth",
    description:
      "House, techno, UKG, drum & bass, dubstep, and more — featuring ECU DJs.",
    poster: "/events/student-night.JPG",
  },
];

function endsAtTime(event: EventItem) {
  return new Date(event.endsAt).getTime();
}

/** Upcoming first, soonest end time first. */
export function getUpcomingEvents(now = new Date()): EventItem[] {
  const t = now.getTime();
  return events
    .filter((event) => endsAtTime(event) > t)
    .sort((a, b) => endsAtTime(a) - endsAtTime(b));
}

/** Past first, most recently finished first. */
export function getPastEvents(now = new Date()): EventItem[] {
  const t = now.getTime();
  return events
    .filter((event) => endsAtTime(event) <= t)
    .sort((a, b) => endsAtTime(b) - endsAtTime(a));
}

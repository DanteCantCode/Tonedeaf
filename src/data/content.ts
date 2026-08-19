export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Drop a file in /public/committee/ and set e.g. "/committee/alex.jpg" */
  image: string | null;
  bioQuote?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
  contactEmail?: string;
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
  order?: number;
  ticketUrl?: string;
  ticketLabel?: string;
  rsvpUrl?: string;
};

export const club = {
  name: "Tonedeaf",
  tagline: "ECU's one and only DJ, electronic music & event production club",
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
    role: "Club President & DJ",
    bio: "”MAZE is the next big thing since house music” — New York Times\n“I didn't know who I was before I learned about MAZE” — Time Magazine\n“HOLY SHIT the Dutch really know their house music” — Mahatma Ghandi.",
    image: "/committee/max-van-zutphen.JPG",
    contactEmail: "tonedeaf.ecu@gmail.com",
  },
  {
    id: "dj-1",
    name: "Dante Rives",
    role: "DJ, Music Producer, Photographer, Videographer",
    bio: "Passionate about music, DJing, production and media, Dante is a long time creative. Currently 24 years old and learning all about music and media from the age of 15, his over 9 years of experience helps him in being confident in what he loves, creating and performing music for people to feel something and enjoy, as well as capturing life's most special moments to look back on for other people. He helps Tonedeaf by teaching newcomers how to DJ and produce music, as well as helping organise events and performing at those events as well.",
    image: "/committee/dante-rives.JPEG",
    buttonLabel: "Dante's Portfolio",
    buttonUrl: "https://danterives.com",
    contactEmail: "dante@tonedeafecu.com",
  },
  {
    id: "dj-2",
    name: "Utkarsh Singh (KATO)",
    role: "DJ",
    bio: "I don’t really stick to one sound and I never have. My sets pull from dubstep, trap, baile funk, jersey club, tech house, melodic techno — whatever serves the moment. It sounds all over the place until you hear it, and then it just makes sense. The thing I’m always chasing is that shift. Going from something heavy that hits you in the chest to something groovy that keeps your feet moving without you realising it. That transition, that feeling — that’s what I’m obsessed with. I spend way too many hours finding tracks just for that one moment in a set. I’m not interested in playing it safe or running the same energy for two hours straight. I want the crowd to feel something change. Get a little lost, come back harder, not know exactly what’s coming next but trust where it’s going. That’s just how I DJ. High energy, a bit unpredictable, but always locked in.",
    bioQuote: true,
    image: "/committee/utkarsh-singh.JPG",
  },
  {
    id: "dj-3",
    name: "Gian Lipasana (Franvilla)",
    role: "DJ",
    bio: "Are you bugging for some loving, you've come to the right place. Mr Lovebug, also known as FranVilla, has got you covered. An astronaut, marine and surgeon, he can do it all, but can he win your heart? Catch him on the mic singing or on the deck spinning, this man's love for music is undeniable.  Franvilla has been known to write and mix dance tracks, with a love of house, hip hop and rnb. He has a strong passion for entertainment and hopes to leave the audience with a smile on their face and maybe even catch the bug.",
    image: "/committee/gian.png",
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
    description: "2026 Start of Semester 2 Party! Only $5 tickets.",
    poster: "/events/start-of-semester-party.JPG",
    order: 1,
    ticketUrl: "https://events.humanitix.com/start-of-semester-party-x4wr93k5",
    rsvpUrl: "https://events.humanitix.com/start-of-semester-party-x4wr93k5",
  },
  {
    id: "asylum-takeover",
    title: "Tonedeaf x Asylum Takeover",
    date: "Friday 14 August 2026 · 9PM – 3AM",
    endsAt: "2026-08-15T03:00:00+08:00",
    location: "Paramount Nightclub, 163 James St, Northbridge",
    description: "Tonedeaf's first nightclub takeover event!",
    poster: "/events/asylum-takeover.PNG",
    order: 3,
    ticketUrl:
      "https://tally.so/r/WOPL6P?fbclid=IwdGRleATVOUhjbGNrBNAgqGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHq7NtyQJxwq0-XUK3dSNjxnZVS13KcW_VX7UrkO9LgAq8KC4-SoKBYPq25m5_aem_VTWhmO6G6vkfz5_PHEmMDQ",
    rsvpUrl: "https://www.facebook.com/share/19HtciFGBm/",
  },
  {
    id: "asylum-takeover-aug-21",
    title: "Tonedeaf x Asylum Takeover",
    date: "Friday 21 August 2026 · 9PM – 3AM",
    endsAt: "2026-08-21T21:00:00+08:00",
    location: "Paramount Nightclub, 163 James St, Northbridge",
    description: "Garage · House · Techno.",
    poster: "/events/asylum-takeover-aug-21.png",
    order: 4,
    ticketUrl:
      "https://tally.so/r/WOPL6P?fbclid=IwdGRleATVOUhjbGNrBNAgqGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHq7NtyQJxwq0-XUK3dSNjxnZVS13KcW_VX7UrkO9LgAq8KC4-SoKBYPq25m5_aem_VTWhmO6G6vkfz5_PHEmMDQ",
    rsvpUrl: "https://www.facebook.com/share/1JiaCCXdEB/",
  },
  {
    id: "dj-workshops-aug-sep",
    title: "DJ Workshops",
    date: "20 Aug · 3 Sep · 17 Sep 2026 · 2:00PM – 4:00PM",
    endsAt: "2026-09-17T16:00:00+08:00",
    location: "CreatorsLAB, Ground Floor, ECU City",
    description: "Get on the decks and learn how to DJ with Tonedeaf.",
    poster: "/events/dj-workshops-aug-sep.png",
    order: 5,
    ticketUrl: "https://www.trybooking.com/events/landing/1581693",
  },
  {
    id: "dj-workshop-open-day",
    title: "Tonedeaf DJ Workshop",
    date: "9 August 2026 · ECU Open Day",
    endsAt: "2026-08-09T23:59:59+08:00",
    location: "CreatorsLAB, Ground Floor, ECU City",
    description: "Get on the decks and learn how to DJ!",
    poster: "/events/dj-workshop-open-day.PNG",
  },
  {
    id: "orientation-celebration",
    title: "Orientation Celebration",
    date: "23 July 2026 · 2:00PM – 4:00PM",
    endsAt: "2026-07-23T16:00:00+08:00",
    location: "Birra Bar, ECU Joondalup",
    description:
      "Kick off your university journey! Various activites and a drink on us.",
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
    title: "Tonedeaf Wednesdays",
    date: "Wednesday 6 May 2026 · 6:00PM",
    endsAt: "2026-05-06T23:59:59+08:00",
    location: "Chambers Room, The Court, Perth",
    description:
      "House, techno, UKG, drum & bass and dubstep night featuring ECU DJs.",
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
    .sort((a, b) => {
      if (a.order != null || b.order != null) {
        return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
      }
      return endsAtTime(a) - endsAtTime(b);
    });
}

/** Past first, most recently finished first. */
export function getPastEvents(now = new Date()): EventItem[] {
  const t = now.getTime();
  return events
    .filter((event) => endsAtTime(event) <= t)
    .sort((a, b) => endsAtTime(b) - endsAtTime(a));
}

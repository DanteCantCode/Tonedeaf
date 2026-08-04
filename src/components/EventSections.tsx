"use client";

import { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import { FadeUp } from "./FadeUp";
import {
  getPastEvents,
  getUpcomingEvents,
  type EventItem,
} from "../data/content";

function useLiveEvents() {
  const [upcoming, setUpcoming] = useState<EventItem[]>(() =>
    getUpcomingEvents(),
  );
  const [past, setPast] = useState<EventItem[]>(() => getPastEvents());

  useEffect(() => {
    function refresh() {
      const now = new Date();
      setUpcoming(getUpcomingEvents(now));
      setPast(getPastEvents(now));
    }

    refresh();
    const id = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return { upcoming, past };
}

export function EventSections() {
  const { upcoming, past } = useLiveEvents();

  return (
    <>
      <section id="upcoming" className="section px-5 py-24 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <FadeUp className="text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Upcoming events!
            </h2>
          </FadeUp>
          {upcoming.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <FadeUp className="text-center sm:text-left">
              <p className="text-lg text-black/70">
                No upcoming events right now — check back soon.
              </p>
            </FadeUp>
          )}
        </div>
      </section>

      <section id="past" className="section px-5 py-24 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <FadeUp className="text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Past events
            </h2>
          </FadeUp>
          {past.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <FadeUp className="text-center sm:text-left">
              <p className="text-lg text-black/70">No past events yet.</p>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}

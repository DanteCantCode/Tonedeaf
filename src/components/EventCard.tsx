import Image from "next/image";
import { club, type EventItem } from "../data/content";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { FadeUp } from "./FadeUp";

function ticketHref(event: EventItem) {
  return event.ticketUrl ?? club.tickets;
}

function Poster({ event }: { event: EventItem }) {
  if (!event.poster) {
    return <PlaceholderMedia label="Poster" />;
  }

  const image = (
    <Image
      src={event.poster}
      alt={`${event.title} poster`}
      width={600}
      height={800}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="aspect-[3/4] w-full rounded-[22px] object-cover"
    />
  );

  return (
    <a
      href={ticketHref(event)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Tickets for ${event.title}`}
      className="block origin-center transition-transform duration-500 ease-out hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      {image}
    </a>
  );
}

export function EventCard({
  event,
  delay = 0,
  upcoming = false,
}: {
  event: EventItem;
  delay?: number;
  upcoming?: boolean;
}) {
  return (
    <FadeUp delay={delay}>
      <article className="flex flex-col gap-4">
        <Poster event={event} />
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {event.title}
          </h3>
          <p className="text-sm text-black/70">{event.location}</p>
          <p className="text-base leading-relaxed text-black/80">
            {event.description}
          </p>
        </div>
        {upcoming ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={ticketHref(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-black bg-black px-5 py-3 text-sm font-medium text-brand transition-transform hover:-translate-y-0.5"
            >
              Tickets
            </a>
          </div>
        ) : null}
      </article>
    </FadeUp>
  );
}

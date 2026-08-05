import Image from "next/image";
import type { EventItem } from "../data/content";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { FadeUp } from "./FadeUp";

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

  if (!event.ticketUrl) {
    return (
      <div className="origin-center transition-transform duration-500 ease-out hover:scale-[1.04]">
        {image}
      </div>
    );
  }

  return (
    <a
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Tickets for ${event.title}`}
      className="block origin-center transition-transform duration-500 ease-out hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      {image}
    </a>
  );
}

function EventActionButton({
  href,
  label,
  primary = false,
}: {
  href?: string;
  label: string;
  primary?: boolean;
}) {
  const base =
    "px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5";
  const enabled = primary
    ? `${base} cursor-pointer border border-black bg-black text-brand`
    : `${base} cursor-pointer border border-black`;

  if (!href) {
    return (
      <span
        className={`${enabled} pointer-events-none opacity-40`}
        aria-disabled="true"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={enabled}
    >
      {label}
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
            <EventActionButton
              href={event.ticketUrl}
              label="Tickets"
              primary
            />
            <EventActionButton href={event.rsvpUrl} label="RSVP" />
          </div>
        ) : null}
      </article>
    </FadeUp>
  );
}

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
      className="aspect-[3/4] w-full rounded-[22px] object-cover transition-opacity hover:opacity-90"
    />
  );

  if (!event.ticketUrl) {
    return image;
  }

  return (
    <a
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Tickets for ${event.title}`}
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      {image}
    </a>
  );
}

export function EventCard({
  event,
  delay = 0,
}: {
  event: EventItem;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <article className="flex flex-col gap-4">
        <Poster event={event} />
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.25em]">{event.date}</p>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {event.title}
          </h3>
          <p className="text-sm text-black/70">{event.location}</p>
          <p className="text-base leading-relaxed text-black/80">
            {event.description}
          </p>
        </div>
      </article>
    </FadeUp>
  );
}

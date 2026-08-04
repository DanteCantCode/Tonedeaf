import Image from "next/image";
import type { Person } from "../data/content";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { FadeUp } from "./FadeUp";

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20">
      <FadeUp className="w-full shrink-0 sm:w-64 md:w-80 lg:w-96">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            width={768}
            height={1024}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 384px"
            className="aspect-[3/4] w-full rounded-[22px] object-cover"
          />
        ) : (
          <PlaceholderMedia label="Photo" />
        )}
      </FadeUp>
      <FadeUp
        delay={120}
        className="flex min-w-0 flex-1 flex-col justify-center gap-3 text-center sm:text-left"
      >
        <p className="text-sm uppercase tracking-[0.25em]">{person.role}</p>
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {person.name}
        </h3>
        <p className="max-w-prose text-lg leading-relaxed text-black/80 sm:text-xl">
          {person.bio}
        </p>
      </FadeUp>
    </article>
  );
}

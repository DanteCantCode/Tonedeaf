import { SiteNav } from "../components/SiteNav";
import { PersonCard } from "../components/PersonCard";
import { EventSections } from "../components/EventSections";
import { ContactForm } from "../components/ContactForm";
import { FadeUp } from "../components/FadeUp";
import { club, committee } from "../data/content";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section
          id="top"
          className="section relative flex flex-col items-center justify-center px-5 py-28 sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
            <h1 className="animate-fade-up max-w-5xl text-[clamp(3.5rem,14vw,9rem)] font-bold leading-[0.9] tracking-tight uppercase">
              {club.name}
            </h1>
            <div className="animate-draw-line h-px w-full max-w-md bg-black" />
            <p className="animate-fade-up-delay-2 max-w-xl text-lg leading-relaxed sm:text-xl">
              {club.tagline}
            </p>
            <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#upcoming"
                className="border border-black bg-black px-5 py-3 text-sm font-medium text-brand transition-transform hover:-translate-y-0.5"
              >
                Upcoming events
              </a>
              <a
                href="#committee"
                className="border border-black px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Meet the crew
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="section flex flex-col justify-center px-5 py-24 sm:px-8"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <FadeUp>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Only deaf to
                <br />
                bad requests.
              </h2>
            </FadeUp>
            <FadeUp delay={150} className="flex flex-col gap-6 text-lg leading-relaxed sm:text-xl">
              <p>{club.about}</p>
              <p className="text-base text-black/70 sm:text-lg">
                Based at {club.location}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Committee */}
        <section id="committee" className="section px-5 py-24 sm:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <FadeUp>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                The Tonedeaf Crew
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg">
                The people behind the scenes of the club that makes events happen
                for you!
              </p>
            </FadeUp>
            <div className="flex flex-col gap-12 md:gap-16">
              {committee.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming + Past — auto-sorted by endsAt */}
        <EventSections />

        {/* Contact */}
        <section
          id="contact"
          className="section flex flex-col justify-between px-5 py-24 sm:px-8"
        >
          <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 py-8 lg:grid-cols-2 lg:gap-16">
            <FadeUp className="flex flex-col gap-10">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Stay in the loop
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-lg sm:text-xl">
                <a
                  href={`mailto:${club.email}`}
                  className="w-fit underline underline-offset-4"
                >
                  {club.email}
                </a>
                <a
                  href={club.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit underline underline-offset-4"
                >
                  Instagram: @tonedeaf_ecu
                </a>
                <a
                  href={club.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit underline underline-offset-4"
                >
                  Tickets — TryBooking
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <ContactForm email={club.email} />
            </FadeUp>
          </div>
          <FadeUp>
            <footer className="mx-auto w-full max-w-6xl border-t border-black/20 pt-6 text-sm text-black/60">
              <p>
                © {new Date().getFullYear()} {club.name} · ECU Student Guild
                club
              </p>
            </footer>
          </FadeUp>
        </section>
      </main>
    </>
  );
}

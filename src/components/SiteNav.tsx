import { club } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#committee", label: "Committee" },
  { href: "#upcoming", label: "Upcoming" },
  { href: "#past", label: "Past" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="animate-nav-drop fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-brand sm:bg-brand/90 sm:backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide uppercase">
          {club.name}
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-4 hover:underline focus-visible:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

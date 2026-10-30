import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#gulf", label: "Gulf fit" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header sticky top-0 z-30 border-b border-[var(--line)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight text-[var(--ink)] md:text-lg">
          {site.name}
        </a>
        <nav
          className="hidden items-center gap-6 text-sm text-[var(--ink-muted)] md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href={site.resumeUrl} className="btn-secondary !min-h-10 !px-4 !text-sm" download>
          Resume
        </a>
      </div>
    </header>
  );
}

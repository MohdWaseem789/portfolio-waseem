import { hero, site } from "@/lib/content";

const pillars = [
  {
    title: "Headless engine",
    detail: "Node · Next.js · React · Redux · Strapi · REST",
  },
  {
    title: "Architecture",
    detail: "System design · APIs · auth · data models",
  },
  {
    title: "Team guidance",
    detail: "Core ownership · reviews · delivery standards",
  },
];

export function Hero() {
  return (
    <section id="top" className="hero-panel relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-center px-6 py-20 md:px-8 md:py-24">
        <p className="hero-enter section-kicker">{site.role}</p>
        <p className="hero-enter hero-enter-delay-1 mt-5 font-display text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
          {site.name}
        </p>
        <h1 className="hero-enter hero-enter-delay-2 mt-6 max-w-3xl text-2xl leading-snug text-[var(--ink)] sm:text-3xl md:text-4xl">
          {hero.headline}
        </h1>
        <p className="hero-enter hero-enter-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {hero.support}
        </p>
        <p className="hero-enter hero-enter-delay-3 mt-4 text-sm text-[var(--ink-muted)]">
          {site.location}
        </p>
        <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-wrap gap-3">
          <a
            href={site.whatsapp}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp me
          </a>
          <a href="#experience" className="btn-secondary">
            See core ownership
          </a>
          <a href={site.resumeUrl} className="btn-secondary" download>
            Download resume
          </a>
        </div>

        <ul className="hero-enter hero-enter-delay-3 mt-14 grid gap-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <li key={pillar.title}>
              <p className="font-display text-lg tracking-tight text-[var(--ink)]">{pillar.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{pillar.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

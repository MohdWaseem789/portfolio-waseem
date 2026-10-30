import { about, education, languages, markets, site } from "@/lib/content";

export function About() {
  return (
    <section className="section-pad border-t border-[var(--line)] bg-[var(--surface)]" id="about">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
              {about.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              {about.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--ink)]">
              {markets.map((market) => (
                <li key={market} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[var(--accent)]" aria-hidden="true" />
                  {market}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <dl className="grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-6 lg:border-t-0 lg:pt-0">
              {about.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base text-[var(--ink)]">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-[var(--line)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Education
              </p>
              <p className="mt-2 text-base text-[var(--ink)]">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{education.school}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Languages
              </p>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">{languages.join(" · ")}</p>
              <p className="mt-5 text-sm text-[var(--ink-muted)]">{site.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

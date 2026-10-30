import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section className="section-pad border-t border-[var(--line)]" id="experience">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="section-kicker">Experience</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
          Core ownership on a headless GCC commerce engine
        </h2>
        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {experience.map((job) => (
            <li key={job.company} className="exp-row py-9">
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10">
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-[var(--ink)]">
                    {job.company}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--brand)]">{job.role}</p>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {job.period}
                    <span className="mx-2 text-[var(--line)]">|</span>
                    {job.place}
                  </p>
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-[var(--ink-muted)]">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

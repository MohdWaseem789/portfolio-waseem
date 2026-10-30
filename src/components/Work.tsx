import { projects } from "@/lib/content";

export function Work() {
  return (
    <section className="section-pad border-t border-[var(--line)] bg-[var(--surface)]" id="work">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="section-kicker">Selected work</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
          Headless commerce and platform products
        </h2>
        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {projects.map((project) => (
            <li
              key={project.title}
              className="work-row grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)_minmax(0,0.85fr)] md:items-start md:gap-8"
            >
              <div>
                <h3 className="font-display text-2xl tracking-tight text-[var(--ink)]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-[var(--brand)]"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">{project.market}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-[var(--brand)] underline-offset-4 hover:underline"
                >
                  Open live site →
                </a>
              </div>
              <p className="text-base leading-relaxed text-[var(--ink-muted)]">{project.summary}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--ink)] md:justify-end">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

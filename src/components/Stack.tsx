import { stack } from "@/lib/content";

export function Stack() {
  return (
    <section className="section-pad border-t border-[var(--line)]" id="skills">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="section-kicker">Technical skills</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
          Headless commerce stack I own and ship
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[var(--ink-muted)]">
          Node.js · Next.js · React · Redux · PostgreSQL · Strapi CMS · REST APIs — plus auth,
          integrations and team guidance.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.group} className="border-t border-[var(--line)] pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

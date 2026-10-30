import { gulfEdge } from "@/lib/content";

export function GulfEdge() {
  return (
    <section className="section-pad border-t border-[var(--line)]" id="gulf">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="section-kicker">Gulf market fit</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
          Core engineer for KSA, UAE & Qatar product teams
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[var(--ink-muted)]">
          Gulf teams need people who own the full headless engine — Node, Next, React, Redux,
          Strapi, PostgreSQL, REST APIs and auth — not only screens. That is the role I already play.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {gulfEdge.map((item) => (
            <li key={item.title} className="border-t border-[var(--line)] pt-5">
              <h3 className="font-display text-xl tracking-tight text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

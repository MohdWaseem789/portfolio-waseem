import { hireTargets } from "@/lib/content";

export function HireTargets() {
  return (
    <section className="section-pad border-t border-[var(--line)] bg-[var(--surface)]" id="expertise">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="section-kicker">Hire for Gulf roles</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
          Full stack engineer, frontend engineer, ecommerce & ERP developer
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          Looking to hire a full stack developer or frontend developer in Dubai, Riyadh, Doha or
          Bahrain? I bring production Gulf ecommerce experience plus ERP integration depth — ready
          for software engineer and product engineering roles across the GCC.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {hireTargets.map((item) => (
            <li key={item.title} className="border-t border-[var(--line)] pt-5">
              <h3 className="font-display text-xl tracking-tight text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
          Common hiring searches I match: full stack engineer UAE, frontend engineer Dubai, Gulf
          software developers, ecommerce engineer, ERP developer, and React/Node product roles in
          Saudi Arabia, Qatar and Bahrain.
        </p>
      </div>
    </section>
  );
}

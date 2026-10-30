import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="section-pad border-t border-[var(--line)] bg-[var(--surface)]" id="contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:px-8">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
            Hire a full stack / frontend engineer in the Gulf
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ink-muted)]">
            Open to full stack engineer, frontend engineer, ecommerce developer and ERP-connected
            product roles in Dubai, Riyadh, Doha and Bahrain — 30 days’ notice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="btn-secondary">
              Email
            </a>
            <a href={site.resumeUrl} className="btn-secondary" download>
              Resume
            </a>
          </div>
          <div className="mt-6 space-y-2 text-sm text-[var(--ink-muted)]">
            <p>
              <a className="text-[var(--ink)] underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="text-[var(--ink)] underline-offset-4 hover:underline" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a
                className="text-[var(--ink)] underline-offset-4 hover:underline"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                className="text-[var(--ink)] underline-offset-4 hover:underline"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

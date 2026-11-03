"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setMailtoHref("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const note = String(data.get("message") ?? "").trim();

    if (name.length < 2) {
      setStatus("error");
      setMessage("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
      return;
    }

    if (note.length < 10) {
      setStatus("error");
      setMessage("Please add a short message about the role (at least 10 characters).");
      return;
    }

    const fallbackMailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Portfolio lead: ${name}${company ? ` · ${company}` : ""}`,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\n${note}`)}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message: note }),
        signal: AbortSignal.timeout(15000),
      });

      const result = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again.");
        setMailtoHref(fallbackMailto);
        return;
      }

      setStatus("success");
      setMessage("Thanks — your message was sent to my Gmail. I will reply soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not send from the site. Open email instead, or try WhatsApp.");
      setMailtoHref(fallbackMailto);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </label>
        <label className="field">
          <span>Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="field">
        <span>Company / city</span>
        <input
          name="company"
          type="text"
          placeholder="e.g. Dubai · Riyadh · Doha"
          autoComplete="organization"
        />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          placeholder="Role, stack, timeline, and location preference"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {message ? (
          <p
            className={
              status === "success" ? "text-sm text-[var(--accent-deep)]" : "text-sm text-red-700"
            }
            role="status"
          >
            {message}{" "}
            {mailtoHref ? (
              <a className="underline underline-offset-4" href={mailtoHref}>
                Open email app
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
    </form>
  );
}

import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--brand)] text-[var(--bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-lg tracking-tight">{site.name}</p>
        <p className="text-white/70">
          © 2026 · Headless Commerce · Node · Next · React · Strapi · Open to GCC
        </p>
      </div>
    </footer>
  );
}

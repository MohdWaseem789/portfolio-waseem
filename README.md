# Mohd Waseem — Gulf Market Portfolio

Portfolio for **Mohd Waseem**, built with **React**, **Next.js**, and **Node.js**, aimed at hiring managers in **Saudi Arabia, UAE, Qatar**, and the wider GCC.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS v4
- Contact API emails leads to **waseem4fu2@gmail.com** via FormSubmit
- SEO: metadata, Open Graph, `robots.txt`, `sitemap.xml`, Person JSON-LD

## Run locally

```bash
cd gulf-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Gmail leads (important)

1. Submit the contact form once (test message).
2. Open **waseem4fu2@gmail.com** and look for an email from **FormSubmit**.
3. Click **Activate / Confirm** in that email.
4. After activation, every new lead arrives in Gmail (with reply-to set to the sender).

Also check Spam the first time.

## SEO deploy tip

Copy `.env.example` to `.env.local` and set your live domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Then submit that URL in [Google Search Console](https://search.google.com/search-console).

## Customize

Edit `src/lib/content.ts` for profile, projects, and skills.

## Deploy

```bash
npm run build
npm start
```

Or deploy to Vercel / any Node host that supports Next.js.

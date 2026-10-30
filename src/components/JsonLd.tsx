import { site } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Full-Stack Engineer",
    description: site.description,
    email: site.email,
    telephone: site.phone,
    url: siteUrl,
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Headless commerce",
      "Node.js",
      "Next.js",
      "React",
      "Redux",
      "Strapi CMS",
      "PostgreSQL",
      "REST APIs",
      "System architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    seeks: {
      "@type": "Demand",
      name: "Full-stack / headless commerce roles in UAE, Saudi Arabia, Qatar and Bahrain",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

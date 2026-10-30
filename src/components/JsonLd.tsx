import { seoKeywords, site } from "@/lib/content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-waseem.vercel.app";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: site.name,
    jobTitle: ["Full-Stack Engineer", "Frontend Engineer", "Ecommerce Developer"],
    description: site.description,
    email: site.email,
    telephone: site.phone,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      ...seoKeywords.slice(0, 16),
      "Headless commerce",
      "Node.js",
      "React",
      "Next.js",
      "Redux",
      "Strapi CMS",
      "PostgreSQL",
      "REST APIs",
      "ERP integration",
      "SAP S/4HANA",
      "System architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    workLocation: [
      { "@type": "Place", name: "Dubai, UAE" },
      { "@type": "Place", name: "Riyadh, Saudi Arabia" },
      { "@type": "Place", name: "Doha, Qatar" },
      { "@type": "Place", name: "Bahrain" },
    ],
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: site.title,
    description: site.description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: `${site.name} Portfolio`,
      url: siteUrl,
    },
    about: { "@id": `${siteUrl}/#person` },
    mainEntity: { "@id": `${siteUrl}/#person` },
  };

  const payload = [person, webpage];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

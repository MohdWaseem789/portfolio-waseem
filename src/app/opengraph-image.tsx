import { ImageResponse } from "next/og";

export const alt = "Mohd Waseem — Full Stack & Frontend Engineer for Gulf ecommerce and ERP roles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #072f37 0%, #0b3f4a 45%, #1f6f7a 100%)",
          color: "#f3f6f8",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.85 }}>
          Full Stack Engineer · Frontend Engineer · Gulf
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1.5 }}>Mohd Waseem</div>
          <div style={{ fontSize: 34, maxWidth: 900, lineHeight: 1.35, opacity: 0.92 }}>
            Ecommerce · ERP · Headless Commerce · Dubai · Riyadh · Doha
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.8 }}>
          Node.js · React · Next.js · Strapi · PostgreSQL · REST APIs
        </div>
      </div>
    ),
    size,
  );
}

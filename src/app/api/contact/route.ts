import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/content";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function siteOrigin(request: NextRequest) {
  return (
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://portfolio-waseem.vercel.app"
  );
}

export async function POST(request: NextRequest) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Please add a short message about the role." },
      { status: 400 },
    );
  }

  const origin = siteOrigin(request);
  const payload = {
    name,
    email,
    _replyto: email,
    company: company || "Not provided",
    message,
    _subject: `Portfolio lead: ${name}${company ? ` · ${company}` : ""}`,
    _template: "table",
    _captcha: "false",
    // FormSubmit treats server-side fetch as a local HTML file unless a page URL is present.
    _url: `${origin}/#contact`,
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(12000),
      },
    );

    const raw = await response.text();
    let result: { success?: boolean | string; message?: string } = {};

    try {
      result = JSON.parse(raw) as { success?: boolean | string; message?: string };
    } catch {
      console.error("[contact] FormSubmit returned non-JSON", response.status, raw.slice(0, 200));
      return NextResponse.json(
        {
          error:
            "Could not send right now. Please email waseem4fu2@gmail.com or use WhatsApp.",
        },
        { status: 502 },
      );
    }

    const sent = result.success === true || result.success === "true";

    if (!response.ok || !sent) {
      console.error("[contact] FormSubmit failed", response.status, result);

      const needsActivation = /activ/i.test(result.message ?? "");
      return NextResponse.json(
        {
          error: needsActivation
            ? "Check Gmail for a FormSubmit activation email, click Activate Form, then send again."
            : "Could not send right now. Please email waseem4fu2@gmail.com or use WhatsApp.",
        },
        { status: 502 },
      );
    }

    console.log("[contact] lead emailed to", site.email, { name, email, company });

    return NextResponse.json({
      ok: true,
      message: "Message received. Check your Gmail for the lead.",
    });
  } catch (error) {
    console.error("[contact] send error", error);
    return NextResponse.json(
      {
        error: "Could not send right now. Please email waseem4fu2@gmail.com or use WhatsApp.",
      },
      { status: 502 },
    );
  }
}

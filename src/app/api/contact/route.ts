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

  const payload = {
    name,
    email,
    _replyto: email,
    company: company || "Not provided",
    message,
    _subject: `Portfolio lead: ${name}${company ? ` · ${company}` : ""}`,
    _template: "table",
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result = (await response.json()) as { success?: boolean | string; message?: string };

    if (!response.ok) {
      console.error("[contact] FormSubmit failed", result);
      return NextResponse.json(
        {
          error:
            "Could not send right now. Please email waseem4fu2@gmail.com or use WhatsApp.",
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
        error: "Network error while sending. Please email waseem4fu2@gmail.com or use WhatsApp.",
      },
      { status: 500 },
    );
  }
}

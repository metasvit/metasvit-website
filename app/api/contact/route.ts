import { NextResponse } from "next/server";

interface Brief {
  name?: string;
  email?: string;
  company?: string;
  scope?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, company, scope, message } = (await request.json()) as Brief;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and the brief are all required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "That email address does not look right." },
        { status: 400 }
      );
    }

    // TODO: wire to Resend (or SMTP) — set RESEND_API_KEY and send to hello@metasvit.io.
    // Until then the brief lands in the Vercel function log.
    console.log(
      JSON.stringify({
        type: "contact_brief",
        at: new Date().toISOString(),
        name,
        email,
        company: company || null,
        scope: scope || null,
        message,
      })
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Could not process that request." }, { status: 500 });
  }
}

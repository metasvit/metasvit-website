import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface Brief {
  name?: string;
  email?: string;
  company?: string;
  scope?: string;
  message?: string;
  /** Honeypot. Hidden from people; bots fill it in. */
  website?: string;
}

const TO = process.env.CONTACT_TO ?? "hello@metasvit.io";
// Until a sending domain is verified in Resend, onboarding@resend.dev works but
// may only deliver to the account owner's address.
const FROM = process.env.CONTACT_FROM ?? "Metasvit site <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: string | undefined, max: number) {
  return (v ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Brief;
  try {
    body = (await request.json()) as Brief;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill hidden fields. Answer as if it worked so they don't retry.
  if (clean(body.website, 1)) {
    return NextResponse.json({ success: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const scope = clean(body.scope, 120);
  const message = clean(body.message, 8000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and the brief are all required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // No key: log it and say so honestly rather than showing a success screen for
  // a brief that went nowhere. In development that would just be noise.
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — brief could not be delivered", {
      at: new Date().toISOString(),
      name,
      email,
      company: company || null,
      scope: scope || null,
    });
    if (process.env.NODE_ENV === "development") {
      return NextResponse.json({ success: true, delivered: false });
    }
    return NextResponse.json(
      { error: `Our form is misconfigured. Please email ${TO} directly — sorry.` },
      { status: 503 }
    );
  }

  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    scope ? `Needs:   ${scope}` : null,
    "",
    message,
  ].filter(Boolean) as string[];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      // Replying in the inbox goes straight back to them.
      replyTo: email,
      subject: `New brief — ${name}${company ? ` (${company})` : ""}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend rejected the message", error);
      return NextResponse.json(
        { error: `We could not send that. Please email ${TO} directly.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, delivered: true });
  } catch (err) {
    console.error("Unexpected failure sending the brief", err);
    return NextResponse.json(
      { error: `We could not send that. Please email ${TO} directly.` },
      { status: 502 }
    );
  }
}

"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { IconArrow } from "./ui/Icons";
import { services } from "@/lib/services";

const field = "field";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-status">
        <span role="status" className="t-label inline-flex items-center gap-2 text-success">

          Brief received
        </span>
        <h2 className="t-display-m mt-5 text-ink">Thanks — that&apos;s enough to start.</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          We read every brief ourselves and reply within two working days,
          usually with questions rather than a deck.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="t-label-s mt-6 text-violet-bright underline underline-offset-4 hover:text-signal"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="form-label">
            Company or project
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="scope" className="form-label">
            What do you need?
          </label>
          <select id="scope" name="scope" className={field} defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot: off-screen rather than display:none, which some bots skip.
          Real people never see or tab to it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          The brief <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${field} resize-y`}
          placeholder="Which workflow would you improve, which systems are involved, and how would you measure success?"
        />
        <p className="mt-2 text-sm text-ink-faint">
          Your current process, tools and constraints give us a useful place to start.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          icon={<IconArrow className="h-full w-full" />}
        >
          {status === "sending" ? "Sending…" : "Send the brief"}
        </Button>
        <p className="text-sm text-ink-faint">We reply within two working days.</p>
      </div>
    </form>
  );
}

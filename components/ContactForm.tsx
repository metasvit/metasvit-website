"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { IconArrow } from "./ui/Icons";
import { services } from "@/lib/services";

const field =
  "w-full rounded-[10px] border border-line bg-surface-200 px-4 py-3 text-ink placeholder:text-ink-faint outline-none transition-[border-color,box-shadow] duration-150 focus:border-violet focus:shadow-[var(--shadow-glow-violet)]";

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
      <div className="rounded-2xl border border-line bg-surface-100 p-8 text-center">
        <span className="t-label inline-flex items-center gap-2 text-success">
          <span className="h-[7px] w-[7px] rounded-full bg-success" />
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
          <label htmlFor="name" className="t-label-s mb-2 block text-ink-muted">
            Name <span className="text-danger">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="t-label-s mb-2 block text-ink-muted">
            Email <span className="text-danger">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="t-label-s mb-2 block text-ink-muted">
            Company or project
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="scope" className="t-label-s mb-2 block text-ink-muted">
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

      <div>
        <label htmlFor="message" className="t-label-s mb-2 block text-ink-muted">
          The brief <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${field} resize-y`}
          placeholder="What are you building, what already exists, and what does done look like?"
        />
        <p className="mt-2 text-sm text-ink-faint">
          Chains, deadlines and constraints are more useful to us than a polished pitch.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-[10px] border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
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

import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/ui/Eyebrow";
import { IconArrowUpRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Metasvit what you are building. We read every brief ourselves and reply within two working days.",
};

const facts = [
  { label: "Email", value: "ruslan@metasvit.io", href: "mailto:ruslan@metasvit.io" },
  { label: "Engagement", value: "Fixed-fee discovery first" },
  { label: "Based in", value: "The Netherlands" },
  { label: "Reply time", value: "Two working days" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="t-display-l mt-6 max-w-[14ch] text-ink">
              Tell us what you are <span className="t-accent text-violet-bright">building.</span>
            </h1>
            <p className="t-body-l mt-7 text-ink-muted">
              A few sentences is enough to start. Your brief goes straight to the
              engineers who would run the project, so you get a technical
              response rather than a sales call.
            </p>

            <dl className="mt-12 flex flex-col divide-y divide-[var(--color-line)] border-y border-line">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 py-4">
                  <dt className="t-label-s text-ink-faint">{f.label}</dt>
                  <dd className="text-right">
                    {f.href ? (
                      <a
                        href={f.href}
                        target={f.href.startsWith("http") ? "_blank" : undefined}
                        rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-[15px] text-violet-bright transition-colors hover:text-signal"
                      >
                        {f.value}
                        <IconArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-[15px] text-ink">{f.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-line bg-surface-100 p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

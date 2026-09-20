import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { serviceIcons, IconArrow } from "@/components/ui/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, smart contracts, DeFi routing, GameFi, NFT and enterprise blockchain engineering — what each engagement includes.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="shell relative">
          <Eyebrow>Services</Eyebrow>
          <h1 className="t-display-xl mt-6 max-w-[15ch] text-ink">
            What we <span className="t-accent text-violet-bright">actually</span> do.
          </h1>
          <p className="t-body-l mt-7 max-w-[56ch] text-ink-muted">
            Seven areas. Each one lists the concrete deliverables you get, so a
            proposal from us can be compared line by line with anyone else&apos;s.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="shell">
          <nav aria-label="Services" className="flex flex-wrap gap-2 border-y border-line py-5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="t-label-s rounded-full border border-line px-3 py-2 text-ink-muted transition-colors duration-150 hover:border-violet hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="shell">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="grid gap-8 border-t border-line py-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[var(--violet-tint)] text-violet-bright">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="t-label-s text-ink-faint">
                        {String(i + 1).padStart(2, "0")} / {s.tags[0]}
                      </span>
                    </div>

                    <h2 className="t-display-m mt-6 text-ink">{s.title}</h2>
                    <p className="t-body-l mt-5 text-ink-muted">{s.details}</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="t-label-s rounded-md border border-line px-2 py-1 text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-surface-100 p-6 sm:p-8">
                    <h3 className="t-label text-violet-bright">What you get</h3>
                    <ul className="mt-6 flex flex-col divide-y divide-[var(--color-line)]">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                          <svg
                            className="mt-1 h-4 w-4 flex-none text-signal"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m3 8.5 3.2 3.2L13 5" />
                          </svg>
                          <span className="text-[15px] leading-relaxed text-ink-muted">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <div className="border-t border-line pt-14">
            <Button href="/contact" size="lg" icon={<IconArrow className="h-full w-full" />}>
              Tell us what you need
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

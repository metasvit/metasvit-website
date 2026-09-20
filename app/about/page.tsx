import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Metasvit is a blockchain and AI-agent engineering studio in The Netherlands, building on-chain systems since December 2021.",
};

const principles = [
  {
    title: "Security is a budget line, not a value",
    body: "Every engagement prices audit preparation and remediation in from the start. A contract that has not been attacked in a test is a contract nobody has tested.",
  },
  {
    title: "Unattended is not unsupervised",
    body: "Agents ship with a risk layer that can halt the loop, structured logs you can replay, and a kill switch a human can reach in one step. Autonomy without a brake is just an unmonitored process.",
  },
  {
    title: "We say when we disagree",
    body: "If the architecture is wrong or the token model does not close, you hear it during discovery. Agreeing with a client into a failed launch helps nobody.",
  },
  {
    title: "We only claim what we shipped",
    body: "Every engagement on our work page reached production. We do not pad a portfolio with prototypes, pitches or projects that never left a testnet.",
  },
];

const timeline = [
  { year: "2021", text: "Metasvit founded in The Netherlands. First repositories in December." },
  { year: "2022", text: "First client programmes: NFT minting platforms, play-to-earn economies and DeFi derivatives interfaces." },
  { year: "2023", text: "XRP Ledger work: wallet, KYC gateway, Unity WebGL clients with wallet authentication." },
  { year: "2024", text: "DEX routing: a swap front end with our own smart order routing service behind it." },
  { year: "2025 — now", text: "Autonomous agents on the Eliza framework, and the operational tooling around them." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="shell relative">
          <Eyebrow>Who we are</Eyebrow>
          <h1 className="t-display-xl mt-6 max-w-[17ch] text-ink">
            An engineering partner for{" "}
            <span className="t-accent text-violet-bright">production</span> systems.
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="t-body-l text-ink-muted">
              Metasvit is a blockchain and AI-agent engineering studio based in
              The Netherlands. We started in December 2021 and have been shipping
              continuously since — NFT drops and play-to-earn games first, then
              XRP Ledger infrastructure, then DeFi routing, and now autonomous
              agents.
            </p>
            <p className="t-body-l text-ink-muted">
              We work as an extension of your team rather than a vendor at
              arm&apos;s length: you talk directly to the engineers writing the
              contracts, the person who scopes your project is the person who
              delivers it, and the codebase is yours from the first commit.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="t-display-l mt-6 max-w-[16ch] text-ink">Four things we will not trade away.</h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i, 3) * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-100 p-6 sm:p-8">
                  <span className="t-label-s text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section border-t border-line bg-surface-100">
        <div className="shell">
          <Reveal>
            <Eyebrow>Track record</Eyebrow>
            <h2 className="t-display-l mt-6 max-w-[18ch] text-ink">Where the time went.</h2>
          </Reveal>

          <div className="mt-14">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={Math.min(i, 4) * 55}>
                <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-6 border-t border-line py-6 md:grid-cols-[160px_minmax(0,1fr)]">
                  <span
                    className={`t-label pt-1 ${
                      i === timeline.length - 1 ? "text-signal" : "text-ink-faint"
                    }`}
                  >
                    {t.year}
                  </span>
                  <p className="max-w-[62ch] leading-relaxed text-ink-muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Button href="/work" icon={<IconArrow className="h-full w-full" />}>
              See the projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

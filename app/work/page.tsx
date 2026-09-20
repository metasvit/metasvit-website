import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WorkCard from "@/components/WorkCard";
import { IconArrow } from "@/components/ui/Icons";
import { work, stats } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Metasvit projects: XRPL wallets and KYC gateways, Unity GameFi clients, DEX routing engines, NFT minting dApps and autonomous agents.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="shell relative">
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="t-display-xl mt-6 max-w-[16ch] text-ink">
            Work that went <span className="t-accent text-violet-bright">live.</span>
          </h1>
          <p className="t-body-l mt-7 max-w-[58ch] text-ink-muted">
            Long-running engagements across XRP Ledger infrastructure, GameFi,
            DeFi routing and autonomous agents — scoped, built, shipped and
            handed over.
          </p>

          <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="t-label-s text-ink-muted">{s.label}</dt>
                <dd
                  className={`t-numeric mt-3 text-[2.5rem] ${
                    "tone" in s && s.tone === "signal" ? "text-signal" : "text-ink"
                  }`}
                >
                  {s.value}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-ink-faint">{s.source}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section pt-4">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2">
            {work.map((item, i) => (
              <Reveal key={item.name} delay={Math.min(i, 5) * 60}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-14">
            <Button href="/contact" size="lg" icon={<IconArrow className="h-full w-full" />}>
              Start a project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

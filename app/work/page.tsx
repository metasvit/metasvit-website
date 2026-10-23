import type { Metadata } from "next";
import Button from "@/components/ui/Button";
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
      <section className="page-intro">
        <div className="shell page-overview">
          <h1 className="page-title">Selected work</h1>
          <p className="page-lead">
            Long-running engagements across XRP Ledger infrastructure, GameFi,
            DeFi routing and autonomous agents, scoped, built, shipped and
            handed over.
          </p>
        </div>
      </section>

      <section className="content-section" aria-label="Project index">
        <div className="shell">
          <div className="case-list">
            {work.map((item) => (
              <WorkCard key={item.name} item={item} />
            ))}
          </div>

          <dl className="fact-strip">
            {stats.map((s) => (
              <div className="fact-item" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
                <dd>{s.source}</dd>
              </div>
            ))}
          </dl>

          <div className="content-section">
            <Button href="/contact" size="lg" icon={<IconArrow className="h-full w-full" />}>
              Start a project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

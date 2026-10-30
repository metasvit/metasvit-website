import { pageMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";

export const metadata = pageMetadata("/about", "About Our Engineering Studio", "Metasvit is a blockchain and AI-agent engineering studio in The Netherlands, building on-chain systems since December 2021.");

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
      <section className="page-intro">
        <div className="shell">
          <h1 className="page-title">
            An engineering partner for production systems.
          </h1>
          <p className="page-lead">
            Metasvit is a blockchain and AI-agent engineering studio based in
            The Netherlands.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="studio-heading">
        <div className="shell">
          <h2 className="section-title" id="studio-heading">Who we are</h2>
          <div className="page-overview">
            <p>
              We started in December 2021 and have been shipping continuously
              since, NFT drops and play-to-earn games first, then
              XRP Ledger infrastructure, then DeFi routing, and now autonomous
              agents.
            </p>
            <p>
              We work as an extension of your team rather than a vendor at
              arm&apos;s length: you talk directly to the engineers writing the
              contracts, the person who scopes your project is the person who
              delivers it, and the codebase is yours from the first commit.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="principles-heading">
        <div className="shell">
          <h2 className="section-title" id="principles-heading">How we think</h2>
          <p className="section-lead">Four things we will not trade away.</p>

          <div className="principle-list">
            {principles.map((principle) => (
              <article className="principle-entry" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="timeline-heading">
        <div className="shell">
          <h2 className="section-title" id="timeline-heading">Track record</h2>
          <p className="section-lead">Where the time went.</p>

          <ol className="timeline-list">
            {timeline.map((entry) => (
              <li className="timeline-entry" key={entry.year}>
                <span>{entry.year}</span>
                <p>{entry.text}</p>
              </li>
            ))}
          </ol>

          <Button href="/work">See the projects</Button>
        </div>
      </section>
    </>
  );
}

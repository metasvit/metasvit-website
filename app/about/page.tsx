import { pageMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";

export const metadata = pageMetadata("/about", "Senior Engineers for AI Transformation", "Meet MetaSvit: senior engineering, architecture and delivery specialists helping businesses adopt AI through embedded forward-deployed engineering.");

const principles = [
  {
    title: "Design for the real operating environment",
    body: "Understand data access, permissions, failure modes and the cost of operating the system before rollout. Agree the reviews and recovery path with the people accountable for the work.",
  },
  {
    title: "Give autonomy clear boundaries",
    body: "Define what an agent can do, which decisions need a person, and how to stop or recover the workflow. Use evaluations and operating evidence to decide when more autonomy is useful.",
  },
  {
    title: "We say when we disagree",
    body: "If the data is not ready, the workflow has no owner or the economics do not justify AI, you hear it during discovery. A useful recommendation can be to simplify the process first.",
  },
  {
    title: "Build capability in your team",
    body: "Work in a shared repository, make decisions visible and teach people how to operate what is delivered. A successful engagement leaves your business more capable.",
  },
];

const timeline = [
  { year: "2021", text: "Metasvit founded in The Netherlands. First repositories in December." },
  { year: "2022", text: "First client programmes: NFT minting platforms, play-to-earn economies and DeFi derivatives interfaces." },
  { year: "2023", text: "XRP Ledger work: wallet, KYC gateway, Unity WebGL clients with wallet authentication." },
  { year: "2024", text: "DEX routing: a swap front end with our own smart order routing service behind it." },
  { year: "2025", text: "Autonomous agents on the Eliza framework, and the operational tooling around them." },
  { year: "2026", text: "A broader focus on business AI transformation through forward-deployed engineering, integration and team enablement." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <h1 className="page-title">
            Senior experience. Embedded in your team.
          </h1>
          <p className="page-lead">
            MetaSvit is an AI transformation and forward-deployed engineering company based in The Netherlands.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="studio-heading">
        <div className="shell">
          <h2 className="section-title" id="studio-heading">Who we are</h2>
          <div className="page-overview">
            <p>
              Our senior specialists bring 20+ years of experience in software development, architecture and project management. Individual team members’ experience includes work at Amazon and Miro, and across banking and European enterprises.
            </p>
            <p>
              We combine that experience with MetaSvit’s production engineering history since 2021. Today, we work alongside your business and technical owners to take AI from an idea to a workflow people use, and help your team build on it.
            </p>
          </div>
          <p className="team-experience-note">Amazon, Miro and sector references describe individual team members’ experience, rather than MetaSvit client relationships or endorsements.</p>
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
          <p className="section-lead">From production engineering to business AI transformation.</p>

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

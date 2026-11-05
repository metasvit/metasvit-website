import Button from "@/components/ui/Button";
import WorkflowDemo from "@/components/WorkflowDemo";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata("/workflow-demo", "Customer Operations Workflow Demo", "Explore a synthetic order-support workflow: check source data, review a proposed reply and approve or escalate. A MetaSvit delivery walkthrough."),
  robots: { index: false, follow: true },
};

export default function WorkflowDemoPage() {
  return <>
    <section className="page-intro"><div className="shell">
      <h1 className="page-title" style={{ fontSize: "clamp(36px,4.5vw,64px)", maxWidth: "24ch" }}>One request. A checked response.</h1>
      <p className="page-lead">Try a customer-operations workflow with evidence, editable replies and human decisions.</p>
      <p className="t-label" style={{ color: "var(--color-muted)" }}>Interactive walkthrough using fictional data and fixed responses. No live AI or integrations. Nothing is sent.</p>
      <WorkflowDemo />
    </div></section>
    <section className="content-section agent-section"><div className="shell">
      <div className="section-heading"><h2 className="section-title">From walkthrough to working system.</h2><p>This shows the interaction we would validate with your operators. A live pilot adds your authorised data, integrations, model evaluation and deployment controls.</p></div>
      <div className="principle-list">
        <article className="principle-entry"><h3>Connect the right evidence</h3><p>Use approved customer and order records. Verify identity and access, handle stale data and make source failures visible.</p></article>
        <article className="principle-entry"><h3>Test the difficult requests</h3><p>Evaluate missing references, mismatched accounts, outdated records and policy exceptions. Measure corrections and review effort alongside completed tasks.</p></article>
        <article className="principle-entry"><h3>Agree the operating boundary</h3><p>Name an owner, define permissions, record actions and test recovery. Sending replies or changing orders needs separate, explicitly scoped integration work.</p></article>
      </div>
      <div className="content-actions flex flex-wrap gap-3"><Button href="/ai-workflow-sprint">Explore the workflow sprint</Button><Button href="/contact" variant="secondary">Bring your workflow</Button></div>
    </div></section>
  </>;
}

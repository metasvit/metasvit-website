import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/ai-workflow-sprint", "AI Workflow Sprint", "A ten-working-day engagement to map one business workflow, build a bounded prototype and agree an evidence-based production plan with MetaSvit.");

const outputs = [
  ["A workflow and baseline", "Map the current task, systems, exceptions and owner. Agree the measures: handling time, output quality, review effort and operating cost."],
  ["A working prototype", "Build one bounded workflow using approved sample data. Show the evidence, decisions and human handoffs, then test it with your operators."],
  ["A build decision", "Deliver the findings, prototype code, evaluation results, integration plan and a separately costed production proposal. Stop, revise or move to a pilot."],
];

export default function WorkflowSprintPage() {
  return <>
    <section className="page-intro"><div className="shell">
      <h1 className="page-title">Your first useful AI workflow.</h1>
      <p className="page-lead">Ten working days to turn one repeated process into a tested prototype and a clear production decision.</p>
      <div className="content-actions"><Button href="/contact">Discuss a workflow sprint</Button><Button href="/workflow-demo" variant="secondary">Try the operations demo</Button></div>
    </div></section>
    <section className="content-section"><div className="shell">
      <div className="section-heading"><h2 className="section-title">Start with work you can describe.</h2><p>For operations leaders with a repeated task, an available business owner and access to representative examples. Customer-operations requests are one useful starting point.</p></div>
      <div className="principle-list">{outputs.map(([title, text]) => <article className="principle-entry" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="content-section agent-section"><div className="shell">
      <h2 className="section-title">A bounded engagement.</h2>
      <ol className="process-list">
        <li className="process-row"><h3>Days 1–2</h3><p>Map the workflow, inspect sample quality and agree the acceptance criteria.</p><small>Owner and baseline</small></li>
        <li className="process-row"><h3>Days 3–7</h3><p>Build the prototype and review the evidence and handoffs with your operators.</p><small>Working prototype</small></li>
        <li className="process-row"><h3>Days 8–10</h3><p>Run the agreed evaluation, document limits and present the production options.</p><small>Decision and handover</small></li>
      </ol>
      <p className="section-lead" style={{ marginTop: 32 }}>Timing starts after scope, access and sample data are agreed. Production rollout is a separate engagement.</p>
    </div></section>
    <section className="content-section"><div className="shell">
      <h2 className="section-title">Before we start.</h2>
      <div className="principle-list">
        <article className="principle-entry"><h3>What do we need from you?</h3><p>A business owner, a technical contact, operator feedback and representative examples you are authorised to share. Agree data handling and environment access before any transfer.</p></article>
        <article className="principle-entry"><h3>What fits in the sprint?</h3><p>One workflow, one operating team, approved sample data and one prototype environment. Live write integrations, full migration, round-the-clock support and a company-wide rollout require separate scope.</p></article>
        <article className="principle-entry"><h3>How do we price it?</h3><p>We agree a fixed fee and written scope before work starts. Model and third-party costs, ownership and delivery conditions are stated in the proposal.</p></article>
        <article className="principle-entry"><h3>What happens after ten days?</h3><p>You receive the work and a recommendation. A production pilot proceeds only with an agreed owner, integration scope, acceptance criteria and budget. If the workflow is a poor fit, the findings should say so.</p></article>
      </div>
      <div className="content-actions"><Button href="/contact">Bring one workflow</Button><Button href="/forward-deployed-engineering" variant="secondary">How we deliver</Button></div>
    </div></section>
  </>;
}

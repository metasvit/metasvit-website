import { pageMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { deliverySteps, outcomeMeasures } from "@/lib/transformation";

export const metadata = pageMetadata("/forward-deployed-engineering", "Forward-Deployed Engineers for AI Transformation", "MetaSvit embeds senior engineers with your team to discover valuable workflows, build AI integrations, deploy into production and develop your own AI capability.");

const questions = [
  { title: "What is a forward-deployed engineer?", body: "An engineer who works closely with your business and technical teams to solve an operational problem. They understand the workflow, build the software and integrations, and help get it into everyday use. At MetaSvit, this is our delivery model for AI transformation." },
  { title: "Where should we start?", body: "Bring a repeated task, a slow handoff or an AI pilot that has stalled. Discovery checks whether the data, access, owner and potential value are there. The first build should have a bounded scope and a measurable acceptance test." },
  { title: "Do we need to replace our existing systems?", body: "We start with your current tools and data. The plan may involve integrations, changes to a workflow or targeted modernisation. The decision follows the business need and technical constraints." },
  { title: "Which models and platforms do you use?", body: "We evaluate options against your workload, quality requirements, operating cost and deployment constraints. We can work with your chosen stack and document the trade-offs. Your team gets documented choices for deployment and future model changes." },
  { title: "Who owns the result?", body: "We agree ownership, access and third-party licensing in the engagement. Our working approach uses a shared repository, documented decisions and a named operational owner, so your team can maintain what is delivered." },
  { title: "How do you handle adoption and risk?", body: "Involve users from the prototype stage. Define the actions the agent can take, the decisions a person must approve, and how failures are handled. Training, evaluation, monitoring and recovery are part of the delivery scope. Sector-specific requirements need to be agreed with your own risk and legal owners." },
];

export default function ForwardDeployedEngineeringPage() {
  return <>
    <section className="page-intro"><div className="shell">
      <h1 className="page-title">Engineers inside your business.</h1>
      <p className="page-lead">Forward-deployed engineering brings business understanding and hands-on delivery into one team. We embed with yours to turn AI opportunities into working systems and lasting capability.</p>
      <div className="content-actions"><Button href="/contact">Discuss a workflow</Button></div>
    </div></section>
    <section className="content-section" aria-labelledby="fit-heading"><div className="shell">
      <div className="section-heading"><h2 className="section-title" id="fit-heading">Built around the work.</h2><p>For business and technology leaders who have access to AI tools and need help making them useful in daily operations.</p></div>
      <div className="principle-list">
        <article className="principle-entry"><h3>A team with a business owner</h3><p>Your operational expert and technical owner work with our engineers and architecture and delivery specialists. We agree the team around the scope and keep decisions close to the people using the system.</p></article>
        <article className="principle-entry"><h3>One workflow to start</h3><p>Examples include assisted customer operations, internal knowledge retrieval, document preparation and engineering workflows. We validate fit during discovery before committing to a build.</p></article>
        <article className="principle-entry"><h3>A wider operating capability</h3><p>The first deployment creates reusable integrations, evaluations and practical experience. Expand to the next workflow when its value and ownership are clear.</p></article>
      </div>
    </div></section>
    <section className="content-section agent-section" aria-labelledby="delivery-heading"><div className="shell">
      <h2 className="section-title" id="delivery-heading">From opportunity to everyday use.</h2>
      {deliverySteps.map(step => <article id={step.id} key={step.id} className="service-detail">
        <div className="service-heading"><h3 className="section-title">{step.title}</h3><p>{step.description}</p></div>
        <div className="service-deliverables"><h4>Outputs we agree with you</h4><ul>{step.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
      </article>)}
    </div></section>
    <section className="content-section" aria-labelledby="measure-heading"><div className="shell">
      <h2 className="section-title" id="measure-heading">Measure the change in the work.</h2>
      <p className="section-lead">Agree the baseline and acceptance criteria before building. Compare the deployed workflow against them, including the cost of human review.</p>
      <div className="outcome-grid">{outcomeMeasures.map(measure => <article key={measure.title}><h3>{measure.title}</h3><p>{measure.description}</p></article>)}</div>
    </div></section>
    <section className="content-section" aria-labelledby="questions-heading"><div className="shell">
      <h2 className="section-title" id="questions-heading">Before we start.</h2>
      <div className="principle-list">{questions.map(question => <article className="principle-entry" key={question.title}><h3>{question.title}</h3><p>{question.body}</p></article>)}</div>
      <div className="content-actions"><Button href="/contact">Plan your AI transformation</Button></div>
    </div></section>
  </>;
}

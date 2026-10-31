import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import AgentConsole from "@/components/AgentConsole";
import Button from "@/components/ui/Button";
import { transformationServices } from "@/lib/services";
import { deliverySteps } from "@/lib/transformation";
import { work } from "@/lib/work";

export default function Home() {
  return <>
    <Hero />
    <Marquee />
    <section className="content-section" id="services">
      <div className="shell">
        <div className="section-heading">
          <h2 className="section-title">AI transformation, built around your business.</h2>
          <p>Start with the work your people do every day. We bring engineering, architecture and delivery expertise to connect AI to that work, then help your team run it.</p>
        </div>
        <div className="service-list">{transformationServices.map((service, index) => <ServiceCard key={service.slug} {...service} index={index} href={`/services#${service.slug}`} />)}</div>
        <div className="content-actions"><Link className="text-link" href="/services">Explore the services and deliverables</Link></div>
      </div>
    </section>
    <section className="content-section agent-section">
      <div className="shell agent-layout">
        <div className="agent-copy">
          <h2 className="section-title">Engineers who learn your business.</h2>
          <p>Forward-deployed engineers work alongside your operators and technical team. They learn the process, build the integrations and stay involved through deployment and adoption.</p>
          <p>That includes the details a demo can skip: permissions, exceptions, evaluations, operating costs and the moment a person needs to take over.</p>
          <Button href="/forward-deployed-engineering" variant="secondary">Meet the delivery model</Button>
        </div>
        <AgentConsole />
      </div>
    </section>
    <section className="content-section">
      <div className="shell">
        <div className="section-heading">
          <h2 className="section-title">A foundation in systems that run.</h2>
          <p>Our engineering history spans DeFi, blockchain infrastructure, games and autonomous agents. Explore the production work behind our approach.</p>
        </div>
        <div className="case-list">{[work[3], work[0], work[2]].map(item => <WorkCard key={item.name} item={item} />)}</div>
        <div className="content-actions"><Button href="/work" variant="secondary">Explore our engineering track record</Button></div>
      </div>
    </section>
    <section className="content-section">
      <div className="shell">
        <h2 className="section-title">One workflow. Then a wider transformation.</h2>
        <p className="section-lead">Give the first deployment a clear owner and a measurable goal. Use what works to build the next.</p>
        <ol className="process-list">{deliverySteps.map(step => <li className="process-row" key={step.id}><h3>{step.title}</h3><p>{step.description}</p><small>{step.deliverables[0]}</small></li>)}</ol>
        <div className="content-actions"><Button href="/contact">Find your first AI workflow</Button></div>
      </div>
    </section>
  </>;
}

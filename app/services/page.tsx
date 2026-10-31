import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { transformationServices, engineeringServices, type Service } from "@/lib/services";

export const metadata = pageMetadata("/services", "AI Transformation & Engineering Services", "AI transformation, embedded forward-deployed engineers, agents and systems integration. Practical services from workflow discovery to production and adoption.");

function ServiceDetails({ service }: { service: Service }) {
  return <article id={service.slug} aria-labelledby={`${service.slug}-title`} className="service-detail">
    <div className="service-heading">
      <h2 id={`${service.slug}-title`} className="section-title">{service.title}</h2>
      <p className="section-lead">{service.details}</p>
      <ul className="tag-list" aria-label={`${service.title} capabilities`}>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      {service.slug === "forward-deployed-engineering" && <Link className="text-link" href="/forward-deployed-engineering">How embedded delivery works</Link>}
    </div>
    <div className="service-deliverables"><h3>What you get</h3><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
  </article>;
}

export default function ServicesPage() {
  return <>
    <section className="page-intro services-intro"><div className="shell">
      <h1 className="page-title">Make AI work in your business.</h1>
      <p className="page-lead">A practical path from the first useful workflow to a capability your company can operate and grow.</p>
    </div></section>
    <div className="shell">
      <nav aria-label="Services" className="service-nav">
        {transformationServices.map(service => <a key={service.slug} href={`#${service.slug}`}>{service.title}</a>)}
        <a href="#existing-systems">Blockchain & existing systems</a>
      </nav>
      <section aria-label="AI transformation services">{transformationServices.map(service => <ServiceDetails key={service.slug} service={service} />)}</section>
      <section className="content-section" id="existing-systems" aria-labelledby="existing-heading">
        <h2 className="section-title" id="existing-heading">Our engineering foundations.</h2>
        <p className="section-lead">We continue to support blockchain, DeFi and product engineering. The systems already running in your business belong in the transformation plan too.</p>
        {engineeringServices.filter(service => service.slug !== "ai-agents").map(service => <ServiceDetails key={service.slug} service={service} />)}
      </section>
      <div className="content-section"><Button href="/contact" size="lg">Plan your first workflow</Button></div>
    </div>
  </>;
}

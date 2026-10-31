import Link from "next/link";
import Button from "./ui/Button";
import { deliverySteps } from "@/lib/transformation";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="shell">
        <div className="opening-layout">
          <div>
            <h1>Build an <span className="no-wrap">AI-powered</span> business.</h1>
            <p className="hero-sentence">MetaSvit embeds senior engineers with your team to redesign workflows, connect your systems and put AI to work across your business.</p>
            <div className="hero-actions">
              <Button href="/contact" size="lg">Plan your AI transformation</Button>
              <Button href="/forward-deployed-engineering" size="lg" variant="secondary">How we work</Button>
            </div>
          </div>
          <div className="hero-record" aria-label="Our forward-deployed engineering approach">
            {deliverySteps.map(step => (
              <Link href={`/forward-deployed-engineering#${step.id}`} key={step.id}>
                <div><h2>{step.title}</h2><p>{step.summary}</p></div>
                <span className="delivery-index" aria-hidden="true">{step.number}</span>
              </Link>
            ))}
          </div>
        </div>
        <dl className="fact-strip">
          <div className="fact-item"><dt>Working model</dt><dd>Embedded engineers</dd></div>
          <div className="fact-item"><dt>Senior specialists</dt><dd>20+ years’ experience</dd></div>
          <div className="fact-item"><dt>Build towards</dt><dd>Your own capability</dd></div>
        </dl>
      </div>
    </section>
  );
}

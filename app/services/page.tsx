import { pageMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata = pageMetadata("/services", "Blockchain & AI Agent Development Services", "AI agents, smart contracts, DeFi routing, GameFi, NFT and enterprise blockchain engineering \u2014 what each engagement includes.");

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro services-intro">
        <div className="shell">
          <h1 className="page-title">What we actually do.</h1>
          <p className="page-lead">
            Seven areas. Each one lists the concrete deliverables you get, so a
            proposal from us can be compared line by line with anyone else&apos;s.
          </p>
        </div>
      </section>

      <div className="shell">
        <nav aria-label="Services" className="service-nav">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`}>
              {s.title}
            </a>
          ))}
        </nav>

        <section aria-label="Service details">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className="service-detail"
            >
              <div className="service-heading">
                <h2 id={`${s.slug}-title`} className="section-title">
                  {s.title}
                </h2>
                <p className="section-lead">{s.details}</p>
                <ul className="tag-list" aria-label={`${s.title} technologies`}>
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="service-deliverables">
                <h3>What you get</h3>
                <ul>
                  {s.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <div className="content-section">
          <Button href="/contact" size="lg">
            Tell us what you need
          </Button>
        </div>
      </div>
    </>
  );
}

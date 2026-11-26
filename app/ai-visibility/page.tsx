import Button from "@/components/ui/Button";
import { breadcrumbGraph, pageMetadata, sitePages, faqGraph, serviceGraph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMetadata(sitePages.aiVisibility);

const outputs = [
  ["An answer audit", "We ask the assistants the questions your buyers ask and record whether they name you, which page they link to and whether what they say is true."],
  ["Fixes on your site", "Clear titles and descriptions, structured data that matches each page, an llms.txt file, internal links, and answer pages for the questions where you are missing. A person reads every change before it goes live."],
  ["Weekly measurement", "The same questions every week across the main assistants and search engines, with the sources they cite, so you can see what changed and why."],
];

const questions = [
  { title: "What is GEO?", body: "Generative engine optimisation: making sure AI assistants can find, understand and correctly describe your business. It builds on SEO, because assistants read the same search indexes." },
  { title: "Can you guarantee that ChatGPT recommends us?", body: "No one can. We measure what the assistants say, fix what is in your control and report the change honestly." },
  { title: "Which assistants do you measure?", body: "ChatGPT, Claude, Gemini, Perplexity and Copilot, as far as each can be reached, plus Google and Bing results." },
  { title: "Who does the work?", body: "Senior engineers working with AI agents. Agents run the measurements and draft changes; a person reviews every change before it goes live." },
];

export default function AiVisibilityPage() {
  return <>
    <JsonLd data={[breadcrumbGraph(sitePages.aiVisibility), serviceGraph(sitePages.aiVisibility, "SEO and generative engine optimisation", [
      {
        "@type": "Offer",
        name: "Audit and fixes",
        price: "2500",
        priceCurrency: "EUR",
        priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "EUR", valueAddedTaxIncluded: false },
      },
      {
        "@type": "Offer",
        name: "Monthly visibility",
        priceCurrency: "EUR",
        priceSpecification: { "@type": "UnitPriceSpecification", minPrice: "1250", priceCurrency: "EUR", unitCode: "MON", valueAddedTaxIncluded: false },
      },
    ]), faqGraph(sitePages.aiVisibility, questions)]} />
    <section className="page-intro"><div className="shell">
      <h1 className="page-title">Be found, and named correctly by AI.</h1>
      <p className="page-lead">People now ask ChatGPT, Gemini and Perplexity which company to choose. We check what they say about you, fix what search engines and assistants read on your site, and measure the change every week.</p>
      <p className="page-lead" style={{ fontSize: 14 }}>Audit and fixes: €2,500. Then from €1,250 a month. Excluding VAT.</p>
      <div className="content-actions flex flex-wrap gap-3"><Button href="/contact">Ask for an audit</Button><Button href="/forward-deployed-engineering" variant="secondary">How we deliver</Button></div>
    </div></section>
    <section className="content-section"><div className="shell">
      <h2 className="section-title">What you get.</h2>
      <div className="principle-list">{outputs.map(([title, text]) => <article className="principle-entry" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="content-section agent-section"><div className="shell">
      <h2 className="section-title">Two steps.</h2>
      <ol className="process-list">
        <li className="process-row"><h3>Weeks 1–2</h3><p>Audit, fixes and a baseline: where you are named today, where you are not, and which pages assistants link to.</p><small>€2,500 fixed fee</small></li>
        <li className="process-row"><h3>Every month</h3><p>Weekly measurement, two new answer pages and a short report on what changed.</p><small>From €1,250 a month</small></li>
      </ol>
      <p className="section-lead" style={{ marginTop: 32 }}>We use the same method on our own sites. We do not buy links, post reviews we did not earn or publish AI-written pages unread, and we do not promise rankings.</p>
    </div></section>
    <section className="content-section"><div className="shell">
      <h2 className="section-title">Before we start.</h2>
      <div className="principle-list">
        {questions.map(question => <article className="principle-entry" key={question.title}><h3>{question.title}</h3><p>{question.body}</p></article>)}
      </div>
      <div className="content-actions flex flex-wrap gap-3"><Button href="/contact">Ask for an audit</Button><Button href="/ai-workflow-sprint" variant="secondary">Start with a workflow sprint</Button></div>
    </div></section>
  </>;
}

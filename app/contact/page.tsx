import { breadcrumbGraph, pageMetadata, sitePages } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata = pageMetadata(sitePages.contact);

const facts = [
  { label: "Email", value: "hello@metasvit.io", href: "mailto:hello@metasvit.io" },
  { label: "Engagement", value: "Fixed-fee discovery first" },
  { label: "Based in", value: "The Netherlands" },
  { label: "Reply time", value: "Two working days" },
];

export default function ContactPage(){return <><JsonLd data={[breadcrumbGraph(sitePages.contact)]} /><section className="page-intro contact-intro"><div className="shell contact-layout"><div><h1 className="page-title">Where could AI change your work?</h1><p className="page-lead">Tell us about a repeated task, a slow handoff or an AI pilot that needs a path to production. Include the systems involved, the people who use them and what a useful result would look like.</p><dl className="contact-facts">{facts.map((f)=><div key={f.label}><dt>{f.label}</dt><dd>{f.href?<a href={f.href} target={f.href.startsWith("http")?"_blank":undefined} rel={f.href.startsWith("http")?"noopener noreferrer":undefined} className="text-link">{f.value}</a>:<span>{f.value}</span>}</dd></div>)}</dl></div><div className="contact-form-panel"><ContactForm/></div></div></section></>}

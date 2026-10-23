import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Metasvit what you are building. We read every brief ourselves and reply within two working days.",
};

const facts = [
  { label: "Email", value: "ruslan@metasvit.io", href: "mailto:ruslan@metasvit.io" },
  { label: "Engagement", value: "Fixed-fee discovery first" },
  { label: "Based in", value: "The Netherlands" },
  { label: "Reply time", value: "Two working days" },
];

export default function ContactPage(){return <section className="page-intro contact-intro"><div className="shell contact-layout"><div><h1 className="page-title">Tell us what you are building.</h1><p className="page-lead">A few sentences is enough to start. Your brief goes straight to the engineers who would run the project, so you get a technical response rather than a sales call.</p><dl className="contact-facts">{facts.map((f)=><div key={f.label}><dt>{f.label}</dt><dd>{f.href?<a href={f.href} target={f.href.startsWith("http")?"_blank":undefined} rel={f.href.startsWith("http")?"noopener noreferrer":undefined} className="text-link">{f.value}</a>:<span>{f.value}</span>}</dd></div>)}</dl></div><div className="contact-form-panel"><ContactForm/></div></div></section>}

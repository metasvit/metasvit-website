import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import AgentConsole from "@/components/AgentConsole";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";
import { work } from "@/lib/work";

const process = [
  {
    index: "01 / Scope",
    title: "Discovery",
    description:
      "We read your contracts, your threat model and your roadmap, then write down what we think you are actually building. If we disagree with the plan, you hear it here — not after the invoice.",
    meta: ["1–2 weeks", "Fixed fee"],
  },
  {
    index: "02 / Build",
    title: "Implementation",
    description:
      "Two-week increments against a shared board. Contracts land with tests and a gas report; agents land with a replayable log. You can run what we have at the end of any sprint.",
    meta: ["Sprint cadence", "Shared repo"],
    active: true,
  },
  {
    index: "03 / Verify",
    title: "Audit and hardening",
    description:
      "External audit, testnet soak, and the remediation pass afterwards. We write the upgrade and rollback path before mainnet, not after the first incident.",
    meta: ["Audit partner", "Testnet soak"],
  },
  {
    index: "04 / Run",
    title: "Operate",
    description:
      "Deploy, monitor and stay on call. Agents get alerting and a kill switch a human can reach in one step, because unattended does not mean unsupervised.",
    meta: ["Monitoring", "On-call"],
  },
];

export default function Home(){return <><Hero/><Marquee/><section className="content-section" id="services"><div className="shell"><div className="section-heading"><h2 className="section-title">Seven things we do properly.</h2><p>Each is an area we have shipped repeatedly and can show you the repositories for, scoped, priced and delivered as a stand-alone engagement.</p></div><div className="service-list">{services.map((s,i)=><ServiceCard key={s.slug} icon={s.icon} title={s.title} description={s.description} tags={s.tags} index={i} href={`/services#${s.slug}`}/>)}</div><div className="content-actions"><Link className="text-link" href="/services">What each one includes</Link></div></div></section><section className="content-section agent-section"><div className="shell agent-layout"><div className="agent-copy"><h2 className="section-title">Software that keeps working.</h2><p>An agent is only useful if you can trust it unattended. Ours ship with a risk layer that can halt the loop, structured logs you can replay decision by decision, and a kill switch a human can reach in one step.</p><Button href="/services#ai-agents" variant="secondary">How we build agents</Button></div><AgentConsole/></div></section><section className="content-section"><div className="shell"><div className="section-heading"><h2 className="section-title">Selected work.</h2><p>Multi-year engagements rather than one-off builds: infrastructure, games and trading systems that reached production and stayed there.</p></div><div className="case-list">{work.slice(0,4).map(item=><WorkCard key={item.name} item={item}/>)}</div><div className="content-actions"><Button href="/work" variant="secondary">All work</Button></div></div></section><section className="content-section"><div className="shell"><h2 className="section-title">How we work.</h2><p className="section-lead">Four stages, and you can leave after any of them.</p><ol className="process-list">{process.map(p=><li className="process-row" key={p.index}><h3>{p.title}</h3><p>{p.description}</p><small>{p.meta.join(" / ")}</small></li>)}</ol></div></section></>}

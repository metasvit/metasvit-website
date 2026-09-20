import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import ProcessRow from "@/components/ProcessRow";
import AgentConsole from "@/components/AgentConsole";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";
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

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* ---------- Services ---------- */}
      <section className="section" id="services">
        <div className="shell">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <h2 className="t-display-l max-w-[14ch] text-ink">
                Seven things we do <span className="t-accent text-violet-bright">properly.</span>
              </h2>
              <p className="max-w-md text-ink-muted">
                Each is an area we have shipped repeatedly and can show you the
                repositories for — scoped, priced and delivered as a stand-alone
                engagement.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i, 5) * 60}>
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  tags={s.tags}
                  index={i}
                  href={`/services#${s.slug}`}
                />
              </Reveal>
            ))}
            <Reveal delay={360}>
              <Link
                href="/services"
                className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-line-strong p-6 transition-colors duration-150 hover:border-violet hover:bg-surface-100"
              >
                <span className="t-label text-violet-bright">All services</span>
                <span className="mt-8 inline-flex items-center gap-3 text-xl font-semibold tracking-[-0.02em] text-ink">
                  What each one includes
                  <IconArrow className="h-5 w-5 text-violet-bright transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- The agent console ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-surface-100">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
        <div className="shell section relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow live>Autonomous by default</Eyebrow>
              <h2 className="t-display-l mt-6 text-ink">
                Software that keeps working when{" "}
                <span className="t-accent text-signal">nobody is watching.</span>
              </h2>
              <p className="t-body-l mt-7 text-ink-muted">
                An agent is only useful if you can trust it unattended. Ours ship
                with a risk layer that can halt the loop, structured logs you can
                replay decision by decision, and a kill switch a human can reach
                in one step.
              </p>
              <div className="mt-9">
                <Button href="/services#ai-agents" variant="secondary">
                  How we build agents
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <AgentConsole />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
              <h2 className="t-display-l max-w-[16ch] text-ink">
                Shipped, not <span className="t-accent text-violet-bright">pitched.</span>
              </h2>
              <p className="max-w-md text-ink-muted">
                Multi-year engagements rather than one-off builds —
                infrastructure, games and trading systems that reached production
                and stayed there.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {work.slice(0, 4).map((item, i) => (
              <Reveal key={item.name} delay={Math.min(i, 3) * 70}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/work" variant="secondary" icon={<IconArrow className="h-full w-full" />}>
              All work
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section border-t border-line bg-surface-100">
        <div className="shell">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="t-display-l mt-6 max-w-[18ch] text-ink">
              Four stages, and you can leave after any of them.
            </h2>
          </Reveal>

          <div className="mt-14">
            {process.map((p, i) => (
              <Reveal key={p.index} delay={Math.min(i, 3) * 60}>
                <ProcessRow {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

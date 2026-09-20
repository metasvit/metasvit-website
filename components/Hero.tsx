import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";
import Core3D from "./Core3D";
import { IconArrow } from "./ui/Icons";
import { stats } from "@/lib/work";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-violet/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <Eyebrow live>Agents running in production</Eyebrow>

            <h1 className="t-display-xl mt-6 text-ink">
              Building{" "}
              <span className="t-accent text-violet-bright">autonomous</span>{" "}
              on-chain systems.
            </h1>

            <p className="t-body-l mt-7 max-w-[54ch] text-ink-muted">
              Metasvit is a blockchain and AI-agent engineering studio in The
              Netherlands. Smart contracts, autonomous agents, DeFi routing and
              GameFi — shipped since 2021.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact" size="lg" icon={<IconArrow className="h-full w-full" />}>
                Start a project
              </Button>
              <Button href="/work" size="lg" variant="secondary">
                See the work
              </Button>
            </div>

            <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="t-label-s text-ink-muted">{s.label}</dt>
                  <dd
                    className={`t-numeric mt-2 text-[clamp(1.75rem,4vw,2.5rem)] ${
                      "tone" in s && s.tone === "signal" ? "text-signal" : "text-ink"
                    }`}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:mx-0">
            <Core3D />
          </div>
        </div>
      </div>
    </section>
  );
}

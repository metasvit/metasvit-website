import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { IconArrow } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden="true" />
      <div className="shell relative">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="t-display-xl mt-6 max-w-[14ch] text-ink">
          That route <span className="t-accent text-violet-bright">reverted.</span>
        </h1>
        <p className="t-body-l mt-7 max-w-[46ch] text-ink-muted">
          The page you asked for does not exist. Nothing was lost — try one of
          these instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" icon={<IconArrow className="h-full w-full" />}>
            Back home
          </Button>
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </section>
  );
}

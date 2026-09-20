import Link from "next/link";
import Logo from "./Logo";
import { IconArrowUpRight } from "./ui/Icons";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { href: "/services#ai-agents", label: "AI agents" },
      { href: "/services#smart-contracts", label: "Smart contracts" },
      { href: "/services#defi", label: "DeFi" },
      { href: "/services#gamefi", label: "GameFi" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-100">
      {/* Contact slab */}
      <section className="section border-b border-line">
        <div className="shell">
          <p className="t-label text-violet-bright">Contact</p>
          <h2 className="t-display-l mt-5 max-w-[16ch] text-ink">
            Let&apos;s build something that{" "}
            <span className="t-accent text-signal">runs itself.</span>
          </h2>
          <a
            href="mailto:hello@metasvit.io"
            className="mt-8 inline-flex items-center gap-3 text-[clamp(1.375rem,4vw,2.25rem)] font-semibold tracking-[-0.03em] text-ink transition-colors hover:text-violet-bright"
          >
            hello@metasvit.io
            <IconArrowUpRight className="h-7 w-7 flex-none text-violet-bright" />
          </a>
          <p className="mt-6 max-w-md text-ink-muted">
            Or use the{" "}
            <Link href="/contact" className="text-violet-bright underline underline-offset-4 hover:text-signal">
              project brief form
            </Link>{" "}
            — it asks the questions we would ask on a first call anyway.
          </p>
        </div>
      </section>

      <div className="shell grid gap-12 py-16 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Blockchain and AI-agent engineering studio. The Netherlands, shipping
            since 2021.
          </p>
          <a
            href="https://github.com/metasvit"
            target="_blank"
            rel="noopener noreferrer"
            className="t-label-s mt-6 inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
          >
            github.com/metasvit
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="t-label-s text-ink-faint">{col.title}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="shell flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-label-s text-ink-faint">
          © {new Date().getFullYear()} Metasvit
        </p>
        <p className="t-label-s text-ink-faint">Built in The Netherlands</p>
      </div>
    </footer>
  );
}

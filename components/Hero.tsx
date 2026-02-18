import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
          Web 3.0 &amp; AI Solutions
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building the Future with{" "}
          <span className="gradient-text">Blockchain &amp; AI Agents</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          We design and develop decentralized applications, smart contracts, and
          autonomous AI agents that power the next generation of the internet.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/services"
            className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary-light"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

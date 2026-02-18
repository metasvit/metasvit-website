import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
              What We Do
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-white/20 px-8 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-light"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="border-t border-white/10 bg-surface px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Trusted Blockchain &amp; AI Partner
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Based in The Netherlands, Metasvit is a team of blockchain engineers
            and AI specialists. We combine deep technical expertise with a
            passion for decentralized technology to deliver solutions that drive
            real value for our clients — from startups to enterprises.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block rounded-full border border-white/20 px-8 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary-light"
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-surface-light p-12 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Build?
          </h2>
          <p className="mb-8 text-lg text-muted">
            Let&apos;s discuss your project and explore how blockchain and AI can
            transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}

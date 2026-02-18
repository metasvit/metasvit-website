import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of blockchain and AI development services — from smart contracts and DeFi to autonomous AI agents.",
};

export default function ServicesPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Our Expertise
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            End-to-end blockchain and AI development services tailored to your
            needs.
          </p>
        </div>

        {/* Service sections */}
        <div className="space-y-16">
          {services.map((service, i) => (
            <section
              key={service.title}
              className={`rounded-2xl border border-white/10 bg-surface p-8 sm:p-12 ${
                i % 2 === 1 ? "md:flex md:flex-row-reverse md:gap-12" : "md:flex md:gap-12"
              }`}
            >
              <div className="mb-6 flex-shrink-0 md:mb-0 md:w-16">
                <span className="text-5xl">{service.icon}</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-3 text-2xl font-bold">{service.title}</h2>
                <p className="mb-6 text-muted">{service.details}</p>
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-light">
                    Key Deliverables
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-0.5 text-primary">✦</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Need Something Custom?
          </h2>
          <p className="mb-8 text-muted">
            We love tackling unique challenges. Tell us about your project.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Metasvit — a blockchain and AI development company based in The Netherlands, building the future of Web 3.0.",
};

const values = [
  {
    icon: "🔒",
    title: "Security First",
    description:
      "Every line of code we write is with security in mind. Smart contracts are audited, agents are sandboxed, and best practices are non-negotiable.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "We optimize for speed and efficiency — gas-optimized contracts, low-latency agents, and scalable architectures.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    description:
      "Open communication, clear timelines, and honest assessments. We treat every project as a partnership.",
  },
  {
    icon: "🔬",
    title: "Innovation",
    description:
      "We stay at the cutting edge of blockchain and AI technology, constantly exploring new frameworks, chains, and possibilities.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">About Metasvit</h1>
        </div>

        {/* Story */}
        <section className="mx-auto mb-20 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-surface p-8 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Metasvit was founded with a clear mission: to bridge the gap
                between cutting-edge blockchain technology and real-world
                applications. Based in The Netherlands, we bring together a team
                of experienced engineers, researchers, and strategists who are
                passionate about decentralized technology and artificial
                intelligence.
              </p>
              <p>
                Since our inception, we&apos;ve delivered solutions across the
                full Web3 stack — from smart contract development and DeFi
                protocols to NFT platforms and enterprise blockchain networks.
                With the rise of AI agents in the crypto space, we&apos;ve
                expanded our expertise to build autonomous agents that can trade,
                interact with protocols, and make intelligent on-chain decisions.
              </p>
              <p>
                We believe the future belongs to autonomous, decentralized
                systems. Our job is to build them — securely, efficiently, and at
                scale.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold">Our Values</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-glow rounded-2xl border border-white/10 bg-surface p-6"
              >
                <div className="mb-3 text-3xl">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mx-auto mb-20 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-surface p-8 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold">Our Approach</h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "We dive deep into your requirements, business goals, and technical constraints to understand the full picture.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Architecture and system design with security, scalability, and user experience at the core.",
                },
                {
                  step: "03",
                  title: "Develop",
                  desc: "Iterative development with continuous testing, code reviews, and stakeholder feedback.",
                },
                {
                  step: "04",
                  title: "Deploy & Support",
                  desc: "Secure deployment, monitoring setup, and ongoing support to ensure long-term success.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary-light">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Let&apos;s Work Together
          </h2>
          <p className="mb-8 text-muted">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

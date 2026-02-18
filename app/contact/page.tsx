import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Metasvit. Tell us about your blockchain or AI project and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Have a project in mind? Drop us a message and we&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-surface p-8">
                <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
                <div className="space-y-4 text-sm text-muted">
                  <div>
                    <p className="mb-1 font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:info@metasvit.io"
                      className="transition-colors hover:text-primary-light"
                    >
                      info@metasvit.io
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-foreground">
                      Location
                    </p>
                    <p>The Netherlands</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface p-8">
                <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
                <div className="space-y-3 text-sm">
                  <a
                    href="https://github.com/metasvit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted transition-colors hover:text-primary-light"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://x.com/metasvit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted transition-colors hover:text-primary-light"
                  >
                    X (Twitter) →
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface p-8">
                <h3 className="mb-4 text-lg font-bold">Response Time</h3>
                <p className="text-sm text-muted">
                  We typically respond within 24 hours on business days. For
                  urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

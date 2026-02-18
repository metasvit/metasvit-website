import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Metasvit</span>
            </Link>
            <p className="mt-3 text-sm text-muted">
              Building the future of Web 3.0 and AI.
              <br />
              Based in The Netherlands.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:info@metasvit.io"
                  className="transition-colors hover:text-primary-light"
                >
                  info@metasvit.io
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/metasvit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-light"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/metasvit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-light"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Metasvit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

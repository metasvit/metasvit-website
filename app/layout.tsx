import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Host_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationGraph, siteDescription, siteUrl } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
});

const host = Host_Grotesk({variable:"--font-host",subsets:["latin"],weight:["400","500"],display:"swap"});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Metasvit | Blockchain & AI Agent Development",
    template: "%s | Metasvit",
  },
  description: siteDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Metasvit | Blockchain & AI Agent Development",
    description: siteDescription,
    url: siteUrl,
    siteName: "Metasvit",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Metasvit — blockchain and AI agent engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metasvit | Blockchain & AI Agent Development",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${host.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph).replace(/</g, "\\u003c") }} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

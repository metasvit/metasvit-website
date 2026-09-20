import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const serif = Instrument_Serif({
  variable: "--font-serif-face",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Metasvit — Blockchain and AI agent engineering",
    template: "%s | Metasvit",
  },
  description:
    "Metasvit is a blockchain and AI-agent engineering studio in The Netherlands. Smart contracts, autonomous agents, DeFi routing and GameFi — shipping since 2021.",
  keywords: [
    "blockchain development",
    "AI agents",
    "smart contracts",
    "Web3",
    "DeFi",
    "XRPL",
    "Solidity",
    "Netherlands",
  ],
  openGraph: {
    title: "Metasvit — Blockchain and AI agent engineering",
    description:
      "Smart contracts, autonomous agents, DeFi routing and GameFi. Shipping since 2021, from The Netherlands.",
    url: "https://metasvit.io",
    siteName: "Metasvit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metasvit — Blockchain and AI agent engineering",
    description:
      "Smart contracts, autonomous agents, DeFi routing and GameFi. Shipping since 2021.",
  },
  metadataBase: new URL("https://metasvit.io"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${serif.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Metasvit — Web 3.0 & AI Agent Development",
    template: "%s | Metasvit",
  },
  description:
    "Metasvit builds decentralized applications, smart contracts, and autonomous AI agents. Blockchain development company based in The Netherlands.",
  keywords: [
    "blockchain development",
    "AI agents",
    "smart contracts",
    "Web3",
    "DeFi",
    "NFT",
    "decentralized applications",
  ],
  openGraph: {
    title: "Metasvit — Web 3.0 & AI Agent Development",
    description:
      "Building the future with blockchain and AI agents. Decentralized applications, smart contracts, and autonomous AI solutions.",
    url: "https://metasvit.io",
    siteName: "Metasvit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metasvit — Web 3.0 & AI Agent Development",
    description:
      "Building the future with blockchain and AI agents.",
  },
  metadataBase: new URL("https://metasvit.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

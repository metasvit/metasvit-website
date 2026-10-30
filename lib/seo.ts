import type { Metadata } from "next";

export const siteUrl = "https://metasvit.io";
export const siteDescription =
  "Metasvit builds blockchain applications and AI agents. Explore smart contract, DeFi, GameFi and enterprise engineering services from our Netherlands studio.";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteUrl).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Metasvit`,
      description,
      url,
      siteName: "Metasvit",
      locale: "en_US",
      type: "website",
      images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Metasvit — blockchain and AI agent engineering" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | Metasvit`, description, images: [`${siteUrl}/opengraph-image`] },
  };
}

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Metasvit",
      url: siteUrl,
      description: siteDescription,
      sameAs: ["https://github.com/metasvit"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Metasvit",
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

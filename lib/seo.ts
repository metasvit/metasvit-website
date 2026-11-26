import type { Metadata } from "next";

export const siteUrl = "https://metasvit.io";
export const siteDescription =
  "MetaSvit embeds senior engineers to help businesses adopt AI. From workflow discovery and agent integration to production deployment and team enablement.";

const organizationId = `${siteUrl}/#organization`;

/** The capability strip on the home page; also the Organization's knowsAbout. */
export const capabilities = ["Workflow discovery", "AI agents", "Systems integration", "Software architecture", "Cloud deployment", "Team enablement"];

export type SitePage = { path: string; title: string; description: string; indexed: boolean };

/**
 * One record per public page: the page's own title and description.
 * pageMetadata(), the breadcrumbs and /llms.txt all read from here, so the
 * three always print the same words.
 */
export const sitePages = {
  services: { path: "/services", title: "AI Transformation & Engineering Services", description: "AI transformation, embedded forward-deployed engineers, agents and systems integration. Practical services from workflow discovery to production and adoption.", indexed: true },
  forwardDeployedEngineering: { path: "/forward-deployed-engineering", title: "Forward-Deployed Engineers for AI Transformation", description: "MetaSvit embeds senior engineers with your team to discover valuable workflows, build AI integrations, deploy into production and develop your own AI capability.", indexed: true },
  aiWorkflowSprint: { path: "/ai-workflow-sprint", title: "AI Workflow Sprint", description: "A ten-working-day engagement to map one business workflow, build a bounded prototype and agree an evidence-based production plan with MetaSvit.", indexed: true },
  work: { path: "/work", title: "Production Engineering Track Record", description: "Selected Metasvit projects: XRPL wallets and KYC gateways, Unity GameFi clients, DEX routing engines, NFT minting dApps and autonomous agents.", indexed: true },
  about: { path: "/about", title: "Senior Engineers for AI Transformation", description: "Meet MetaSvit: senior engineering, architecture and delivery specialists helping businesses adopt AI through embedded forward-deployed engineering.", indexed: true },
  contact: { path: "/contact", title: "Plan Your AI Transformation", description: "Tell MetaSvit about a workflow, an AI pilot or a business process you want to improve. Speak with the engineers who would deliver it.", indexed: true },
  workflowDemo: { path: "/workflow-demo", title: "Customer Operations Workflow Demo", description: "Explore a synthetic order-support workflow: check source data, review a proposed reply and approve or escalate. A MetaSvit delivery walkthrough.", indexed: false },
} satisfies Record<string, SitePage>;

export function pageMetadata(page: SitePage): Metadata {
  const { path, title, description } = page;
  const url = new URL(path, siteUrl).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | MetaSvit`,
      description,
      url,
      siteName: "MetaSvit",
      locale: "en_US",
      type: "website",
      images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "MetaSvit — AI transformation and forward-deployed engineering" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | MetaSvit`, description, images: [`${siteUrl}/opengraph-image`] },
  };
}

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "MetaSvit",
      alternateName: "Metasvit",
      url: siteUrl,
      description: siteDescription,
      email: "hello@metasvit.io",
      parentOrganization: { "@type": "Organization", "@id": "https://cryptosvit.xyz/#organization", name: "CryptoSvit", url: "https://cryptosvit.xyz/" },
      knowsAbout: capabilities,
      sameAs: ["https://github.com/metasvit", "https://www.linkedin.com/company/metasvit-ai/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MetaSvit",
      alternateName: "Metasvit",
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

/** Home → page, for every page below the home page. */
export function breadcrumbGraph(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.title, item: new URL(page.path, siteUrl).href },
    ],
  };
}

export type QuestionAndAnswer = { title: string; body: string };

/** FAQPage only from questions and answers printed on the same page. */
export function faqGraph(page: SitePage, questions: QuestionAndAnswer[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${new URL(page.path, siteUrl).href}#questions`,
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.title,
      acceptedAnswer: { "@type": "Answer", text: q.body },
    })),
  };
}

/** A service offered on its own page, named and described in the page's own words. */
export function serviceGraph(page: SitePage, serviceType: string) {
  const url = new URL(page.path, siteUrl).href;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.title,
    serviceType,
    description: page.description,
    url,
    provider: { "@id": organizationId },
  };
}

/** The text of /llms.txt: what MetaSvit is and one line per public page. */
export function llmsText() {
  const lines = [
    "# MetaSvit",
    "",
    `> ${siteDescription}`,
    "",
    "## Pages",
    "",
    `- [MetaSvit | AI Transformation & Forward-Deployed Engineers](${siteUrl}/): ${siteDescription}`,
    ...Object.values(sitePages)
      .filter((p) => p.indexed)
      .map((p) => `- [${p.title}](${siteUrl}${p.path}): ${p.description}`),
    "",
    "## Optional",
    "",
    ...Object.values(sitePages)
      .filter((p) => !p.indexed)
      .map((p) => `- [${p.title}](${siteUrl}${p.path}): ${p.description}`),
    "",
  ];
  return lines.join("\n");
}

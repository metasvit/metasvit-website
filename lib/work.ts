/**
 * Selected work. Long-running engagements only — each one went to production.
 * House rule still applies: no figure on the site that we cannot stand behind.
 */

export interface WorkItem {
  name: string;
  year: string;
  summary: string;
  /** What we actually built, in the client's terms. */
  detail: string;
  stack: string[];
  link?: { label: string; href: string };
}

export const work: WorkItem[] = [
  {
    name: "OnXRP",
    year: "2022 — 2023",
    summary: "Wallet, KYC gateway and game client for an XRP Ledger ecosystem.",
    detail:
      "A full product surface on the XRP Ledger: a browser wallet, a KYC gateway for compliant onboarding, and a Unity game client with wallet authentication — plus the container and Kubernetes infrastructure the services run on.",
    stack: ["XRPL", "TypeScript", "C# / Unity", "Kubernetes"],
  },
  {
    name: "MetaCamel",
    year: "2023 — 2024",
    summary: "GameFi platform: WebGL client, live leaderboard and NFT tooling.",
    detail:
      "A play-to-earn title end to end — the WebGL game client, a .NET API behind it, a live leaderboard, and the NFT tooling for generating and minting the collection that backs the in-game economy.",
    stack: ["Unity WebGL", "C# / .NET", "TypeScript", "Next.js"],
    link: {
      label: "View the leaderboard",
      href: "https://metacamel-leaderboard.vercel.app",
    },
  },
  {
    name: "uSwap & DEX routing",
    year: "2024",
    summary: "A DEX front end with its own smart order routing service.",
    detail:
      "A swap interface backed by a routing service we built and ran ourselves, so quote quality and uptime were never dependent on a third-party endpoint.",
    stack: ["TypeScript", "EVM", "Smart order routing"],
  },
  {
    name: "Autonomous agents",
    year: "2025 — now",
    summary: "Agent runtimes for on-chain execution, with human escalation.",
    detail:
      "Our current line of work: agents that execute on-chain tasks unattended, paired with notification services that escalate to a human for the decisions that still need one.",
    stack: ["Eliza", "TypeScript", "Telegram Bot API"],
  },
  {
    name: "Option Finance",
    year: "2022",
    summary: "DeFi derivatives interface built on the Opium protocol.",
    detail:
      "An options and derivatives front end integrating the Opium protocol — position building, pricing display and settlement flows for instruments most DeFi interfaces do not attempt.",
    stack: ["TypeScript", "Opium", "EVM"],
  },
];

/** Figures we can stand behind. */
export const stats = [
  {
    value: "2021",
    label: "Building since",
    source: "Founded in The Netherlands, December 2021",
  },
  {
    value: "5",
    label: "Long-running programmes",
    source: "Multi-year engagements, not one-off builds",
  },
  {
    value: "6",
    label: "Production stacks",
    source: "XRPL, EVM, Unity, .NET, Kubernetes, Terraform",
    tone: "signal" as const,
  },
];

import type { ServiceIconKey } from "@/components/ui/Icons";

export interface Service {
  slug: string;
  icon: ServiceIconKey;
  title: string;
  description: string;
  details: string;
  /** Concrete nouns only — a chain, a language, a framework. */
  tags: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "ai-agents",
    icon: "agent",
    title: "AI agent development",
    description:
      "Autonomous agents that trade, monitor and act on-chain without a human in the loop.",
    details:
      "We build agents that run unattended against live markets: a strategy loop, a risk layer that can halt it, and a replayable log of every decision. We work with the Eliza framework and with plain TypeScript runtimes where a framework would only get in the way.",
    tags: ["Eliza", "TypeScript", "Multi-agent"],
    deliverables: [
      "Trading and execution agents",
      "On-chain monitoring and alerting agents",
      "Eliza character and plugin development",
      "Multi-agent coordination and hand-off",
      "Replayable decision logs and dashboards",
    ],
  },
  {
    slug: "blockchain",
    icon: "chain",
    title: "Blockchain development",
    description:
      "Full-stack dApps and protocol work across EVM chains and the XRP Ledger.",
    details:
      "End-to-end delivery: contract architecture, indexing, the API in between, and the front end people actually use. We have shipped on EVM chains and on the XRP Ledger, including wallets, KYC gateways and game backends.",
    tags: ["EVM", "XRPL", "Next.js"],
    deliverables: [
      "Full-stack dApp development",
      "Protocol design and implementation",
      "Wallet and account abstraction work",
      "Indexers and subgraphs",
      "Multi-chain deployment pipelines",
    ],
  },
  {
    slug: "smart-contracts",
    icon: "contract",
    title: "Smart contracts",
    description:
      "Solidity and Vyper, gas-optimised, with test suites we are happy to show you.",
    details:
      "Contracts land with tests, invariants and a gas report. We prepare for external audit rather than treating it as a formality, and we write the upgrade path before the first deploy, not after the first incident.",
    tags: ["Solidity", "Foundry", "Audit prep"],
    deliverables: [
      "Solidity and Vyper development",
      "Foundry and Hardhat test suites",
      "Gas profiling and optimisation",
      "Upgradeable proxy patterns",
      "Audit preparation and remediation",
    ],
  },
  {
    slug: "defi",
    icon: "defi",
    title: "DeFi solutions",
    description:
      "DEX routing, lending mechanics, yield strategies and token design.",
    details:
      "We have built and extended smart order routers, integrated yield aggregators, and worked on options and derivatives protocols. Token economics are modelled before they are written, so the parameters have a reason behind them.",
    tags: ["DEX routing", "Yield", "Tokenomics"],
    deliverables: [
      "DEX and AMM development",
      "Smart order routing engines",
      "Lending and borrowing mechanics",
      "Yield strategy integration",
      "Token economics modelling",
    ],
  },
  {
    slug: "gamefi",
    icon: "game",
    title: "Blockchain games",
    description:
      "Unity and WebGL game clients wired to on-chain economies and leaderboards.",
    details:
      "Playable first, on-chain second. We build the Unity or WebGL client, the backend API and leaderboard, and the wallet authentication that joins the two — so the chain is a feature of the game rather than a toll gate in front of it.",
    tags: ["Unity", "WebGL", "C#"],
    deliverables: [
      "Unity and WebGL game clients",
      "Wallet authentication for WebGL builds",
      "Leaderboards and game APIs",
      "In-game NFT and token economies",
      "Reward and progression systems",
    ],
  },
  {
    slug: "nft",
    icon: "nft",
    title: "NFT development",
    description:
      "Minting dApps, collection contracts, metadata pipelines and marketplaces.",
    details:
      "From the mint contract and allowlist mechanics through to IPFS metadata, royalties and the marketplace surface. We have shipped minting dApps and NFT creation tooling used by live collections.",
    tags: ["ERC-721", "IPFS", "Marketplaces"],
    deliverables: [
      "Collection smart contracts",
      "Minting dApps and allowlists",
      "Metadata and IPFS pipelines",
      "Marketplace integration",
      "Royalty and licensing systems",
    ],
  },
  {
    slug: "enterprise",
    icon: "enterprise",
    title: "Enterprise blockchain",
    description:
      "Permissioned networks, KYC gateways, tokenisation and the infrastructure under them.",
    details:
      "Where compliance is part of the product: identity and KYC gateways, permissioned networks, asset tokenisation. We run the infrastructure too — Kubernetes, Terraform and containerised services, not a demo on someone's laptop.",
    tags: ["Kubernetes", "Terraform", "KYC"],
    deliverables: [
      "Private and permissioned networks",
      "KYC and identity gateways",
      "Asset tokenisation platforms",
      "Kubernetes and Terraform infrastructure",
      "Compliance and reporting tooling",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

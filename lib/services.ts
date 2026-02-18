export interface Service {
  icon: string;
  title: string;
  description: string;
  details: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI Agent Development",
    description:
      "Autonomous AI agents for Web3 — trading bots, on-chain agents, and custom agent solutions.",
    details:
      "We build intelligent, autonomous AI agents that operate in the Web3 ecosystem. From trading bots that execute strategies 24/7 to on-chain agents that interact with DeFi protocols, we leverage frameworks like Eliza and custom solutions to bring your vision to life.",
    deliverables: [
      "Custom AI trading bots",
      "On-chain autonomous agents",
      "Eliza framework integrations",
      "Multi-agent systems",
      "Agent monitoring & analytics dashboards",
    ],
  },
  {
    icon: "⛓️",
    title: "Blockchain Development",
    description:
      "Decentralized applications, protocol development, and blockchain architecture.",
    details:
      "End-to-end blockchain development from architecture design to deployment. We build scalable dApps across multiple chains including Ethereum, Base, Arbitrum, and more.",
    deliverables: [
      "Full-stack dApp development",
      "Protocol design & implementation",
      "Multi-chain deployment",
      "Blockchain architecture consulting",
      "Performance optimization",
    ],
  },
  {
    icon: "📜",
    title: "Smart Contracts",
    description:
      "Solidity/Vyper development, auditing, and complex contract systems.",
    details:
      "Secure, gas-optimized smart contracts for any use case. From simple token contracts to complex DeFi protocols, we write, test, and audit contracts to the highest standards.",
    deliverables: [
      "Solidity & Vyper development",
      "Smart contract auditing",
      "Gas optimization",
      "Upgradeable contract patterns",
      "Comprehensive test suites",
    ],
  },
  {
    icon: "🏢",
    title: "Enterprise Blockchain",
    description:
      "Private/permissioned networks, identity management, and digital asset management.",
    details:
      "Enterprise-grade blockchain solutions for businesses looking to leverage distributed ledger technology. We build private networks, identity systems, and tokenization platforms.",
    deliverables: [
      "Private & permissioned networks",
      "Digital identity solutions",
      "Asset tokenization platforms",
      "Supply chain tracking",
      "Regulatory compliance tools",
    ],
  },
  {
    icon: "🎨",
    title: "NFT Development",
    description:
      "Collections, 3D assets, marketplaces, and full lifecycle management.",
    details:
      "Complete NFT solutions from smart contract development to marketplace integration. We handle minting, metadata, royalties, and custom marketplace development.",
    deliverables: [
      "NFT collection smart contracts",
      "Custom marketplace development",
      "3D asset integration",
      "Metadata & IPFS storage",
      "Royalty & licensing systems",
    ],
  },
  {
    icon: "💰",
    title: "DeFi Solutions",
    description:
      "DEX, lending protocols, yield optimization, and token economics.",
    details:
      "Building the financial infrastructure of Web3. We develop decentralized exchanges, lending protocols, yield aggregators, and token economic models.",
    deliverables: [
      "DEX development",
      "Lending & borrowing protocols",
      "Yield optimization strategies",
      "Token economics design",
      "Liquidity management tools",
    ],
  },
  {
    icon: "🎮",
    title: "Blockchain Games",
    description:
      "GameFi, play-to-earn, and in-game NFT economies.",
    details:
      "Creating engaging blockchain-powered gaming experiences. We combine game design with Web3 mechanics to build play-to-earn games, in-game economies, and NFT-powered gaming platforms.",
    deliverables: [
      "GameFi development",
      "Play-to-earn mechanics",
      "In-game NFT economies",
      "Token reward systems",
      "Game smart contracts",
    ],
  },
];

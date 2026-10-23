const items = [
  "Ethereum",
  "Base",
  "Arbitrum",
  "XRP Ledger",
  "Polygon",
  "BNB Chain",
  "Solidity",
  "Foundry",
  "Eliza",
  "Unity WebGL",
  "Kubernetes",
  "Terraform",
  "Next.js",
  ".NET",
];

/** Ambient scroller of the stacks we actually ship on. Stops under reduced motion. */
export default function Marquee(){return <div className="marquee-wrap"><div className="shell marquee-track" aria-label="Technologies we work with">{items.map(item=><span key={item}>{item}</span>)}</div></div>}

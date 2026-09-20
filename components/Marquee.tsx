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
export default function Marquee() {
  return (
    <div
      className="relative flex overflow-hidden border-y border-line py-5"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="t-label flex items-center gap-8 px-8 text-ink-faint"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-violet" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

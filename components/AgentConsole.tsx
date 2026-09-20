export interface ConsoleLine {
  time: string;
  text: string;
  tone?: "default" | "ok" | "live";
}

/**
 * The signature element: an agent's log.
 *
 * Presentation only — no state, no timers. The staggered entrance is pure CSS,
 * keyed off the enclosing Reveal, so the lines are visible whether or not the
 * animation ever runs.
 */
const script: ConsoleLine[] = [
  { time: "09:24:01", text: "agent.boot    strategy=arb-v3 chain=base" },
  { time: "09:24:02", text: "rpc.connect   ok  block=21044918", tone: "ok" },
  { time: "09:24:06", text: "scan.pools    routes=142 spread>18bps" },
  { time: "09:24:07", text: "risk.check    size=0.8 ETH  limit ok", tone: "ok" },
  { time: "09:24:07", text: "tx.submit     0x9f2a..c41d gas=0.0004 ETH" },
  { time: "09:24:11", text: "settle        +0.42% realised", tone: "ok" },
  { time: "09:24:12", text: "scan.pools    watching", tone: "live" },
];

export default function AgentConsole({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-line bg-surface-100 font-mono ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-200 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="t-label-s text-ink-muted">metasvit-agent.log</span>
        <span className="t-label-s ml-auto inline-flex items-center gap-2 text-signal">
          <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-signal" />
          Live
        </span>
      </div>

      <div
        role="log"
        className="flex min-h-[248px] flex-col gap-1.5 p-4 text-[13px] leading-[1.55]"
      >
        {script.map((line, i) => (
          <div
            key={i}
            className={`console-line flex gap-3 ${
              line.tone === "live"
                ? "-mx-2 rounded-md bg-[var(--signal-tint)] px-2 py-1.5 text-signal"
                : ""
            }`}
            style={{ animationDelay: `${160 + i * 340}ms` }}
          >
            <span className="flex-none tabular-nums text-ink-faint">{line.time}</span>
            <span
              className={
                line.tone === "ok"
                  ? "text-success"
                  : line.tone === "live"
                    ? "text-signal"
                    : "text-ink-muted"
              }
            >
              <span className="whitespace-pre">{line.text}</span>
              {line.tone === "live" && (
                <span className="caret ml-0.5 inline-block w-[7px] bg-current">
                  &nbsp;
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

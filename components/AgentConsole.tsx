export interface ConsoleLine { time: string; text: string }
const script: ConsoleLine[] = [
  { time: "09:24:01", text: "request       support ticket received" },
  { time: "09:24:02", text: "access        permitted knowledge sources only" },
  { time: "09:24:04", text: "retrieve      policy and account context" },
  { time: "09:24:06", text: "draft         response with source references" },
  { time: "09:24:07", text: "review        human approval required" },
  { time: "09:25:11", text: "approve       operator confirms response" },
  { time: "09:25:12", text: "record        decision and outcome logged" },
];

export default function AgentConsole({ className = "" }: { className?: string }) {
  return <figure className={`agent-example ${className}`}>
    <figcaption>An example workflow: assisted customer operations</figcaption>
    <div className="agent-log" aria-label="Illustrative business workflow">{script.map(line => <div key={line.time}><time>{line.time}</time><span>{line.text}</span></div>)}</div>
    <p className="agent-example-note">Illustrative sequence. The workflow, permissions and approval steps are defined with your team.</p>
  </figure>;
}

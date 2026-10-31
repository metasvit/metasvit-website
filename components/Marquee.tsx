const items = ["Workflow discovery", "AI agents", "Systems integration", "Software architecture", "Cloud deployment", "Team enablement"];

export default function Marquee() {
  return <div className="marquee-wrap"><div className="shell marquee-track" aria-label="AI transformation capabilities">{items.map(item => <span key={item}>{item}</span>)}</div></div>;
}

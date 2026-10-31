export const deliverySteps = [
  {
    id: "discover", number: "01", title: "Understand the work",
    summary: "Find the workflow where AI can make a measurable difference.",
    description: "Work with the people doing the job. Map the process, data, systems and exceptions. Agree on a baseline and choose one useful workflow with a business owner.",
    deliverables: ["Workflow and data-access map", "Baseline for time, cost and quality", "Prioritised opportunities and a scoped build plan"],
  },
  {
    id: "build", number: "02", title: "Build with your team",
    summary: "Prototype against real constraints and connect existing systems.",
    description: "Engineers and domain experts work together in a shared delivery loop. Connect the tools you already use, test against representative examples and involve users before the workflow goes live.",
    deliverables: ["Working prototype and reviewed integrations", "Evaluation examples and acceptance criteria", "Shared code, documentation and decision record"],
  },
  {
    id: "deploy", number: "03", title: "Prove it in production",
    summary: "Release with evaluations, permissions and a clear operational owner.",
    description: "Set the permissions, human checkpoints, monitoring and recovery path. Release to a defined group, compare results with the baseline and decide what is ready to expand.",
    deliverables: ["Production release and go-live checklist", "Monitoring, escalation and rollback plan", "Measured results against the agreed baseline"],
  },
  {
    id: "scale", number: "04", title: "Make it repeatable",
    summary: "Train your people and extend what works to the next workflow.",
    description: "Turn useful integrations and evaluation methods into capabilities your team can maintain. Train users and technical owners, then prioritise the next workflow using what the first deployment taught us.",
    deliverables: ["Team training and operating runbooks", "Reusable integrations and evaluation approach", "Next-workflow roadmap and support agreement"],
  },
];

export const outcomeMeasures = [
  { title: "Time", description: "Cycle time and manual handling per completed task." },
  { title: "Quality", description: "Acceptance rate, corrections and unresolved exceptions." },
  { title: "Cost", description: "Engineering, model and operating cost per useful outcome." },
  { title: "Adoption", description: "Whether the intended users keep using the workflow." },
];

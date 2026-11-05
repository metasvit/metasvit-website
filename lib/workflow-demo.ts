// Fictional fixtures. This walkthrough performs no inference or external I/O.
export type WorkflowCase = {
  id: string;
  title: string;
  account: string;
  subject: string;
  message: string;
  route: string;
  evidence: { source: string; text: string }[];
  check: string;
  draft: string;
  approvalAllowed: boolean;
  handoff: string;
};

export const workflowCases: WorkflowCase[] = [
  {
    id: "delivery",
    title: "Delivery update",
    account: "Example Alder Supply",
    subject: "Delivery date for order DEMO-1042",
    message: "Hello, could you confirm the expected delivery date for DEMO-1042? We need to plan the receiving shift. Thanks, Sam.",
    route: "Order status",
    evidence: [
      { source: "Order fixture DEMO-1042", text: "Account: Example Alder Supply. Status: dispatched. Carrier estimate: 12 November 2026. Last checked: 5 November 2026. This is an estimate, not a guarantee." },
      { source: "Demo policy 1.2 / delivery updates", text: "Match the customer account and order reference. Quote the carrier estimate as an estimate. A person approves every external reply." },
    ],
    check: "Account and order match. Delivery information is available. Keep the estimated date qualified.",
    draft: "Hi Sam, order DEMO-1042 has been dispatched. The carrier’s current estimated delivery date is 12 November 2026. This date is an estimate and may change. Best, Customer Operations",
    approvalAllowed: true,
    handoff: "Customer operations reviewer",
  },
  {
    id: "missing",
    title: "Missing reference",
    account: "Example Birch Works",
    subject: "Where is our shipment?",
    message: "Hi, we placed an order last week and need an update. Can you check when it arrives? Regards, Alex.",
    route: "Clarification needed",
    evidence: [
      { source: "Order lookup fixture", text: "No unique order reference was supplied. A customer name alone is insufficient to select an order. No order was selected." },
      { source: "Demo policy 1.2 / missing information", text: "If a unique order cannot be identified, ask for its reference. Do not infer dates or reveal details from another order. Route the draft to a person." },
    ],
    check: "Order reference missing. The workflow stops before making an order-specific claim. A reviewer handles the clarification.",
    draft: "Hi Alex, could you share the order reference from your confirmation? We need it to identify the correct shipment before checking its delivery status. Best, Customer Operations",
    approvalAllowed: false,
    handoff: "Customer operations: request an order reference",
  },
  {
    id: "exception",
    title: "Cancellation exception",
    account: "Example Cedar Trading",
    subject: "Cancel DEMO-2087 today",
    message: "Please cancel order DEMO-2087 immediately. We no longer need it. Thanks, Jordan.",
    route: "Policy exception",
    evidence: [
      { source: "Order fixture DEMO-2087", text: "Account: Example Cedar Trading. Status: dispatched. Cancellation window: closed. No cancellation or refund has been actioned." },
      { source: "Demo policy 1.2 / cancellation", text: "Only orders not yet dispatched can enter the normal cancellation flow. Dispatched orders require a service lead to review the request. Never promise cancellation or a refund." },
    ],
    check: "Cancellation request conflicts with dispatched status. Escalate; do not cancel, refund or promise an outcome.",
    draft: "Hi Jordan, order DEMO-2087 is already dispatched, so I cannot confirm a cancellation. A service lead will need to review your request and available options. Best, Customer Operations",
    approvalAllowed: false,
    handoff: "Service lead: dispatched-order cancellation review",
  },
];

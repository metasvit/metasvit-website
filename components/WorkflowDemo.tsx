"use client";

import { useState } from "react";
import { workflowCases, type WorkflowCase } from "@/lib/workflow-demo";
import styles from "./WorkflowDemo.module.css";

function CaseWorkbench({ item }: { item: WorkflowCase }) {
  const [processed, setProcessed] = useState(false);
  const [draft, setDraft] = useState(item.draft);
  const [checked, setChecked] = useState(false);
  const [decision, setDecision] = useState<"approved" | "escalated" | null>(null);
  const [events, setEvents] = useState<string[]>([]);

  function process() {
    setProcessed(true);
    setEvents(["Request classified from the selected fixture.", "Order and policy fixtures checked.", item.approvalAllowed ? "Draft ready for human review." : "Exception held for human handoff."]);
  }

  function decide(value: "approved" | "escalated") {
    // UI guard as well as disabled controls; never executes a business action.
    if (!processed || decision || (value === "approved" && (!item.approvalAllowed || !checked || !draft.trim()))) return;
    setDecision(value);
    setEvents(previous => [...previous, value === "approved" ? "Reviewer approval recorded in this demo. Nothing sent." : `Demo handoff recorded: ${item.handoff}. Nothing sent.`]);
  }

  return <div className={styles.workbench}>
    <div className={styles.message}>
      <p className={styles.label}>Incoming request</p>
      <h2>{item.subject}</h2>
      <p className={styles.muted}>{item.account} / fictional account</p>
      <p className={styles.email}>{item.message}</p>
      <button className="button button-primary" type="button" onClick={process} disabled={processed}>Review this request</button>
      <p className={styles.small}>A fixed scenario runs locally. No model, inbox or order system is connected.</p>
    </div>

    <div className={styles.analysis}>
      <p className={styles.label}>Evidence and decision</p>
      {processed ? <>
        <h2>{item.route}</h2>
        <p className={item.approvalAllowed ? styles.ready : styles.held}>{item.approvalAllowed ? "Ready for human review" : "Held for escalation"}</p>
        {item.evidence.map(source => <details key={source.source} open className={styles.source}><summary>{source.source}</summary><p>{source.text}</p></details>)}
        <p className={styles.check}>{item.check}</p>
      </> : <div className={styles.empty}><h2>Check before acting.</h2><p>Review the request to see the order facts, policy and proposed response.</p></div>}
    </div>

    <div className={styles.review}>
      <p className={styles.label}>Human review</p>
      {processed ? <>
        <label className={styles.draftLabel} htmlFor="workflow-draft">Proposed reply</label>
        <textarea id="workflow-draft" rows={8} value={draft} readOnly={decision !== null} onChange={event => { setDraft(event.target.value); setChecked(false); }} />
        {item.approvalAllowed ? <label className={styles.confirm}><input type="checkbox" checked={checked} disabled={decision !== null} onChange={event => setChecked(event.target.checked)} />I checked the order, policy and reply.</label> : <p className={styles.small}>Approval is blocked for this scenario. A person must resolve the missing information or policy exception.</p>}
        <div className={styles.actions}>
          <button className="button button-primary" type="button" disabled={!item.approvalAllowed || !checked || !draft.trim() || decision !== null} onClick={() => decide("approved")}>Record approval</button>
          <button className="button button-secondary" type="button" disabled={decision !== null} onClick={() => decide("escalated")}>Escalate</button>
        </div>
        <p className={styles.small}>Both actions record a local demo event. Neither sends a message nor changes an order.</p>
      </> : <div className={styles.empty}><h2>You own the decision.</h2><p>The proposed reply and approval controls appear after the evidence check.</p></div>}
      <p role="status" aria-live="polite" className={styles.result}>{decision === "approved" ? "Approved in demo. No message was sent." : decision === "escalated" ? "Escalated in demo. No external task was created." : processed ? (item.approvalAllowed ? "Awaiting reviewer approval." : "Approval blocked. Escalation required.") : "Ready to review a synthetic request."}</p>
    </div>

    {events.length > 0 ? <div className={styles.eventLog}><h2>Run record</h2><ol>{events.map((event, index) => <li key={`${index}-${event}`}>{event}</li>)}</ol></div> : null}
  </div>;
}

export default function WorkflowDemo() {
  const [selectedId, setSelectedId] = useState(workflowCases[0].id);
  const [revision, setRevision] = useState(0);
  const selected = workflowCases.find(item => item.id === selectedId)!;
  return <div className={styles.demo}>
    <div className={styles.toolbar}>
      <div className={styles.cases} role="group" aria-label="Choose a synthetic scenario">
        {workflowCases.map((item, index) => <button type="button" key={item.id} aria-pressed={selectedId === item.id} onClick={() => setSelectedId(item.id)}><span aria-hidden="true">0{index + 1}</span>{item.title}</button>)}
      </div>
      <button type="button" className={styles.reset} onClick={() => setRevision(value => value + 1)}>Reset scenario</button>
    </div>
    <CaseWorkbench key={`${selectedId}-${revision}`} item={selected} />
    <noscript><p>Enable JavaScript to try the interactive walkthrough. The example maps an incoming order request to source checks, a draft reply and a human approval or escalation. All data is synthetic.</p></noscript>
  </div>;
}

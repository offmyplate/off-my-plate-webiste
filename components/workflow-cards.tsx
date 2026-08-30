import { Icon } from "./icons";

const workflows = [
  {
    icon: "email" as const,
    title: "Email → Action",
    text: "Understand incoming emails, extract information, update systems, and draft replies.",
  },
  {
    icon: "document" as const,
    title: "Documents → Data",
    text: "Extract and validate information from PDFs, invoices, forms, and other documents.",
  },
  {
    icon: "meeting" as const,
    title: "Meetings → Tasks",
    text: "Turn conversations into tickets, CRM updates, tasks, and follow-ups.",
  },
  {
    icon: "knowledge" as const,
    title: "Knowledge → Answers",
    text: "Give employees or customers reliable answers using company knowledge.",
  },
  {
    icon: "systems" as const,
    title: "System → System",
    text: "Move data and trigger actions between CRM, ERP, email, Slack, Jira, and other tools.",
  },
];

export function WorkflowCards() {
  return (
    <div className="card-grid">
      {workflows.map((workflow, index) => (
        <article className="workflow-card reveal" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties} key={workflow.title}>
          <span className="card-number">0{index + 1}</span>
          <span className="card-icon"><Icon name={workflow.icon} /></span>
          <h3>{workflow.title}</h3>
          <p>{workflow.text}</p>
        </article>
      ))}
      <article className="workflow-card your-workflow reveal" style={{ "--delay": "300ms" } as React.CSSProperties}>
        <span className="card-number">YOUR TURN</span>
        <span className="card-icon"><Icon name="spark" /></span>
        <h3>Your Workflow</h3>
        <p>If your team does something repeatedly, tell us about it. We&apos;ll figure out whether it can be automated.</p>
        <a href="#contact">Bring us your process <Icon name="arrow" /></a>
      </article>
    </div>
  );
}

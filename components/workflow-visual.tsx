import { Icon } from "./icons";

export function WorkflowVisual() {
  return (
    <div className="workflow-shell" aria-label="Example automated workflow">
      <div className="workflow-topbar">
        <div>
          <span className="eyebrow">LIVE WORKFLOW</span>
          <strong>Customer request handling</strong>
        </div>
        <span className="status"><i /> Automated</span>
      </div>

      <div className="workflow-stage">
        <div className="flow-node">
          <span className="node-icon"><Icon name="email" /></span>
          <span><small>TRIGGER</small><strong>New email arrives</strong></span>
          <b>01</b>
        </div>
        <span className="flow-line" aria-hidden="true"><i /></span>
        <div className="flow-node active">
          <span className="node-icon"><Icon name="spark" /></span>
          <span><small>AI ACTION</small><strong>Understands &amp; routes</strong></span>
          <span className="pulse" aria-hidden="true" />
        </div>
        <span className="flow-line" aria-hidden="true"><i /></span>
        <div className="flow-node">
          <span className="node-icon"><Icon name="systems" /></span>
          <span><small>OUTCOME</small><strong>Systems updated</strong></span>
          <b>03</b>
        </div>
      </div>

      <div className="workflow-footer">
        <span>Connected to</span>
        <div className="tool-chips" aria-label="Example connected tools">
          <i>CRM</i><i>INBOX</i><i>SLACK</i>
        </div>
        <span className="complete"><Icon name="check" /> Done in seconds</span>
      </div>
    </div>
  );
}

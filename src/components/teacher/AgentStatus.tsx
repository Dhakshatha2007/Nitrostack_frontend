interface AgentStatusProps {
  stage: number;
}

const agents = [
  { name: "Content Intelligence" },
  { name: "Accessibility Analysis" },
  { name: "Accessibility Transformation" },
  { name: "Learning & Progress" },
];

function AgentStatus({ stage }: AgentStatusProps) {
  if (stage === 0) return null;

  return (
    <div style={{ marginTop: "30px", background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
      <h3 style={{ fontSize: "15px", color: "#111827", marginBottom: "18px" }}>Agent Pipeline</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {agents.map((agent, i) => {
          const stepNum = i + 1;
          const isDone = stage > stepNum;
          const isActive = stage === stepNum;
          return (
            <div key={agent.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: isDone ? "#16a34a" : isActive ? "#2563EB" : "#e5e7eb",
                color: isDone || isActive ? "white" : "#9ca3af",
                fontSize: "14px", fontWeight: 700, flexShrink: 0,
              }}>
                {isDone ? "OK" : stepNum}
              </div>
              <span style={{ fontSize: "14px", color: isDone || isActive ? "#111827" : "#9ca3af", fontWeight: isActive ? 600 : 400 }}>
                {agent.name} Agent
                {isActive && <span style={{ color: "#2563EB" }}> - working...</span>}
                {isDone && <span style={{ color: "#16a34a" }}> - done</span>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AgentStatus;
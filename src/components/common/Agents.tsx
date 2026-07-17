const agents = [
  {
    icon: "🧠",
    name: "Content Intelligence Agent",
    role: "Understands the uploaded lesson",
    details: "Extracts topics, diagrams, graphs, tables, and equations using PDF parsing, OCR, and vision analysis.",
  },
  {
    icon: "🔍",
    name: "Accessibility Analysis Agent",
    role: "Audits accessibility barriers",
    details: "Detects missing descriptions, captions, and language gaps, then generates an accessibility score.",
  },
  {
    icon: "⚡",
    name: "Accessibility Transformation Agent",
    role: "Generates personalized versions",
    details: "Creates audio lessons, captions, transcripts, and multilingual versions for every learner type.",
  },
  {
    icon: "📊",
    name: "Learning & Progress Agent",
    role: "Measures learning outcomes",
    details: "Generates quizzes, evaluates answers, and tracks student progress with teacher analytics.",
  },
];

function Agents() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", color: "#111827", marginBottom: "10px" }}>
        Our 4 AI Agents
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "50px" }}>
        Not one chatbot — a coordinated team of AI specialists.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        {agents.map((agent) => (
          <div
            key={agent.name}
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "30px 24px",
              textAlign: "left",
              transition: "transform 0.2s",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{agent.icon}</div>
            <h3 style={{ fontSize: "17px", color: "#111827", marginBottom: "6px" }}>
              {agent.name}
            </h3>
            <p style={{ fontSize: "13px", color: "#2563EB", fontWeight: 600, marginBottom: "12px" }}>
              {agent.role}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
              {agent.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agents;
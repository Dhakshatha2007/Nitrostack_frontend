const features = [
  { icon: "⚡", title: "One Upload, Every Version", description: "Teachers upload a lesson once — no manual work creating separate accessible formats." },
  { icon: "🤖", title: "Multi-Agent AI Pipeline", description: "Four specialized agents collaborate, coordinated through NitroStack." },
  { icon: "🎯", title: "Automatic Accessibility Audit", description: "Every lesson is scored and checked for missing captions, descriptions, and language coverage." },
  { icon: "🗣️", title: "Multilingual by Default", description: "Content is available in English, Tamil, and Hindi without extra teacher effort." },
  { icon: "📈", title: "Real-Time Progress Tracking", description: "Teachers see accessibility analytics and student learning outcomes in one dashboard." },
  { icon: "🔌", title: "Built for Integration", description: "Designed to plug into Moodle, Google Classroom, and Canvas in future versions." },
];

function Features() {
  return (
    <section style={{ padding: "80px 60px", background: "white", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", color: "#111827", marginBottom: "50px" }}>Features</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              textAlign: "left",
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
            }}
          >
            <div style={{ fontSize: "30px", marginBottom: "12px" }}>{f.icon}</div>
            <h3 style={{ fontSize: "16px", color: "#111827", marginBottom: "8px" }}>{f.title}</h3>
            <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.6" }}>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
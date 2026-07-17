const learners = [
  {
    icon: "👁️",
    title: "Visually Impaired Students",
    description: "Get audio lessons, diagram descriptions, and screen-reader-friendly notes automatically generated from the original content.",
  },
  {
    icon: "👂",
    title: "Hearing Impaired Students",
    description: "Receive lecture transcripts, captions, and visual summaries so no spoken content is ever missed.",
  },
  {
    icon: "🌐",
    title: "Multilingual Learners",
    description: "Access the same lesson translated into Tamil, Hindi, and English — removing the language barrier to learning.",
  },
];

function WhoWeHelp() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", color: "#111827", marginBottom: "10px" }}>
        Who We Help
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "50px" }}>
        One lesson, transformed for every kind of learner.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        {learners.map((learner) => (
          <div
            key={learner.title}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "36px 24px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>{learner.icon}</div>
            <h3 style={{ fontSize: "18px", color: "#111827", marginBottom: "12px" }}>
              {learner.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.7" }}>
              {learner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoWeHelp;
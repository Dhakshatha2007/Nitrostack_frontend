const steps = [
  {
    number: "01",
    title: "Teacher Uploads a Lesson",
    description: "Upload a PDF, PPT, image, or video — just once.",
  },
  {
    number: "02",
    title: "AI Agents Analyze the Content",
    description: "Diagrams, text, audio, and structure are understood automatically.",
  },
  {
    number: "03",
    title: "Accessibility Barriers Identified",
    description: "The system detects missing captions, descriptions, and language gaps.",
  },
  {
    number: "04",
    title: "Personalized Versions Generated",
    description: "Audio, captions, translations, and visual summaries — created for every learner.",
  },
];

function HowItWorks() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", color: "#111827", marginBottom: "50px" }}>
        How EduAccess AI Works
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "30px 20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#2563EB",
                marginBottom: "10px",
              }}
            >
              {step.number}
            </div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#111827" }}>
              {step.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
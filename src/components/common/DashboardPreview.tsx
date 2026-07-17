function DashboardPreview() {
  return (
    <section style={{ padding: "80px 60px", background: "#f9fafb", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", color: "#111827", marginBottom: "10px" }}>
        Built for Teachers and Students
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "50px" }}>
        Two dashboards, one seamless accessible learning loop.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          marginInline: "auto",
        }}
      >
        {/* Teacher Preview */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#2563EB",
              background: "#eff6ff",
              padding: "4px 10px",
              borderRadius: "20px",
            }}
          >
            TEACHER VIEW
          </span>
          <h3 style={{ marginTop: "16px", marginBottom: "10px", color: "#111827" }}>
            Upload once. Get an accessibility report instantly.
          </h3>
          <ul style={{ color: "#6b7280", fontSize: "14px", lineHeight: "2", paddingLeft: "18px" }}>
            <li>Lesson upload with live agent status</li>
            <li>Accessibility score &amp; barrier report</li>
            <li>Student progress analytics</li>
          </ul>
        </div>

        {/* Student Preview */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#16a34a",
              background: "#f0fdf4",
              padding: "4px 10px",
              borderRadius: "20px",
            }}
          >
            STUDENT VIEW
          </span>
          <h3 style={{ marginTop: "16px", marginBottom: "10px", color: "#111827" }}>
            Automatically served the version that fits you.
          </h3>
          <ul style={{ color: "#6b7280", fontSize: "14px", lineHeight: "2", paddingLeft: "18px" }}>
            <li>Audio, captions, or translated lesson</li>
            <li>Quiz generated from the same content</li>
            <li>Personal progress tracking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
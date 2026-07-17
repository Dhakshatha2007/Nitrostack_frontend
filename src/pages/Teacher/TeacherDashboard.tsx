
import Sidebar from "../../components/layout/Sidebar";

function TeacherDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="teacher" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Welcome, Teacher</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Here's an overview of your lessons and student accessibility.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { label: "Lessons Uploaded", value: "0" },
            { label: "Avg Accessibility Score", value: "-" },
            { label: "Active Students", value: "0" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "8px" }}>{stat.label}</p>
              <p style={{ fontSize: "28px", fontWeight: 700, color: "#111827" }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TeacherDashboard;

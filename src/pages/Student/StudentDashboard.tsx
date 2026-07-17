import Sidebar from "../../components/layout/Sidebar";

function StudentDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="student" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Welcome, Student</h1>
        <p style={{ color: "#6b7280" }}>
          Your personalized lessons will appear here.
        </p>
      </main>
    </div>
  );
}

export default StudentDashboard;

import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import ReportCard from "../../components/teacher/ReportCard";
import Button from "../../components/common/Button";

const reportItems = [
  { title: "Captions", status: "good" as const, detail: "Captions generated for all spoken content in the lesson." },
  { title: "Image & Diagram Descriptions", status: "warning" as const, detail: "3 of 5 diagrams have auto-generated alt text. 2 need review." },
  { title: "Audio Narration", status: "good" as const, detail: "Full audio version generated for visually impaired students." },
  { title: "Multilingual Coverage", status: "missing" as const, detail: "Tamil translation not yet available for this lesson." },
  { title: "Transcript", status: "good" as const, detail: "Full text transcript generated and linked." },
];

const score = 82;

function AccessibilityReport() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="teacher" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Accessibility Report</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>Automated analysis of your uploaded lesson.</p>
        <div style={{ maxWidth: "700px" }}>
          <div style={{ background: "white", borderRadius: "16px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 700, color: "#2563EB", flexShrink: 0 }}>
              {score}%
            </div>
            <div>
              <h3 style={{ margin: "0 0 6px 0", color: "#111827" }}>Accessibility Score</h3>
              <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>Good coverage overall - 1 gap detected in language support.</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {reportItems.map((item) => <ReportCard key={item.title} {...item} />)}
          </div>
          <div style={{ marginTop: "28px" }}>
            <Button onClick={() => navigate("/teacher")} fullWidth>Back to Dashboard</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AccessibilityReport;

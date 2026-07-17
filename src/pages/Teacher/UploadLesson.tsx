
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import UploadCard from "../../components/teacher/UploadCard";
import AgentStatus from "../../components/teacher/AgentStatus";
import Button from "../../components/common/Button";

function UploadLesson() {
  const [file, setFile] = useState<File | null>(null);
  const [stage, setStage] = useState(0);
  const navigate = useNavigate();

  const handleProcess = () => {
    if (!file) return;
    setStage(1);
    let step = 1;
    const interval = setInterval(() => {
      step++;
      setStage(step);
      if (step >= 5) clearInterval(interval);
    }, 1200);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="teacher" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Upload Lesson</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Upload a lesson once - our AI agents will handle the rest.
        </p>
        <div style={{ maxWidth: "600px" }}>
          <UploadCard onFileSelect={setFile} />
          {file && stage === 0 && (
            <div style={{ marginTop: "20px" }}>
              <Button onClick={handleProcess} fullWidth>Process Lesson</Button>
            </div>
          )}
          <AgentStatus stage={stage} />
          {stage >= 5 && (
            <div style={{ marginTop: "20px" }}>
              <Button onClick={() => navigate("/teacher/report")} fullWidth>View Accessibility Report</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default UploadLesson;

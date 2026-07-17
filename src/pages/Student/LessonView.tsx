
import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

type ViewMode = "text" | "audio" | "translated";

function LessonView() {
  const [mode, setMode] = useState<ViewMode>("text");
  const [showCaptions, setShowCaptions] = useState(true);

  const lessonText = `Photosynthesis is the process by which green plants convert light energy into chemical energy. Using sunlight, water, and carbon dioxide, plants produce glucose and release oxygen as a byproduct. This process occurs mainly in the leaves, within structures called chloroplasts.`;

  const translatedText = `Photosynthesis ennathu, pachai thavaram oliyai vetti sakthiyaaga maatrum seyalpaadu aagum. Sooriya oli, thanneer, matrum carbon dioxide payanpaduthi, thavarangal glucose-ai urpathi seithu, oxygen-ai veliyettukirathu.`;

  const tabs: { key: ViewMode; label: string }[] = [
    { key: "text", label: "Read" },
    { key: "audio", label: "Listen" },
    { key: "translated", label: "Tamil" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="student" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Photosynthesis - Lesson 4</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Choose how you would like to experience this lesson.
        </p>

        <div style={{ maxWidth: "700px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", background: "white", padding: "6px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", width: "fit-content" }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setMode(tab.key)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  background: mode === tab.key ? "#2563EB" : "transparent",
                  color: mode === tab.key ? "white" : "#6b7280",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ background: "white", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            {mode === "text" && (
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#111827" }}>{lessonText}</p>
            )}

            {mode === "audio" && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", padding: "16px", background: "#f9fafb", borderRadius: "12px" }}>
                  <button style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2563EB", color: "white", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 700 }}>
                    Play
                  </button>
                  <div style={{ flex: 1, height: "6px", background: "#e5e7eb", borderRadius: "3px" }}>
                    <div style={{ width: "30%", height: "100%", background: "#2563EB", borderRadius: "3px" }} />
                  </div>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>1:24 / 4:10</span>
                </div>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151", marginBottom: "16px", cursor: "pointer" }}>
                  <input type="checkbox" checked={showCaptions} onChange={(e) => setShowCaptions(e.target.checked)} />
                  Show captions
                </label>
                {showCaptions && (
                  <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#374151", background: "#f9fafb", padding: "16px", borderRadius: "10px" }}>
                    {lessonText}
                  </p>
                )}
              </div>
            )}

            {mode === "translated" && (
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#111827" }}>{translatedText}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LessonView;

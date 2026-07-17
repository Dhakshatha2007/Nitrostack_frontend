import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Button from "../../components/common/Button";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What do plants use to convert light energy into chemical energy?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "Which gas do plants release as a byproduct of photosynthesis?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "Where does photosynthesis mainly occur in a plant?",
    options: ["Roots", "Stem", "Leaves", "Flowers"],
    correctIndex: 2,
  },
];

function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers({ ...answers, [qId]: optionIndex });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = questions.reduce((total, q) => {
    return answers[q.id] === q.correctIndex ? total + 1 : total;
  }, 0);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="student" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Quiz: Photosynthesis</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Answer all questions, then submit to see your score.
        </p>

        <div style={{ maxWidth: "700px" }}>
          {submitted && (
            <div style={{ background: "white", borderRadius: "16px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, color: "#2563EB", flexShrink: 0 }}>
                {score}/{questions.length}
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px 0", color: "#111827" }}>Quiz Complete</h3>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
                  You answered {score} out of {questions.length} questions correctly.
                </p>
              </div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {questions.map((q, qIndex) => (
              <div key={q.id} style={{ background: "white", borderRadius: "14px", padding: "22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827", marginBottom: "14px" }}>
                  {qIndex + 1}. {q.question}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {q.options.map((option, optIndex) => {
                    const isSelected = answers[q.id] === optIndex;
                    const isCorrect = optIndex === q.correctIndex;
                    let borderColor = "#e5e7eb";
                    let bg = "white";
                    if (submitted && isSelected && isCorrect) { borderColor = "#16a34a"; bg = "#f0fdf4"; }
                    else if (submitted && isSelected && !isCorrect) { borderColor = "#dc2626"; bg = "#fef2f2"; }
                    else if (submitted && isCorrect) { borderColor = "#16a34a"; bg = "#f0fdf4"; }
                    else if (isSelected) { borderColor = "#2563EB"; bg = "#eff6ff"; }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelect(q.id, optIndex)}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: `2px solid ${borderColor}`,
                          background: bg,
                          cursor: submitted ? "default" : "pointer",
                          fontSize: "14px",
                          color: "#111827",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            {!submitted ? (
              <Button onClick={handleSubmit} fullWidth>Submit Quiz</Button>
            ) : (
              <Button onClick={() => navigate("/student/progress")} fullWidth>View Progress</Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;

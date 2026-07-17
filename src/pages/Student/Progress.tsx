import Sidebar from "../../components/layout/Sidebar";

interface LessonProgress {
  title: string;
  completed: boolean;
  quizScore: string;
}

const lessons: LessonProgress[] = [
  { title: "Photosynthesis", completed: true, quizScore: "2/3" },
  { title: "The Water Cycle", completed: false, quizScore: "-" },
  { title: "Cell Structure", completed: false, quizScore: "-" },
];

function Progress() {
  const completedCount = lessons.filter((l) => l.completed).length;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="student" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>My Progress</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Track your completed lessons and quiz scores.
        </p>

        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              { label: "Lessons Completed", value: `${completedCount}/${lessons.length}` },
              { label: "Average Quiz Score", value: "67%" },
              { label: "Streak", value: "1 day" },
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

          <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize: "15px", color: "#111827", marginBottom: "18px" }}>Lesson History</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    background: "#f9fafb",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: lesson.completed ? "#16a34a" : "#e5e7eb",
                        color: lesson.completed ? "white" : "#9ca3af",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {lesson.completed ? "OK" : "-"}
                    </div>
                    <span style={{ fontSize: "14px", color: "#111827" }}>{lesson.title}</span>
                  </div>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>Quiz: {lesson.quizScore}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Progress;

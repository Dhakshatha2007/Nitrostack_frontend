import Sidebar from "../../components/layout/Sidebar";

interface LessonStat {
  title: string;
  score: number;
  studentsViewed: number;
}

const lessonStats: LessonStat[] = [
  { title: "Photosynthesis", score: 82, studentsViewed: 24 },
  { title: "The Water Cycle", score: 74, studentsViewed: 18 },
  { title: "Cell Structure", score: 90, studentsViewed: 12 },
];

function Analytics() {
  const avgScore = Math.round(
    lessonStats.reduce((sum, l) => sum + l.score, 0) / lessonStats.length
  );
  const totalViews = lessonStats.reduce((sum, l) => sum + l.studentsViewed, 0);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="teacher" />
      <main style={{ flex: 1, padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>Analytics</h1>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Class-wide accessibility performance across all lessons.
        </p>

        <div style={{ maxWidth: "800px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              { label: "Lessons Uploaded", value: `${lessonStats.length}` },
              { label: "Avg Accessibility Score", value: `${avgScore}%` },
              { label: "Total Student Views", value: `${totalViews}` },
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
            <h3 style={{ fontSize: "15px", color: "#111827", marginBottom: "18px" }}>Lesson Performance</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {lessonStats.map((lesson) => (
                <div key={lesson.title}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "14px", color: "#111827", fontWeight: 600 }}>{lesson.title}</span>
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>
                      {lesson.score}% - {lesson.studentsViewed} students
                    </span>
                  </div>
                  <div style={{ height: "8px", background: "#e5e7eb", borderRadius: "4px" }}>
                    <div
                      style={{
                        width: `${lesson.score}%`,
                        height: "100%",
                        background: lesson.score >= 80 ? "#16a34a" : lesson.score >= 60 ? "#d97706" : "#dc2626",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analytics;

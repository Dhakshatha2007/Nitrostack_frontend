import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  role: "teacher" | "student";
}

function Sidebar({ role }: SidebarProps) {
  const location = useLocation();

  const teacherLinks = [
    { path: "/teacher", label: "Dashboard" },
    { path: "/teacher/upload", label: "Upload Lesson" },
    { path: "/teacher/report", label: "Accessibility Report" },
    { path: "/teacher/analytics", label: "Analytics" },
  ];

  const studentLinks = [
    { path: "/student", label: "Dashboard" },
    { path: "/student/lesson", label: "My Lesson" },
    { path: "/student/quiz", label: "Quiz" },
    { path: "/student/progress", label: "Progress" },
  ];

  const links = role === "teacher" ? teacherLinks : studentLinks;

  return (
    <aside style={{ width: "220px", minHeight: "100vh", background: "#111827", color: "white", padding: "24px 16px", boxSizing: "border-box" }}>
      <h3 style={{ color: "#2563EB", marginBottom: "30px", paddingLeft: "8px" }}>EduAccess AI</h3>
      <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                color: isActive ? "white" : "#9ca3af",
                background: isActive ? "#2563EB" : "transparent",
                fontSize: "14px",
              }}
            >
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
interface ReportCardProps {
  title: string;
  status: "good" | "warning" | "missing";
  detail: string;
}

function ReportCard({ title, status, detail }: ReportCardProps) {
  const config = {
    good: { color: "#16a34a", bg: "#f0fdf4", icon: "✓", label: "Covered" },
    warning: { color: "#d97706", bg: "#fffbeb", icon: "!", label: "Partial" },
    missing: { color: "#dc2626", bg: "#fef2f2", icon: "✕", label: "Missing" },
  }[status];

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "white", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "18px 20px" }}>
      <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: config.bg, color: config.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>
        {config.icon}
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <h4 style={{ fontSize: "14px", color: "#111827", margin: 0 }}>{title}</h4>
          <span style={{ fontSize: "11px", fontWeight: 600, color: config.color, background: config.bg, padding: "2px 8px", borderRadius: "10px" }}>
            {config.label}
          </span>
        </div>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

export default ReportCard;
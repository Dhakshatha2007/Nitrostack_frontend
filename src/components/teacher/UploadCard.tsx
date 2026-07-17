
import { useState } from "react";

interface UploadCardProps {
  onFileSelect: (file: File) => void;
}

function UploadCard({ onFileSelect }: UploadCardProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
      }}
      style={{
        border: isDragging ? "2px dashed #2563EB" : "2px dashed #d1d5db",
        borderRadius: "16px",
        padding: "50px 20px",
        textAlign: "center",
        background: isDragging ? "#eff6ff" : "white",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 700, color: "#2563EB", marginBottom: "12px", letterSpacing: "1px" }}>UPLOAD</div>
      <p style={{ color: "#111827", fontWeight: 600, marginBottom: "6px" }}>
        {fileName ? fileName : "Drag & drop a lesson file here"}
      </p>
      <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "20px" }}>
        Supports PDF, PPT, image, or video
      </p>
      <label style={{ display: "inline-block", padding: "10px 20px", background: "#2563EB", color: "white", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
        Choose File
        <input
          type="file"
          accept=".pdf,.ppt,.pptx,image/*,video/*"
          onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
}

export default UploadCard;

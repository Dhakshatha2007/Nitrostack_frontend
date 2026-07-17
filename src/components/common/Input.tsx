interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Input({ label, type = "text", value, onChange, placeholder }: InputProps) {
  return (
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label style={{ display: "block", fontSize: "13px", color: "#374151", marginBottom: "6px" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "14px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default Input;
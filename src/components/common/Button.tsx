interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

function Button({ children, onClick, variant = "primary", fullWidth }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: "8px",
        border: isPrimary ? "none" : "1px solid #d1d5db",
        background: isPrimary ? "#2563EB" : "white",
        color: isPrimary ? "white" : "#374151",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
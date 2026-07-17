import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"teacher" | "student">("teacher");
  const navigate = useNavigate();

  const handleRegister = () => {
    // TODO: connect to backend auth service
    if (role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/student");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9fafb",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2563EB", marginBottom: "6px" }}>EduAccess AI</h2>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "30px" }}>
          Create your account
        </p>

        <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
          <button
            onClick={() => setRole("teacher")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: role === "teacher" ? "2px solid #2563EB" : "1px solid #d1d5db",
              background: role === "teacher" ? "#eff6ff" : "white",
              color: "#374151",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Teacher
          </button>
          <button
            onClick={() => setRole("student")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: role === "student" ? "2px solid #2563EB" : "1px solid #d1d5db",
              background: role === "student" ? "#eff6ff" : "white",
              color: "#374151",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Student
          </button>
        </div>

        <Input label="Full Name" value={name} onChange={setName} placeholder="Your name" />
        <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />

        <div style={{ marginTop: "10px" }}>
          <Button onClick={handleRegister} fullWidth>
            Create Account
          </Button>
        </div>

        <p style={{ marginTop: "20px", fontSize: "13px", color: "#6b7280" }}>
          Already have an account? <Link to="/login" style={{ color: "#2563EB" }}>Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
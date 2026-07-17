import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ color: "#2563EB" }}>EduAccess AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
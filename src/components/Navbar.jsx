import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid #2e2e2e",
      }}
    >
      <span
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "16px",
          color: "#f0ede8",
        }}
      >
        Robinson<span style={{ color: "#a0998f" }}>.</span>dev
      </span>
      <div style={{ display: "flex", gap: "20px" }}>
        {[
          ["/", "Home"],
          ["/about", "About"],
        ].map(([path, label]) => (
          <Link
            key={path}
            to={path}
            style={{
              color: pathname === path ? "#f0ede8" : "#6b6560",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

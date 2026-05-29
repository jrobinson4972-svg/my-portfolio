const projects = [
  {
    title: "Project One",
    desc: "A cool web app built with React and a public API. Clean UI, fast, responsive.",
    tech: ["React", "JavaScript", "API"],
    icon: "⚡",
    featured: true,
    github: "https://github.com/jrobi",
    live: "#",
  },
  {
    title: "Project Two",
    desc: "A responsive landing page built from scratch with pure HTML and CSS.",
    tech: ["HTML", "CSS", "JS"],
    icon: "🎨",
    featured: false,
    github: "https://github.com/jrobi",
    live: "#",
  },
];

export default function Portfolio() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
      <h1
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "36px",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-1px",
          marginBottom: "8px",
        }}
      >
        My Work
      </h1>
      <p style={{ color: "#3d4f6a", marginBottom: "40px", fontSize: "14px" }}>
        A few things I've built so far.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#0d1320",
              border: `1px solid ${p.featured ? "#7c6fff33" : "#141e30"}`,
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#131929",
                  border: "1px solid #1a2840",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                {p.icon}
              </div>
              {p.featured && (
                <span
                  style={{
                    fontSize: "10px",
                    background: "#7c6fff18",
                    color: "#a89fff",
                    border: "1px solid #7c6fff33",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontWeight: 500,
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#e8eaf0",
                marginBottom: "8px",
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#3d4f6a",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              {p.desc}
            </p>
            <div
              style={{
                display: "flex",
                gap: "6px",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    color: "#3ecfaf",
                    background: "#0c1e1a",
                    border: "1px solid #1a3530",
                    padding: "3px 10px",
                    borderRadius: "6px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                paddingTop: "12px",
                borderTop: "1px solid #141e30",
              }}
            >
              <a href={p.github} style={{ fontSize: "12px", color: "#8892a4" }}>
                GitHub ↗
              </a>
              <a href={p.live} style={{ fontSize: "12px", color: "#7c6fff" }}>
                Live ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

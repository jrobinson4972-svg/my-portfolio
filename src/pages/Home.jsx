import profilePic from '../assets/me.jpg'
import { useEffect, useState } from "react";

const words = ["Robinson", "a Developer", "a Student", "a Creator"];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade + slide in on load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 100);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 60);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <main
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        marginTop: "-40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "60px",
          alignItems: "center",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <div
            style={{
              ...fadeUp(0.1),
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#242424",
              border: "1px solid #2e2e2e",
              borderRadius: "20px",
              padding: "6px 14px",
              fontSize: "12px",
              color: "#a0998f",
              fontWeight: 500,
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#a0998f",
                display: "inline-block",
              }}
            ></span>
            Open to opportunities
          </div>

          {/* Heading with typing */}
          <div style={fadeUp(0.2)}>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "56px",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#f0ede8",
                letterSpacing: "-2px",
                marginBottom: "20px",
              }}
            >
              Hi, I'm
              <br />
              <span style={{ color: "#c8c0b4" }}>{displayed}</span>
              <span
                style={{
                  color: "#a0998f",
                  animation: "blink 1s step-end infinite",
                }}
              >
                |
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div style={fadeUp(0.35)}>
            <p
              style={{
                color: "#6b6560",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "460px",
                marginBottom: "32px",
                fontWeight: 300,
              }}
            >
              Student Developer · Lifelong Learner · Problem Solver.
              <br />
              IT student from the Philippines, just starting my journey in web
              development. Still learning, but enjoying every step of it.
            </p>
          </div>

          {/* Buttons */}
          <div
            style={{
              ...fadeUp(0.5),
              display: "flex",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <a
              href="/about"
              style={{
                padding: "13px 28px",
                background: "#f0ede8",
                color: "#1a1a1a",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              About Me
            </a>
            <a
              href="https://github.com/jrobinson4972-svg"
              target="_blank"
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "#6b6560",
                border: "1px solid #2e2e2e",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Language pills */}
          <div
            style={{
              ...fadeUp(0.65),
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {["HTML", "CSS", "JavaScript", "React"].map((lang) => (
              <div
                key={lang}
                style={{
                  padding: "8px 18px",
                  background: "#242424",
                  border: "1px solid #2e2e2e",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "#a0998f",
                  fontWeight: 500,
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div
          style={{
            ...fadeUp(0.3),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #3a3530, #6b6560)",
                zIndex: 0,
              }}
            ></div>
            <img
              src={profilePic}
              alt="Robinson"
              style={{
                width: "260px",
                height: "300px",
                borderRadius: "20px",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Blink cursor keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}

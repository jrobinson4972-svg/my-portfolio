import { useEffect, useState } from "react";
import profilePic from "../assets/me.jpg";

const words = ["Robinson", "a Developer", "a Student", "a Creator"];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-wrapper {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
          width: 100%;
          max-width: 1100px;
        }
        .hero-photo {
          width: 150px;
          height: 170px;
          border-radius: 20px;
          object-fit: cover;
          object-position: top;
          display: block;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 768px) {
          .hero-inner {
            flex-direction: row !important;
            text-align: left !important;
            justify-content: space-between;
          }
          .hero-text {
            align-items: flex-start !important;
          }
          .hero-pills {
            justify-content: flex-start !important;
          }
          .hero-buttons {
            justify-content: flex-start !important;
          }
          .hero-photo {
            width: 260px !important;
            height: 300px !important;
          }
        }
      `}</style>

      <main className="hero-wrapper">
        <div className="hero-inner">
          {/* Text */}
          <div
            className="hero-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                marginBottom: "20px",
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

            <div style={fadeUp(0.2)}>
              <h1
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(32px, 8vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#f0ede8",
                  letterSpacing: "-1px",
                  marginBottom: "16px",
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

            <div style={fadeUp(0.35)}>
              <p
                style={{
                  color: "#6b6560",
                  fontSize: "clamp(14px, 3vw, 16px)",
                  lineHeight: 1.7,
                  maxWidth: "460px",
                  marginBottom: "28px",
                  fontWeight: 300,
                }}
              >
                CS student from the Philippines, just starting my journey in web
                development. Still learning, but enjoying every step of it.
              </p>
            </div>

            <div
              className="hero-buttons"
              style={{
                ...fadeUp(0.5),
                display: "flex",
                gap: "12px",
                marginBottom: "32px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href="#/about"
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

            <div
              className="hero-pills"
              style={{
                ...fadeUp(0.65),
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
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

          {/* Photo — only once */}
          <div style={fadeUp(0.3)}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, #3a3530, #6b6560)",
                  zIndex: 0,
                }}
              ></div>
              <img src={profilePic} alt="Robinson" className="hero-photo" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

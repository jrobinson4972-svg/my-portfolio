import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import profilePic from "../assets/me.jpg";

const skills = ["React", "JavaScript", "Vite", "HTML", "CSS", "Git", "GitHub"];
const hotSkills = ["React", "JavaScript", "Vite"];

export default function About() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        sentAt: new Date(),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#242424",
    border: "1px solid #2e2e2e",
    borderRadius: "10px",
    color: "#f0ede8",
    fontSize: "14px",
    fontFamily: "DM Sans, sans-serif",
    outline: "none",
    marginBottom: "12px",
  };

  return (
    <main style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 40px" }}>
      {/* Profile */}
      <div
        style={{
          ...fadeUp(0.1),
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #3a3530, #6b6560)",
            }}
          ></div>
          <img
            src={profilePic}
            alt="Robinson"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "16px",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
        <div>
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "#f0ede8",
              letterSpacing: "-0.5px",
            }}
          >
            Robinson
          </h1>
          <p
            style={{
              color: "#6b6560",
              fontSize: "13px",
              fontWeight: 500,
              marginTop: "4px",
            }}
          >
            Student Developer · Lifelong Learner
          </p>
        </div>
      </div>

      {/* Bio */}
      <div style={fadeUp(0.2)}>
        <p
          style={{
            color: "#6b6560",
            lineHeight: 1.8,
            fontSize: "15px",
            fontWeight: 300,
            marginBottom: "40px",
          }}
        >
          Hey! I'm Robinson, a CS student from the Philippines. I'm still early
          in my journey — this portfolio is actually one of the first real
          things I've built. I'm currently learning the fundamentals of web
          development and getting comfortable with React. It's challenging
          sometimes, but I genuinely enjoy the process of figuring things out
          and seeing something come to life on the screen.
        </p>
      </div>

      {/* Skills */}
      <div style={fadeUp(0.3)}>
        <div
          style={{
            marginBottom: "8px",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#a0998f",
            fontWeight: 600,
          }}
        >
          Skills
        </div>
        <div
          style={{ height: "1px", background: "#2e2e2e", marginBottom: "20px" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {skills.map((s) => (
            <span
              key={s}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 500,
                background: "#242424",
                border: `1px solid ${hotSkills.includes(s) ? "#3a3530" : "#2e2e2e"}`,
                color: hotSkills.includes(s) ? "#c8c0b4" : "#6b6560",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div style={fadeUp(0.4)}>
        <div
          style={{
            marginBottom: "8px",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#a0998f",
            fontWeight: 600,
          }}
        >
          Contact
        </div>
        <div
          style={{ height: "1px", background: "#2e2e2e", marginBottom: "20px" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {[
            ["📧", "jrobinson4972@gmail.com", "mailto:jrobinson4972@gmail.com"],
            [
              "🐙",
              "github.com/jrobinson4972-svg",
              "https://github.com/jrobinson4972-svg",
            ],
          ].map(([icon, label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#242424",
                border: "1px solid #2e2e2e",
                borderRadius: "10px",
                padding: "12px 16px",
                fontSize: "13px",
                color: "#6b6560",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a0998f";
                e.currentTarget.style.color = "#f0ede8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2e2e2e";
                e.currentTarget.style.color = "#6b6560";
              }}
            >
              <span>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div style={fadeUp(0.5)}>
        <div
          style={{
            marginBottom: "8px",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#a0998f",
            fontWeight: 600,
          }}
        >
          Send a Message
        </div>
        <div
          style={{ height: "1px", background: "#2e2e2e", marginBottom: "20px" }}
        ></div>

        <input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button
          onClick={handleSubmit}
          style={{
            padding: "13px 28px",
            background: "#f0ede8",
            color: "#1a1a1a",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "DM Sans, sans-serif",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Send Message
        </button>

        {status === "success" && (
          <p
            style={{
              color: "#6ee7b7",
              marginTop: "12px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            ✅ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p
            style={{
              color: "#f87171",
              marginTop: "12px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            ❌ Please fill in all fields and try again.
          </p>
        )}
      </div>
    </main>
  );
}

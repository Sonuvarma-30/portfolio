import { aboutText } from "../data/portfolioData";

// ===== About Me Section =====
export default function About() {
  const highlights = [
    { icon: "🎓", label: "Degree", value: "B.Tech CSE (Cyber Security)" },
    { icon: "🏫", label: "College", value: "CVR College of Engineering, Hyderabad" },
    { icon: "📊", label: "CGPA", value: "9.06 / 10" },
    { icon: "📅", label: "Graduation", value: "May 2027 (Expected)" },
  ];

  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">// About Me</p>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <div className="accent-line" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left — text */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {aboutText.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    fontSize: "0.975rem",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick interest tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.75rem" }}>
              {[
                "Cyber Security",
                "Secure Development",
                "Network Security",
                "Encryption",
                "Web Development",
                "Cloud Security",
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {highlights.map((h) => (
              <div
                key={h.label}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,212,255,0.07)",
                    borderRadius: "8px",
                    flexShrink: 0,
                  }}
                >
                  {h.icon}
                </span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Courier New, monospace" }}>
                    {h.label}
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)", marginTop: "0.2rem", fontSize: "0.95rem" }}>
                    {h.value}
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

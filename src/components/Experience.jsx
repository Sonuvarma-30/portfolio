import { experience } from "../data/portfolioData";

// ===== Experience / Internships Section =====
export default function Experience() {
  return (
    <section id="experience" className="grid-bg">
      <div className="container">
        <p className="section-label">// Experience</p>
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
        <div className="accent-line" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="card"
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-cyan))",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Courier New, monospace",
                      color: "var(--accent-cyan)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {exp.type}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: "var(--accent-cyan)", fontWeight: 600, fontSize: "0.9rem" }}>{exp.company}</p>
                </div>

                {/* Period badge */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.85rem",
                    background: "rgba(0,212,255,0.07)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    borderRadius: "20px",
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                    fontFamily: "Courier New, monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                }}
              >
                {exp.description}
              </p>

              {/* Highlights */}
              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "Courier New, monospace",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  Key Learnings
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        padding: "0.3rem 0.75rem",
                        background: "rgba(0,119,255,0.07)",
                        border: "1px solid rgba(0,119,255,0.18)",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ color: "var(--accent-green)", fontFamily: "monospace" }}>✓</span>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

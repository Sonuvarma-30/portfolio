import { education } from "../data/portfolioData";

// ===== Education Section =====
export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">// Education</p>
        <h2 className="section-title">
          Academic <span>Background</span>
        </h2>
        <div className="accent-line" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {education.map((edu, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative background pattern */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-40px",
                  top: "-40px",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,212,255,0.07)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-20px",
                  top: "-20px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,212,255,0.05)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Degree icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(0,119,255,0.15), rgba(0,212,255,0.1))",
                    border: "1px solid rgba(0,212,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>

                <div>
                  {/* Status badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.2rem 0.65rem",
                      background: "rgba(0,255,136,0.08)",
                      border: "1px solid rgba(0,255,136,0.2)",
                      borderRadius: "20px",
                      fontSize: "0.7rem",
                      color: "var(--accent-green)",
                      fontFamily: "Courier New, monospace",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent-green)",
                      }}
                    />
                    {edu.status}
                  </span>

                  {/* Degree */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.4rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--accent-cyan)",
                      fontWeight: 600,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {edu.institution}
                  </p>

                  {/* Stats row */}
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontFamily: "Courier New, monospace",
                          marginBottom: "0.3rem",
                        }}
                      >
                        Period
                      </div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {edu.period}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontFamily: "Courier New, monospace",
                          marginBottom: "0.3rem",
                        }}
                      >
                        CGPA
                      </div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "var(--accent-cyan)",
                          lineHeight: 1,
                        }}
                      >
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 500px) {
          #education .card > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

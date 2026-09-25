import { timeline } from "../data/portfolioData";

// ===== Training & Timeline Section =====
export default function Timeline() {
  return (
    <section id="timeline" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">// Training & Timeline</p>
        <h2 className="section-title">
          Learning <span>Journey</span>
        </h2>
        <div className="accent-line" />

        {/* Timeline container */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--accent-cyan), rgba(0,212,255,0.1))",
            }}
            aria-hidden="true"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, index) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  paddingBottom: index < timeline.length - 1 ? "2.5rem" : "0",
                }}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-2rem",
                    top: "6px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background:
                      item.color === "cyan" ? "var(--accent-cyan)" : "var(--accent-blue)",
                    border: "3px solid var(--bg-secondary)",
                    boxShadow:
                      item.color === "cyan"
                        ? "0 0 10px rgba(0,212,255,0.6)"
                        : "0 0 10px rgba(0,119,255,0.6)",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  className="card"
                  style={{
                    padding: "1.25rem 1.5rem",
                    borderLeft:
                      item.color === "cyan"
                        ? "2px solid rgba(0,212,255,0.3)"
                        : "2px solid rgba(0,119,255,0.3)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "0.975rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: "0.82rem",
                            color: item.color === "cyan" ? "var(--accent-cyan)" : "#5c9aff",
                            fontWeight: 500,
                          }}
                        >
                          {item.org}
                        </span>
                        <span style={{ color: "var(--border-color)" }}>·</span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            background: "rgba(0,212,255,0.05)",
                            border: "1px solid rgba(0,212,255,0.12)",
                            borderRadius: "3px",
                            padding: "0.1rem 0.5rem",
                            fontFamily: "Courier New, monospace",
                          }}
                        >
                          {item.role}
                        </span>
                      </div>
                    </div>

                    {/* Period */}
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontFamily: "Courier New, monospace",
                        whiteSpace: "nowrap",
                        background: "rgba(0,0,0,0.2)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

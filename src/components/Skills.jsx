import { skills } from "../data/portfolioData";

// ===== Individual skill card =====
function SkillCard({ category, icon, items }) {
  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
        height: "100%",
      }}
    >
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span
          style={{
            fontSize: "1.4rem",
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,212,255,0.07)",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: "8px",
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
        <h3
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            fontFamily: "Courier New, monospace",
          }}
        >
          {category}
        </h3>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)",
          marginBottom: "1.25rem",
        }}
      />

      {/* Skills list */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map((item) => (
          <span
            key={item}
            style={{
              padding: "0.3rem 0.7rem",
              borderRadius: "4px",
              fontSize: "0.82rem",
              fontWeight: 500,
              background: "rgba(0,119,255,0.08)",
              border: "1px solid rgba(0,119,255,0.2)",
              color: "var(--text-secondary)",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
              e.currentTarget.style.color = "var(--accent-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,119,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(0,119,255,0.2)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ===== Technical Skills Section =====
export default function Skills() {
  return (
    <section id="skills" className="grid-bg">
      <div className="container">
        <p className="section-label">// Technical Skills</p>
        <h2 className="section-title">
          My <span>Skill Set</span>
        </h2>
        <div className="accent-line" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

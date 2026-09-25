import { certifications } from "../data/portfolioData";

// ===== Single Certification Card =====
function CertCard({ title, issuer, icon, category }) {
  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
        <span
          style={{
            fontSize: "1.75rem",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,212,255,0.07)",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: "10px",
            flexShrink: 0,
          }}
        >
          {icon}
        </span>

        <span
          style={{
            fontSize: "0.68rem",
            fontFamily: "Courier New, monospace",
            color: "var(--accent-cyan)",
            background: "rgba(0,212,255,0.07)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "3px",
            padding: "0.15rem 0.55rem",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.3rem" }}>
          {title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 500 }}>
            {issuer}
          </span>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, rgba(0,212,255,0.2), transparent)",
        }}
      />

      {/* Verified label */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent-green)",
            boxShadow: "0 0 6px var(--accent-green)",
          }}
        />
        <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "Courier New, monospace" }}>
          Certified
        </span>
      </div>
    </div>
  );
}

// ===== Certifications Section =====
export default function Certifications() {
  return (
    <section id="certifications" className="grid-bg">
      <div className="container">
        <p className="section-label">// Certifications</p>
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
        <div className="accent-line" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

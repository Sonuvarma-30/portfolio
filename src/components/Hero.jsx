import { personalInfo } from "../data/portfolioData";

import profileImg from "../assets/profile.jpg";

// ===== Profile photo with cyber-themed frame =====
function ProfilePhoto() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "340px",
        margin: "0 auto",
      }}
    >
      {/* Corner brackets — top left */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-10px", left: "-10px", width: "30px", height: "30px", borderTop: "2px solid var(--accent-cyan)", borderLeft: "2px solid var(--accent-cyan)", zIndex: 2 }} />
      {/* Corner brackets — top right */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-10px", right: "-10px", width: "30px", height: "30px", borderTop: "2px solid var(--accent-cyan)", borderRight: "2px solid var(--accent-cyan)", zIndex: 2 }} />
      {/* Corner brackets — bottom left */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-10px", left: "-10px", width: "30px", height: "30px", borderBottom: "2px solid var(--accent-cyan)", borderLeft: "2px solid var(--accent-cyan)", zIndex: 2 }} />
      {/* Corner brackets — bottom right */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "30px", height: "30px", borderBottom: "2px solid var(--accent-cyan)", borderRight: "2px solid var(--accent-cyan)", zIndex: 2 }} />

      {/* Glow behind photo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-2px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, rgba(0,119,255,0.25), rgba(0,212,255,0.15))",
          zIndex: 0,
        }}
      />

      {/* Photo */}
      <img
        src={profileImg}
        alt="Panasa Sonu"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          borderRadius: "12px",
          display: "block",
          objectFit: "cover",
          border: "2px solid rgba(0,212,255,0.3)",
        }}
      />

      {/* Status badge */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "rgba(5,10,14,0.85)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(0,212,255,0.25)",
          borderRadius: "20px",
          padding: "0.35rem 0.9rem",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 6px var(--accent-green)", flexShrink: 0 }} />
        <span style={{ fontSize: "0.72rem", color: "var(--text-primary)", fontFamily: "Courier New, monospace", letterSpacing: "0.05em" }}>
          Open to Internships
        </span>
      </div>
    </div>
  );
}

// ===== Hero Section =====
export default function Hero() {
  return (
    <section id="hero" className="hero-section grid-bg">
      {/* Subtle radial glow behind hero */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0,119,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left — Text content */}
        <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
          {/* Terminal-style pre-label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "4px",
              padding: "0.3rem 0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-green)", flexShrink: 0 }} />
            <span className="terminal-text" style={{ fontSize: "0.75rem" }}>
              Available for Internships &amp; Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fff 30%, var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Panasa Sonu
            </span>
          </h1>

          {/* Title */}
          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--accent-cyan)",
              fontFamily: "Courier New, monospace",
              fontWeight: 600,
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              flexWrap: "wrap",
            }}
          >
            <span>Computer Science &amp; Cyber Security Student</span>
            <span
              className="cursor-blink"
              style={{ width: "2px", height: "1.2em", background: "var(--accent-cyan)", display: "inline-block", verticalAlign: "middle" }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "2rem",
            }}
          >
            B.Tech CSE (Cyber Security) student at CVR College of Engineering.
            I build <strong style={{ color: "var(--text-primary)" }}>secure, practical applications</strong> — combining
            software development skills with a security-first mindset.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              View Projects
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.25rem",
                borderRadius: "6px",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* GitHub SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.25rem",
                borderRadius: "6px",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* LinkedIn SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-color)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "9.06", label: "CGPA" },
              { value: "2", label: "Projects" },
              { value: "5+", label: "Certifications" },
              { value: "2027", label: "Graduating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--accent-cyan)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile photo */}
        <div style={{ display: "flex", justifyContent: "center", animation: "fadeInUp 0.9s ease forwards" }}>
          <ProfilePhoto />
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero .container > div:last-child {
            order: -1;
            max-width: 220px;
            margin: 0 auto;
          }
          #hero .container > div:first-child > div:nth-child(5) {
            justify-content: center;
          }
          #hero .container > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

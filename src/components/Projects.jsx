import { projects } from "../data/portfolioData";

// ===== Single Project Card =====
function ProjectCard({ title, date, description, highlights, technologies, githubUrl, liveUrl }) {
  return (
    <div
      className="card"
      style={{
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent-cyan)",
                boxShadow: "0 0 8px var(--accent-cyan)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "Courier New, monospace",
                color: "var(--accent-cyan)",
                letterSpacing: "0.08em",
              }}
            >
              {date}
            </span>
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
            {title}
          </h3>
        </div>

        {/* Shield icon */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: "rgba(0,212,255,0.07)",
            border: "1px solid rgba(0,212,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
        {description}
      </p>

      {/* Key highlights */}
      <div>
        <p style={{ fontSize: "0.7rem", fontFamily: "Courier New, monospace", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Key Highlights
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {highlights.map((h) => (
            <li
              key={h}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ color: "var(--accent-green)", marginTop: "0.15rem", flexShrink: 0, fontFamily: "Courier New" }}>›</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <p style={{ fontSize: "0.7rem", fontFamily: "Courier New, monospace", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Technologies
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto", paddingTop: "0.5rem", flexWrap: "wrap" }}>
        {/* GitHub button — always shown */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}
          aria-label={`View ${title} on GitHub`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* Live Demo — only rendered if a real URL is provided */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}
            aria-label={`Live demo of ${title}`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

// ===== Projects Section =====
export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">// Projects</p>
        <h2 className="section-title">
          What I&apos;ve <span>Built</span>
        </h2>
        <div className="accent-line" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

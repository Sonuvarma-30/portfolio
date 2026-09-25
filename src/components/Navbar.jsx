import { useEffect, useRef, useState } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";

// ===== Navbar: sticky, scrolled-state, mobile hamburger =====
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Add shadow/blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header ref={menuRef} className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        {/* Logo / Name */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            letterSpacing: "0.01em",
          }}
          aria-label="Back to top"
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Courier New, monospace",
              flexShrink: 0,
            }}
          >
            PS
          </span>
          <span>Panasa Sonu</span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" style={{ display: "flex", gap: "0.25rem" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: "0.4rem 0.85rem",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-cyan)";
                e.currentTarget.style.background = "rgba(0,212,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.4rem 1rem", fontSize: "0.875rem", marginLeft: "0.5rem" }}
          >
            Resume
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              background: menuOpen ? "var(--accent-cyan)" : "var(--text-primary)",
              borderRadius: "2px",
              display: "block",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              transition: "transform 0.25s, background 0.2s",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: menuOpen ? "var(--accent-cyan)" : "var(--text-primary)",
              borderRadius: "2px",
              display: "block",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: menuOpen ? "var(--accent-cyan)" : "var(--text-primary)",
              borderRadius: "2px",
              display: "block",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              transition: "transform 0.25s, background 0.2s",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                padding: "0.65rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-cyan)";
                e.currentTarget.style.background = "rgba(0,212,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="btn-primary"
            style={{ marginTop: "0.5rem", alignSelf: "flex-start" }}
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Inline responsive style — hamburger visible on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

import { useState, useEffect } from "react";

const projects = [
  {
    icon: "🎯",
    title: "Goal OS",
    desc: "A personal productivity app that helps users set, track, and visualise long-term goals — with a dynamic wallpaper system that reflects daily progress.",
    tags: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
    badge: "In Development",
  },
  {
    icon: "🛒",
    title: "ShopEase",
    desc: "Lightweight e-commerce app with product browsing, cart management, and offline-first architecture for seamless low-connectivity experiences.",
    tags: ["React Native", "Redux", "SQLite", "REST API"],
    badge: "In Development",
  },
  {
    icon: "💬",
    title: "ChatFlow",
    desc: "Real-time messaging app with rooms, read receipts, and push notifications. Built around smooth animations and a distraction-free UI.",
    tags: ["React Native", "Firebase", "Expo Push", "Reanimated"],
    badge: "In Development",
  },
  {
    icon: "🏃",
    title: "FitTrack",
    desc: "Workout logging app with streak tracking, custom routines, and progress charts. Integrates with device step counter for passive health monitoring.",
    tags: ["React Native", "Expo Health", "Victory Native", "MMKV"],
    badge: "In Development",
  },
  {
    icon: "💰",
    title: "SpendLess",
    desc: "Personal finance tracker with category budgets, spending insights, and beautiful monthly summaries. Fully offline with optional cloud sync.",
    tags: ["React Native", "Zustand", "SQLite", "Supabase"],
    badge: "In Development",
  },
];

const skillGroups = [
  { label: "Frameworks", items: ["React Native", "Expo", "React Navigation"] },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML & CSS"],
  },
  {
    label: "State & Data",
    items: ["Redux Toolkit", "Zustand", "SQLite / MMKV", "AsyncStorage"],
  },
  { label: "Backend & APIs", items: ["Firebase", "REST APIs", "Supabase"] },
  { label: "Tooling", items: ["Git & GitHub", "Expo EAS Build", "Figma"] },
  {
    label: "Native features",
    items: [
      "Push Notifications",
      "Camera & Media",
      "Offline-First",
      "Animations (Reanimated)",
    ],
  },
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.root}>
      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <span style={styles.navLogo}>
          ini<span style={styles.accent}>.</span>
        </span>
        <div style={styles.navLinks}>
          {["Projects", "Skills", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={styles.navLink}>
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBgText}>MOBILE</div>
        <div style={styles.heroInner}>
          <div style={styles.heroTag}>
            <span style={styles.heroDot} />
            Available for work
          </div>
          <h1 style={styles.heroH1}>
            Building apps that
            <br />
            <em style={{ fontStyle: "normal", color: "#C8FF57" }}>
              feel native,
            </em>
            <br />
            think smart.
          </h1>
          <p style={styles.heroP}>
            Mobile app developer specialising in React Native & cross-platform
            experiences. I turn product ideas into polished, user-first apps.
          </p>
          <div style={styles.heroCtas}>
            <a href="#projects" style={styles.btnPrimary}>
              View my work
            </a>
            <a href="#contact" style={styles.btnOutline}>
              Get in touch
            </a>
          </div>
          <div style={styles.heroStats}>
            {[
              { num: "5+", label: "Apps built" },
              { num: "2+", label: "Years experience" },
              { num: "iOS & Android", label: "Cross-platform" },
            ].map((s) => (
              <div key={s.label}>
                <div style={styles.heroStatNum}>{s.num}</div>
                <div style={styles.heroStatLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.divider} />

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionLabel}>Selected work</div>
        <div style={styles.sectionTitle}>Projects</div>
        <div style={styles.projectsGrid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <div style={styles.divider} />

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionLabel}>What I work with</div>
        <div style={styles.sectionTitle}>Skills & stack</div>
        <div style={styles.skillsGrid}>
          {skillGroups.map((g) => (
            <div key={g.label} style={styles.skillGroup}>
              <div style={styles.skillGroupLabel}>{g.label}</div>
              {g.items.map((item) => (
                <div key={item} style={styles.skillItem}>
                  <span style={styles.skillDot} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div style={styles.divider} />

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionLabel}>Who I am</div>
        <div style={styles.sectionTitle}>About me</div>
        <div style={styles.aboutGrid}>
          <div>
            <p style={styles.aboutP}>
              Hey, I'm{" "}
              <strong style={{ color: "#FAFAF8", fontWeight: 500 }}>Ini</strong>{" "}
              — a mobile app developer based in Nigeria, focused on building
              apps that are fast, intuitive, and genuinely useful.
            </p>
            <p style={styles.aboutP}>
              I specialise in{" "}
              <strong style={{ color: "#FAFAF8", fontWeight: 500 }}>
                React Native
              </strong>{" "}
              and cross-platform development, with a strong interest in
              offline-first architecture and native device integrations. I care
              deeply about UX — not just making things work, but making them
              feel right.
            </p>
            <p style={styles.aboutP}>
              All my current projects are in active development and will be
              shipping to the{" "}
              <strong style={{ color: "#FAFAF8", fontWeight: 500 }}>
                App Store and Google Play
              </strong>{" "}
              soon. I build in public and document my process openly.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              {
                icon: "📍",
                title: "Based in Nigeria",
                sub: "Open to remote work worldwide",
              },
              {
                icon: "📱",
                title: "iOS & Android",
                sub: "Cross-platform with React Native + Expo",
              },
              {
                icon: "🚀",
                title: "5 apps in development",
                sub: "Shipping to stores soon",
              },
              {
                icon: "🌐",
                title: "Also a web developer",
                sub: "Full web portfolio available",
              },
            ].map((c) => (
              <div key={c.title} style={styles.aboutCard}>
                <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
                <div>
                  <div style={styles.aboutCardTitle}>{c.title}</div>
                  <div style={styles.aboutCardSub}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.divider} />

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.contactBox}>
          <div>
            <h2 style={styles.contactH2}>Let's build something.</h2>
            <p style={{ color: "#888", fontSize: "0.95rem" }}>
              Open to freelance projects, collabs, and full-time roles.
            </p>
          </div>
          <div style={styles.contactLinks}>
            {[
              { label: "✉ Email me", href: "mailto:ini@email.com" },
              { label: "GitHub ↗", href: "https://github.com" },
              { label: "LinkedIn ↗", href: "https://linkedin.com" },
              { label: "X / Twitter ↗", href: "https://twitter.com" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={styles.contactLink}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.navLogo}>
          ini<span style={styles.accent}>.</span>
        </span>
        <span style={{ color: "#555", fontSize: "0.8rem" }}>
          Designed & built with intent — 2025
        </span>
      </footer>
    </div>
  );
}

function ProjectCard({ icon, title, desc, tags, badge }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.projectCard,
        ...(hovered ? styles.projectCardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.projectCardTop}>
        <div style={styles.projectIcon}>{icon}</div>
        <span style={styles.projectBadge}>{badge}</span>
      </div>
      <div style={styles.projectTitle}>{title}</div>
      <div style={styles.projectDesc}>{desc}</div>
      <div style={styles.projectTags}>
        {tags.map((t) => (
          <span key={t} style={styles.tag}>
            {t}
          </span>
        ))}
      </div>
      <div style={styles.projectLinks}>
        <a href="#" style={styles.projectLink}>
          GitHub ↗
        </a>
        <a href="#" style={styles.projectLink}>
          Case study ↗
        </a>
      </div>
    </div>
  );
}

const styles = {
  root: {
    background: "#0A0A0B",
    color: "#FAFAF8",
    fontFamily: "'DM Sans', sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  accent: { color: "#C8FF57" },

  // NAV
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem 3rem",
    transition: "background 0.3s, borderBottom 0.3s",
    background: "rgba(10,10,11,0.6)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  navScrolled: {
    background: "rgba(10,10,11,0.9)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  navLogo: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: "1.1rem",
    letterSpacing: "-0.02em",
  },
  navLinks: { display: "flex", gap: "2rem" },
  navLink: {
    color: "#888",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 400,
  },

  // HERO
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "6rem",
    position: "relative",
    overflow: "hidden",
  },
  heroBgText: {
    position: "absolute",
    top: "50%",
    right: "-2rem",
    transform: "translateY(-50%)",
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(80px, 14vw, 200px)",
    fontWeight: 800,
    color: "rgba(255,255,255,0.025)",
    letterSpacing: "-0.05em",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  heroInner: {
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    padding: "0 3rem",
    position: "relative",
  },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "rgba(200,255,87,0.1)",
    border: "1px solid rgba(200,255,87,0.2)",
    color: "#C8FF57",
    fontSize: "0.78rem",
    fontWeight: 500,
    padding: "0.35rem 0.9rem",
    borderRadius: 100,
    marginBottom: "1.75rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  heroDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#C8FF57",
    display: "block",
    animation: "pulse 2s ease-in-out infinite",
  },
  heroH1: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2.6rem, 6vw, 5rem)",
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    marginBottom: "1.5rem",
  },
  heroP: {
    fontSize: "1.05rem",
    color: "#888",
    maxWidth: 520,
    marginBottom: "2.5rem",
    fontWeight: 300,
    lineHeight: 1.8,
  },
  heroCtas: { display: "flex", gap: "1rem", flexWrap: "wrap" },
  btnPrimary: {
    background: "#C8FF57",
    color: "#0A0A0B",
    border: "none",
    padding: "0.85rem 2rem",
    borderRadius: 100,
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    textDecoration: "none",
    display: "inline-block",
  },
  btnOutline: {
    background: "transparent",
    color: "#FAFAF8",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "0.85rem 2rem",
    borderRadius: 100,
    fontSize: "0.9rem",
    fontWeight: 400,
    fontFamily: "'DM Sans', sans-serif",
    textDecoration: "none",
    display: "inline-block",
  },
  heroStats: {
    display: "flex",
    gap: "3rem",
    marginTop: "4rem",
    paddingTop: "2.5rem",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  heroStatNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.9rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
  },
  heroStatLabel: { fontSize: "0.8rem", color: "#888", marginTop: 4 },

  divider: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 3rem",
    borderTop: "1px solid rgba(255,255,255,0.07)",
  },

  // SECTION
  section: { padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" },
  sectionLabel: {
    fontSize: "0.75rem",
    color: "#C8FF57",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "0.75rem",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    marginBottom: "2.5rem",
  },

  // PROJECTS
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.25rem",
  },
  projectCard: {
    background: "#111113",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "1.75rem",
    transition: "transform 0.2s, borderColor 0.2s",
    cursor: "default",
  },
  projectCardHover: {
    transform: "translateY(-3px)",
    borderColor: "rgba(200,255,87,0.2)",
  },
  projectCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1.25rem",
  },
  projectIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    background: "rgba(255,255,255,0.05)",
  },
  projectBadge: {
    fontSize: "0.7rem",
    fontWeight: 500,
    padding: "0.3rem 0.7rem",
    borderRadius: 100,
    background: "rgba(200,255,87,0.1)",
    color: "#C8FF57",
    border: "1px solid rgba(200,255,87,0.2)",
    letterSpacing: "0.04em",
  },
  projectTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    marginBottom: "0.5rem",
  },
  projectDesc: {
    fontSize: "0.875rem",
    color: "#888",
    lineHeight: 1.7,
    marginBottom: "1.25rem",
  },
  projectTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    marginBottom: "1.25rem",
  },
  tag: {
    fontSize: "0.72rem",
    color: "rgba(255,255,255,0.5)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "0.2rem 0.6rem",
    borderRadius: 6,
  },
  projectLinks: { display: "flex", gap: "0.75rem" },
  projectLink: { fontSize: "0.8rem", color: "#888", textDecoration: "none" },

  // SKILLS
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
  skillGroup: {
    background: "#111113",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: "1.5rem",
  },
  skillGroupLabel: {
    fontSize: "0.72rem",
    color: "#C8FF57",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "0.5rem",
  },
  skillDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "#C8FF57",
    flexShrink: 0,
  },

  // ABOUT
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  aboutP: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.85,
    marginBottom: "1rem",
  },
  aboutCard: {
    background: "#111113",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: "1.25rem 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  aboutCardTitle: { fontSize: "0.875rem", fontWeight: 500, color: "#FAFAF8" },
  aboutCardSub: { fontSize: "0.8rem", color: "#666", marginTop: 2 },

  // CONTACT
  contactBox: {
    background: "#111113",
    border: "1px solid rgba(200,255,87,0.15)",
    borderRadius: 20,
    padding: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  contactH2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    marginBottom: "0.5rem",
  },
  contactLinks: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
  contactLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FAFAF8",
    textDecoration: "none",
    padding: "0.7rem 1.25rem",
    borderRadius: 100,
    fontSize: "0.875rem",
  },

  // FOOTER
  footer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "2rem 3rem 3rem",
    borderTop: "1px solid rgba(255,255,255,0.07)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
};

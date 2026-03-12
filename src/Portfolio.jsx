import React, { useState, useEffect, useRef } from "react";

// ── DATA ────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Koushik Chaturvedula",
  title: ["Full-Stack Developer", "React Specialist", "Senior Engineer", "UI Architect"],
  summary:
    "Senior Software Engineer with 7+ years of experience leading complex development initiatives. Passionate about crafting efficient, user-centric applications and tackling impactful technology challenges.",
  email: "imkoushikc@gmail.com",
  phone: "+65 86521236",
  location: "Singapore",
  linkedin: "https://linkedin.com/in/koushikch/",
  github: "https://github.com/koushikchaturvedula",

  skills: [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Redux", "Flutter", "Tailwind", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Python", "Ruby on Rails", "GraphQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Firebase", "Azure"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Elasticsearch"] },
    { category: "AI & ML", items: ["Claude API", "OpenAI API", "LLM Integration", "Prompt Engineering"] },
    { category: "Testing", items: ["Jest", "React Testing Library", "JUnit", "TDD"] },
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Technocracy Pte. Ltd.",
      period: "Sep 2023 – Present",
      location: "Singapore",
      points: [
        "Developed banking features using React and Flutter for withdrawal and deposit workflows",
        "Implemented DevOps automation, integrating CI/CD pipelines for secure deployments",
        "Managed AMS issue resolution by triaging severity-level tickets to ensure system stability",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Mindgraph Technologies Pvt. Ltd.",
      period: "Sep 2022 – Sep 2023",
      location: "Hyderabad, India",
      points: [
        "Led React.js SaaS front-end development — improved page-load by 40%, maintained 99.9% uptime",
        "Optimized Kubernetes-based CI/CD pipelines — cut build times by 30%",
        "Designed Spring Boot microservices and REST APIs — boosted backend response by 25%",
        "Enforced TDD with Jest/RTL and JUnit — raised code coverage to 85%",
      ],
    },
    {
      role: "Software Engineer",
      company: "QuantaEd Solutions LLP",
      period: "Jun 2019 – Sep 2022",
      location: "Hyderabad, India",
      points: [
        "Built Android & Next.js/React.js apps with GraphQL/REST for Ginger-U, Camjazz, Azvion",
        "Developed Spring Boot microservices, containerized with Docker on AWS Fargate",
        "Implemented Redux state management; Jest/RTL tests — achieved 80%+ coverage",
      ],
    },
    {
      role: "Software Engineer",
      company: "Teewave Technologies",
      period: "Jul 2018 – May 2019",
      location: "Hyderabad, India",
      points: [
        "Developed ProCal full-stack app with Ruby on Rails backend and React.js frontend",
        "Designed RESTful services; streamlined front-end state flow with Redux",
        "Automated CI via CircleCI; deployed on AWS EC2",
      ],
    },
  ],

  projects: [
    {
      name: "Singapore Pools",
      tag: "Fintech · React · Redux · Spring Boot · AWS",
      desc: "Critical modules for deposits, withdrawals, and wallet operations handling 1000+ daily transactions. Reduced downtime by 40% and achieved zero-failure deployments.",
      metrics: ["1000+ daily txns", "40% less downtime", "Zero-failure deploys"],
    },
    {
      name: "SaaS Web Application",
      tag: "Full-Stack · React · Redux · Node.js · AWS",
      desc: "Led frontend architecture for multi-tenant platform. Improved performance by 35% through code optimization and Redux state management. Delivered 12+ features on schedule.",
      metrics: ["35% perf boost", "12+ features", "Multi-tenant"],
    },
    {
      name: "Ginger-U Mobile",
      tag: "Mobile · Android · Java · Node.js · REST",
      desc: "Pill & Period Tracker app shipped to production with 50k+ Play Store downloads. Architected scalable Node.js backend with 85%+ unit test coverage.",
      metrics: ["50k+ downloads", "85%+ coverage", "Play Store"],
    },
    {
      name: "Ginger-U Web",
      tag: "Full-Stack · Next.js · GraphQL · Shopify · PostgreSQL",
      desc: "Built responsive e-commerce portal as solo developer with GraphQL queries and Shopify storefront APIs. Maintained 90%+ test coverage.",
      metrics: ["Solo dev", "90%+ coverage", "GraphQL"],
    },
    {
      name: "Camjazz E-Commerce",
      tag: "Full-Stack · Magento · JavaScript · PHP · MySQL",
      desc: "Full-stack music e-commerce platform for independent record label with 200+ albums. Integrated digital streaming and purchase workflows.",
      metrics: ["200+ albums", "Multi-label", "E-commerce"],
    },
    {
      name: "Azvion Mobile App",
      tag: "Mobile · Flutter · Dart · Firebase · REST",
      desc: "Cross-platform app with custom animations and responsive UI. Implemented Firebase Auth and Firestore. Delivered 98%+ test coverage.",
      metrics: ["98%+ coverage", "Cross-platform", "Firebase"],
    },
  ],
};

// ── PARTICLE CANVAS ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const COLS = ["rgba(96,165,250,", "rgba(147,197,253,", "rgba(59,130,246,"];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      col: COLS[Math.floor(Math.random() * COLS.length)],
      a: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + p.a + ")";
        ctx.fill();
      });
      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ── TYPING ANIMATION ─────────────────────────────────────────────────────────
function TypingText({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      } else {
        setText((t) => deleting ? t.slice(0, -1) : word.slice(0, t.length + 1));
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span style={{ color: "#60a5fa" }}>
      {text}<span style={{ animation: "blink 1s infinite", borderRight: "2px solid #60a5fa" }}>&nbsp;</span>
    </span>
  );
}

// ── SCROLL REVEAL HOOK ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ id, children, style }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} ref={ref} style={{
      padding: "100px 0", maxWidth: 1100, margin: "0 auto", paddingLeft: 24, paddingRight: 24,
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.7s ease, transform 0.7s ease", ...style
    }}>
      {children}
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: 60 }}>
      <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>
        {children}
      </h2>
      <div style={{ height: 3, width: 60, background: "linear-gradient(90deg,#3b82f6,#60a5fa)", marginTop: 12, borderRadius: 2 }} />
    </div>
  );
}

// ── GEOMETRIC AVATAR ─────────────────────────────────────────────────────────
function Avatar() {
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e3a5f"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
        <clipPath id="hex">
          <polygon points="130,10 230,65 230,195 130,250 30,195 30,65"/>
        </clipPath>
      </defs>
      {/* Hexagon background */}
      <polygon points="130,10 230,65 230,195 130,250 30,195 30,65" fill="url(#bg)" stroke="url(#accent)" strokeWidth="2"/>
      {/* Face */}
      <ellipse cx="130" cy="105" rx="38" ry="42" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Hair */}
      <ellipse cx="130" cy="72" rx="38" ry="18" fill="#60a5fa" opacity="0.8"/>
      {/* Eyes */}
      <ellipse cx="115" cy="100" rx="5" ry="6" fill="#60a5fa"/>
      <ellipse cx="145" cy="100" rx="5" ry="6" fill="#60a5fa"/>
      <ellipse cx="116" cy="99" rx="2" ry="3" fill="#0f172a"/>
      <ellipse cx="146" cy="99" rx="2" ry="3" fill="#0f172a"/>
      {/* Smile */}
      <path d="M116 118 Q130 128 144 118" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Shoulders */}
      <path d="M80 190 Q100 155 130 148 Q160 155 180 190 L190 220 L70 220 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      {/* Code brackets decoration */}
      <text x="52" y="145" fontFamily="monospace" fontSize="18" fill="#3b82f6" opacity="0.7">{"<"}</text>
      <text x="198" y="145" fontFamily="monospace" fontSize="18" fill="#3b82f6" opacity="0.7">{"/>"}</text>
      {/* Floating dots */}
      <circle cx="55" cy="80" r="3" fill="#60a5fa" opacity="0.4"/>
      <circle cx="205" cy="80" r="3" fill="#60a5fa" opacity="0.4"/>
      <circle cx="40" cy="130" r="2" fill="#60a5fa" opacity="0.3"/>
      <circle cx="220" cy="130" r="2" fill="#60a5fa" opacity="0.3"/>
    </svg>
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(96,165,250,0.1)" : "none",
      transition: "all 0.3s ease", padding: "0 32px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: "#60a5fa", letterSpacing: "-0.5px" }}>
          KC<span style={{ color: "#f1f5f9" }}>.</span>
        </span>
        {/* Desktop links */}
        <div style={{ display: "flex", gap: 36 }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 500,
              letterSpacing: "0.5px", fontFamily: "'DM Mono', monospace",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#60a5fa"}
              onMouseLeave={e => e.target.style.color = "#94a3b8"}
            >{l}</a>
          ))}
          <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={{
            padding: "6px 16px", border: "1px solid #3b82f6", borderRadius: 4,
            color: "#60a5fa", textDecoration: "none", fontSize: 13, fontWeight: 600,
            fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "#3b82f6"; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#60a5fa"; }}
          >GitHub</a>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      maxWidth: 1100, margin: "0 auto", padding: "0 24px", paddingTop: 80,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap", width: "100%" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: "#60a5fa", fontFamily: "'DM Mono', monospace", fontSize: 14, marginBottom: 16, letterSpacing: 2, animation: "fadeUp 0.6s ease both" }}>
            HELLO, WORLD. I AM
          </p>
          <h1 style={{
            fontSize: "clamp(36px,5vw,64px)", fontFamily: "'Syne', sans-serif", fontWeight: 800,
            color: "#f1f5f9", margin: "0 0 16px", lineHeight: 1.1,
            animation: "fadeUp 0.6s 0.1s ease both",
          }}>
            Koushik<br />Chaturvedula
          </h1>
          <div style={{ fontSize: "clamp(18px,2.5vw,26px)", fontFamily: "'Syne', sans-serif", fontWeight: 600, marginBottom: 24, height: 40, animation: "fadeUp 0.6s 0.2s ease both" }}>
            <TypingText words={DATA.title} />
          </div>
          <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, maxWidth: 500, marginBottom: 40, animation: "fadeUp 0.6s 0.3s ease both" }}>
            {DATA.summary}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both" }}>
            <a href="#projects" style={{
              padding: "12px 28px", background: "#3b82f6", color: "#fff",
              textDecoration: "none", borderRadius: 6, fontWeight: 700, fontSize: 14,
              fontFamily: "'Syne', sans-serif", letterSpacing: 0.5,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(59,130,246,0.5)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)"; }}
            >View Projects</a>
            <a href="#contact" style={{
              padding: "12px 28px", border: "1px solid rgba(96,165,250,0.4)", color: "#94a3b8",
              textDecoration: "none", borderRadius: 6, fontWeight: 700, fontSize: 14,
              fontFamily: "'Syne', sans-serif", letterSpacing: 0.5,
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#60a5fa"; e.target.style.color = "#60a5fa"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(96,165,250,0.4)"; e.target.style.color = "#94a3b8"; }}
            >Get In Touch</a>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 56, animation: "fadeUp 0.6s 0.5s ease both" }}>
            {[["7+", "Years Exp"], ["10+", "Projects"], ["4", "Companies"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#f1f5f9" }}>{n}</div>
                <div style={{ fontSize: 12, color: "#64748b", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Avatar */}
        <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp 0.6s 0.3s ease both" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -20, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
              animation: "pulse 3s ease-in-out infinite",
            }} />
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
        <div>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
            I'm a <span style={{ color: "#60a5fa", fontWeight: 600 }}>Full-Stack Developer</span> based in Singapore with 7+ years of experience building high-performance web and mobile applications for multinational companies and government projects.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
            My journey started from being the go-to tech troubleshooter for schoolmates and evolved into designing innovative software solutions — from fintech platforms handling thousands of daily transactions to SaaS products serving global audiences.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16 }}>
            Currently at <span style={{ color: "#60a5fa", fontWeight: 600 }}>Technocracy Pte. Ltd.</span> in Singapore, building secure banking features with React and Flutter.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["📍", "Location", "Singapore"],
            ["🎓", "Education", "B.Sc. Computer Science, JNTU Hyderabad"],
            ["📧", "Email", DATA.email],
            ["🏆", "Certifications", "Flutter (Simplilearn), Generative AI (LinkedIn)"],
          ].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", background: "rgba(30,58,95,0.15)", borderRadius: 8, border: "1px solid rgba(59,130,246,0.15)" }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <div>
                <div style={{ color: "#64748b", fontSize: 12, fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginBottom: 4 }}>{label.toUpperCase()}</div>
                <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 500 }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {DATA.skills.map((cat, ci) => (
          <div key={cat.category} style={{
            padding: "24px 28px", background: "rgba(15,23,42,0.6)",
            border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12,
            backdropFilter: "blur(8px)",
            transition: "border-color 0.3s, transform 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <h3 style={{ color: "#60a5fa", fontFamily: "'DM Mono',monospace", fontSize: 13, letterSpacing: 2, marginBottom: 16, marginTop: 0, fontWeight: 500 }}>
              {cat.category.toUpperCase()}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.items.map(item => (
                <span key={item} style={{
                  padding: "5px 12px", background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20,
                  color: "#94a3b8", fontSize: 13, fontFamily: "'DM Mono',monospace",
                  transition: "all 0.2s", cursor: "default",
                }}
                  onMouseEnter={e => { e.target.style.background = "rgba(59,130,246,0.2)"; e.target.style.color = "#60a5fa"; }}
                  onMouseLeave={e => { e.target.style.background = "rgba(59,130,246,0.1)"; e.target.style.color = "#94a3b8"; }}
                >{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience() {
  const [active, setActive] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <Section id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", gap: isMobile ? 24 : 40 }}>
        {/* Tabs */}
        <div style={{ borderLeft: isMobile ? "none" : "2px solid rgba(59,130,246,0.2)", display: "flex", flexDirection: isMobile ? "row" : "column", overflowX: isMobile ? "auto" : "visible", gap: isMobile ? 8 : 0, paddingBottom: isMobile ? 8 : 0 }}>
          {DATA.experience.map((exp, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              display: "block", width: isMobile ? "auto" : "100%", textAlign: "left",
              padding: isMobile ? "10px 16px" : "14px 20px",
              background: isMobile && i === active ? "rgba(59,130,246,0.1)" : "none",
              border: isMobile ? (i === active ? "1px solid #3b82f6" : "1px solid rgba(59,130,246,0.2)") : "none",
              borderRadius: isMobile ? 6 : 0,
              cursor: "pointer",
              borderLeft: isMobile ? "none" : (i === active ? "2px solid #3b82f6" : "2px solid transparent"),
              marginLeft: isMobile ? 0 : -2,
              color: i === active ? "#60a5fa" : "#64748b",
              fontFamily: "'DM Mono',monospace", fontSize: 13,
              transition: "all 0.2s", lineHeight: 1.4,
              whiteSpace: isMobile ? "nowrap" : "normal",
              flexShrink: isMobile ? 0 : 1,
            }}>
              {exp.company.split(" ")[0]}{!isMobile && <React.Fragment><br />
              <span style={{ fontSize: 11, opacity: 0.7 }}>{exp.period.split("–")[0].trim()}</span></React.Fragment>}
            </button>
          ))}
        </div>
        {/* Content */}
        <div>
          <div style={{ marginBottom: 4 }}>
            <span style={{ color: "#f1f5f9", fontSize: 20, fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>
              {DATA.experience[active].role}
            </span>
            <span style={{ color: "#3b82f6", fontWeight: 600 }}> @ {DATA.experience[active].company}</span>
          </div>
          <div style={{ color: "#64748b", fontFamily: "'DM Mono',monospace", fontSize: 13, marginBottom: 28 }}>
            {DATA.experience[active].period} · {DATA.experience[active].location}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {DATA.experience[active].points.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: 12, color: "#94a3b8", fontSize: 15, lineHeight: 1.6 }}>
                <span style={{ color: "#3b82f6", marginTop: 4, flexShrink: 0 }}>▹</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
        {DATA.projects.map((p, i) => (
          <div key={p.name} style={{
            padding: "28px", background: "rgba(15,23,42,0.7)",
            border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12,
            display: "flex", flexDirection: "column", gap: 16,
            transition: "all 0.3s", cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontSize: 28 }}>{"📁📱🌐💼🎵📲🔧".split("")[i] || "🚀"}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ color: "#3b82f6", fontFamily: "'DM Mono',monospace", fontSize: 22 }}>{"</>"}</span>
              </div>
            </div>
            <h3 style={{ color: "#e2e8f0", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, margin: 0 }}>{p.name}</h3>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, margin: 0, flex: 1 }}>{p.desc}</p>
            {/* Metrics */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.metrics.map(m => (
                <span key={m} style={{ padding: "3px 10px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 20, color: "#60a5fa", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{m}</span>
              ))}
            </div>
            {/* Tech */}
            <p style={{ color: "#475569", fontSize: 12, fontFamily: "'DM Mono',monospace", margin: 0 }}>{p.tag}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Section id="contact">
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
        <p style={{ color: "#60a5fa", fontFamily: "'DM Mono',monospace", fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>WHAT'S NEXT?</p>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#f1f5f9", marginBottom: 20 }}>
          Get In Touch
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
          I'm always open to discussing new opportunities, interesting projects, or just a friendly chat about technology. Feel free to reach out!
        </p>
        <a href={`mailto:${DATA.email}`} style={{
          display: "inline-block", padding: "16px 40px",
          background: "transparent", border: "1px solid #3b82f6",
          color: "#60a5fa", textDecoration: "none", borderRadius: 6,
          fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16,
          transition: "all 0.3s", letterSpacing: 0.5,
          boxShadow: "0 0 0 transparent",
        }}
          onMouseEnter={e => { e.target.style.background = "rgba(59,130,246,0.1)"; e.target.style.boxShadow = "0 0 30px rgba(59,130,246,0.2)"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = "0 0 0 transparent"; }}
        >
          Say Hello 👋
        </a>
        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 56 }}>
          {[
            ["GitHub", DATA.github],
            ["LinkedIn", DATA.linkedin],
            [`Email`, `mailto:${DATA.email}`],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              color: "#64748b", textDecoration: "none", fontFamily: "'DM Mono',monospace",
              fontSize: 13, letterSpacing: 1, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#60a5fa"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >{label}</a>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "32px 24px", borderTop: "1px solid rgba(59,130,246,0.1)" }}>
      <p style={{ color: "#334155", fontFamily: "'DM Mono',monospace", fontSize: 12, margin: 0 }}>
        Designed & Built by <span style={{ color: "#60a5fa" }}>Koushik Chaturvedula</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f1f5f9", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0f; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity:0.5; }
          50% { transform: scale(1.05); opacity:0.8; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 2px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
      <ParticleCanvas />
      <Nav />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

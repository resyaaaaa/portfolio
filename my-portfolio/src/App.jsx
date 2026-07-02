import React, { useState, useEffect, useRef, useCallback, Suspense, forwardRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Import Components
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";

// ─────────────────────────────────────────────
// DESIGN TOKENS & GLOBAL STYLES
// ─────────────────────────────────────────────
const TOKENS = {
  colorBg: "#f5f1e8",
  colorAccent: "#1a1a1a",
  colorAccent2: "#b0a99f",
  colorText: "#1a1a1a",
  colorMuted: "#dccece",
  colorGlass: "rgba(245, 241, 232, 0.5)",
  fontDisplay: "'Cormorant Garamond', serif",
  fontBody: "'Inter', sans-serif",
};

const GlobalStyles = () => (
  <style>{`
    :root {
      --accent-mauve: #b08aad;
      --porcelain-rose: #f0e4e8;
      --rose-light: #f5eef0;
      --rose-medium: #e8d9dd;
      --text-light: #6b7280;
      --text-medium: #4b5563;
    }
    .text-gradient {
        background: linear-gradient(135deg, #8a6da0, #b08aad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    .section-container {
        max-width: 900px;
        margin: 2rem auto;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
        justify-content: center;
    }
  `}</style>
);


// ─────────────────────────────────────────────
// CARDS DATA (Corrected IDs)
// ─────────────────────────────────────────────
const CARDS = [
  {
    id: "works",
    icon: "❏",
    title: "Works",
    desc: "Defining visual identities with timeless elegance and clarity.",
    accent: "#1a1a1a",
  },
  {
    id: "skills",
    icon: "◎",
    title: "Skills",
    desc: "Creating immersive online spaces that tell compelling visual stories.",
    accent: "#8b8378",
  },
  {
    id: "about",
    icon: "⬙",
    title: "About Me",
    desc: "Guiding the aesthetic of campaigns and projects from concept to completion.",
    accent: "#b0a99f",
  },
  {
    id: "contact",
    icon: "≡",
    title: "Contact",
    desc: "Looking forward to stay connected with you.",
    accent: "#1a1a1a",
  },
];


// ─────────────────────────────────────────────
// SECTION COMPONENTS (Wrapped with forwardRef)
// ─────────────────────────────────────────────



// Works Component
const Works = forwardRef((props, ref) => (
  <section ref={ref} style={{ padding: '100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontFamily: TOKENS.fontDisplay, fontSize: '5rem' }}>My Works</h2>
  </section>
));


// Contact Component
const Contact = forwardRef((props, ref) => (
  <section ref={ref} style={{ padding: '100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ fontFamily: TOKENS.fontDisplay, fontSize: '5rem' }}>Contact Me</h2>
  </section>
));

// ─────────────────────────────────────────────
// UI COMPONENTS
// ─────────────────────────────────────────────
function NavBar({ onNavigate }) {
  // Use the card IDs for navigation
  const links = ["Works", "Skills", "About", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.5rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: TOKENS.colorGlass, backdropFilter: "blur(10px)",
      borderBottom: `1px solid rgba(26, 26, 26, 0.08)`,
    }}>
      <span style={{ fontFamily: TOKENS.fontDisplay, fontSize: "1.8rem", color: TOKENS.colorText, fontWeight: 700 }}><img src="./icons/resya.png" style={{ height: "70px", maxHeight:"100px", width:"auto", objectFit:"contain", display:"block"}}/></span>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.toLowerCase());
            }}
            style={{
              fontFamily: TOKENS.fontBody, color: TOKENS.colorMuted, textDecoration: "none",
              fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "color 0.3s", cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.target.style.color = TOKENS.colorText)}
            onMouseLeave={(e) => (e.target.style.color = TOKENS.colorMuted)}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// 3D ANIMATIONS
// ─────────────────────────────────────────────

function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  const textStyle = {
    transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)`,
    transition: "transform 0.15s ease-out",
  };

  return (
    <section onMouseMove={handleMouseMove} style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", perspective: "1000px", padding: "6rem 2rem 4rem", overflow: "hidden"
    }}>

      {/* Canvas Background */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#E9D5E6"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.1}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div style={{ ...textStyle, textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{
          fontFamily: TOKENS.fontDisplay, fontSize: "clamp(3.5rem, 10vw, 9rem)",
          lineHeight: 1.0, fontWeight: 600, color: TOKENS.colorText, margin: 0
        }}>
          Hello World!
          <br />
          This is Resya
        </h1>
        <p style={{
          fontFamily: TOKENS.fontBody, fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
          color: TOKENS.colorMuted, maxWidth: "480px", margin: "1.5rem auto 0", lineHeight: 1.6
        }}>
          I am a Software Engineering graduate. A motivated Mobile Application | AI & Automation | Web Developer.
        </p>
        <button style={{
          marginTop: "2.5rem", padding: "0.75rem 2rem", fontSize: "0.8rem", fontFamily: TOKENS.fontBody,
          letterSpacing: "0.15em", textTransform: "uppercase", color: TOKENS.colorBg, background: TOKENS.colorAccent,
          border: `1px solid ${TOKENS.colorAccent}`, borderRadius: "50px", cursor: "pointer",
          transition: "background 0.3s, color 0.3s"
        }}
          onMouseEnter={(e) => { e.target.style.background = "transparent"; e.target.style.color = TOKENS.colorAccent; }}
          onMouseLeave={(e) => { e.target.style.background = TOKENS.colorAccent; e.target.style.color = TOKENS.colorBg; }}>
          Explore My Work
        </button>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FLIP CARD
// ─────────────────────────────────────────────

function FlipCard({ id, icon, title, desc, accent, onNavigate }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: "1000px", height: "240px" }} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", transition: "transform 0.7s cubic-bezier(.4,0,.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", background: "rgba(255, 255, 255, 0.3)", border: `1px solid rgba(26, 26, 26, 0.1)`, borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <span style={{ fontSize: "1.6rem", color: accent }}>{icon}</span>
          <div>
            <h3 style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.colorText, fontSize: "1.3rem", margin: "0 0 0.5rem", fontWeight: 600 }}>{title}</h3>
            <p style={{ fontFamily: TOKENS.fontBody, color: TOKENS.colorMuted, fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: TOKENS.colorAccent, color: TOKENS.colorBg, borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2rem" }}>
          <span style={{ fontSize: "2.2rem" }}>{icon}</span>
          <p style={{ fontFamily: TOKENS.fontBody, fontSize: "0.82rem", textAlign: "center", margin: 0, lineHeight: 1.6, color: TOKENS.colorMuted }}>See <strong style={{ color: TOKENS.colorBg, fontWeight: 500 }}>{title}</strong>.</p>
          <button
            onClick={() => onNavigate(id)} // Use the passed ID
            style={{ padding: "0.55rem 1.4rem", fontSize: "0.72rem", fontFamily: TOKENS.fontBody, letterSpacing: "0.18em", textTransform: "uppercase", color: TOKENS.colorAccent, background: TOKENS.colorBg, border: "none", borderRadius: "50px", cursor: "pointer" }}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CARD GRID
// ─────────────────────────────────────────────

function CardGrid({ onNavigate }) {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: TOKENS.fontDisplay, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: TOKENS.colorText, textAlign: "center", margin: "0 0 3rem", fontWeight: 600 }}>Features</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.4rem" }}>
        {CARDS.map((card) => (<FlipCard key={card.id} {...card} onNavigate={onNavigate} />))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FOOTER 
// ─────────────────────────────────────────────
function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/resyaaaaa" },
    { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg", url: "https://www.linkedin.com/in/resyalizatul-omar-83a9a029a/" },
    { name: "Email", icon: "", url: "mailto:resyalizatul@gmail.com" },
  ];
  return (
    <footer style={{
      position: "relative", zIndex: 1, padding: "3rem 2rem", textAlign: "center",
      borderTop: `1px solid rgba(26, 26, 26, 0.08)`,
      background: TOKENS.colorBg
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1rem" }}>
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} style={{
            fontSize: "1.5rem",
            color: TOKENS.colorMuted,
            textDecoration: "none",
            transition: "color 0.3s"
          }}
            onMouseEnter={(e) => e.target.style.color = TOKENS.colorText}
            onMouseLeave={(e) => e.target.style.color = TOKENS.colorMuted}>
            {link.icon.startsWith("http") ? (
              <img
                src={link.icon}
                alt={link.name}
                style={{ width: "22px", height: "22px" }}
              />
            ) : (
              <span>{link.icon}</span>
            )}

          </a>
        ))}
      </div>
      <p style={{ fontFamily: TOKENS.fontBody, fontSize: "0.8rem", color: TOKENS.colorMuted, margin: 0 }}>
        © 2024 Resya. All Rights Reserved.
      </p>
    </footer>
  )
}

// ─────────────────────────────────────────────
// ROOT COMPONENT: App
// ─────────────────────────────────────────────
export default function App() {
  // 1. Create refs for each section
  const worksRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  // 2. Create the navigation handler
  const handleNavigate = (id) => {
    const refs = {
      works: worksRef,
      skills: skillsRef,
      about: aboutRef,
      contact: contactRef,
    };
    const sectionId = id.replace(" ", "").toLowerCase();
    const refToScroll = refs[sectionId];

    if (refToScroll && refToScroll.current) {
      refToScroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, minHeight: "100vh", background: TOKENS.colorBg, color: TOKENS.colorText, fontFamily: TOKENS.fontBody, overflowX: "hidden" }}>
      <GlobalStyles />
      <NavBar onNavigate={handleNavigate} />
      <main>
        <HeroSection />
        <CardGrid onNavigate={handleNavigate} />

        {/* 3. Attach the refs to your section components */}
        <Works ref={worksRef} />
        <Skills ref={skillsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
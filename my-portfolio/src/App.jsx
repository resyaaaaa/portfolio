import React, { useState, useCallback, Suspense, useRef, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import "./index.css";

// ─────────────────────────────────────────────
// Navigation Bar
// ─────────────────────────────────────────────
function NavBar({ onNavigate }) {
  // Added "Home" to the navigation array sequence
  const links = ["Home", "About", "Skills", "Projects"];
  return (
    <nav className="navbar">
      <span className="font-display text-[1.8rem] text-text font-bold">
        <img src="./icons/resya.png" alt="Resya Logo" className="h-17.5 max-h-25 w-auto object-contain block" />
      </span>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.toLowerCase());
            }}
            className="font-body text-muted no-underline text-[0.85rem] tracking-widest uppercase transition-colors duration-300 cursor-pointer hover:text-text"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// Hero Section (forwardRef wrapper)
// ─────────────────────────────────────────────
const HeroSection = forwardRef((props, ref) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    });
  }, []);

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className="hero-section">
      {/* Canvas Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
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
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl leading-none font-semibold text-text m-0">
          Hello World!
          <br />
          This is Resya
        </h1>
        <p className="font-body text-[clamp(0.95rem,1.8vw,1.15rem)] text-muted max-w-120 mt-6 mx-auto leading-[1.6]">
          I am a Software Engineering graduate. <br/>Passionate in Mobile Application, Web Development, AI & Automation.
        </p>
        <a href="mailto:resyalizatul@gmail.com" className="hero-button">
          Let's Connect
        </a>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

// ─────────────────────────────────────────────
// FOOTER 
// ─────────────────────────────────────────────
function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/resyaaaaa" },
    { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg", url: "https://www.linkedin.com/in/resyalizatul-omar-83a9a029a/" },
    { name: "Email", icon: "https://img.icons8.com/?size=100&id=12623&format=png&color=000000", url: "mailto:resyalizatul@gmail.com" }
  ];
  return (
    <footer className="footer">
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="text-muted no-underline text-2xl transition-colors duration-300 hover:text-text flex items-center justify-center"
          >
            {link.icon ? (
              <img src={link.icon} alt={link.name} className="w-[22px] h-[22px]" />
            ) : (
              <span className="text-sm uppercase font-body tracking-wider">{link.name}</span>
            )}
          </a>
        ))}
      </div>
      <p className="font-body text-muted text-[0.8rem] m-0">© 2026 Resya. All Rights Reserved.</p>
    </footer>
  );
}

// ─────────────────────────────────────────────
// ROOT COMPONENT: App
// ─────────────────────────────────────────────
export default function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleNavigate = (id) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      skills: skillsRef,
      about: aboutRef
    };
    
    const sectionId = id.replace(/\s+/g, "").toLowerCase();
    const refToScroll = refs[sectionId];

    if (refToScroll && refToScroll.current) {
      refToScroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text font-body overflow-x-hidden">
      <NavBar onNavigate={handleNavigate} />
      <main>
        <HeroSection ref={homeRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Project ref={projectsRef} />
      </main>
      <Footer />
    </div>
  );
}
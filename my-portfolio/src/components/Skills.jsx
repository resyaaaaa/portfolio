import React, { useState, useEffect, useRef, forwardRef } from 'react';
// --- Integrated Skills Component ---
const skillsData = [
  // Frameworks
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  // Languages
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },

  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  // UI/UX
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
  // Data Analytics
  { name: 'Looker', icon: './icons/looker.png' },
  { name: 'Power BI', icon: './icons/powerbi.png' },

  // Automation & AI
  { name: 'n8n', icon: './icons/n8n.png' },
  { name: 'jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },

  // IDE
  { name: 'Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  // Plugins
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  // Database
  { name: 'Mongo DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },

  // Version Control and Others
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },

];

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

const SkillsFilter = ({ skill, }) => {
  // add  filter for language, framework, databasee, ui/ux, automation, ai, data analytics, plugins and theme, others
};

const SkillCard = ({ skill, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => setCardVisible(true), index * 100);
      return () => clearTimeout(timeout);
    }
  }, [visible, index]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const tiltX = hovered ? mousePos.y * -6 : 0;
  const tiltY = hovered ? mousePos.x * 6 : 0;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        background: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible
          ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${hovered ? -8 : 0}px)`
          : 'translateY(28px) scale(0.9)',
        transition: hovered
          ? 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, box-shadow 0.3s ease'
          : 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0px 10px 30px -5px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <img src={skill.icon} alt={skill.name} style={{ width: '48px', height: '48px' }} />
      <label style={{ fontWeight: 600, color: 'var(--text-medium)', fontSize: '0.95rem' }}>
        {skill.name}
      </label>
    </div>
  );
};

const Skills = forwardRef(({ className }, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef) };
  }, [ref]);

  return (
    <section id="skills" ref={ref} style={{ position: 'relative', padding: '100px 2rem', overflow: 'hidden' }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 style={{ fontFamily: TOKENS.fontDisplay, fontSize: '5rem', }}>
          My  Skills
        </h2>
        <p className="text-gradient" >
          Technologies & tools I use to bring ideas to life
        </p>
      </div>
      <div className="section-container">
        {skillsData.map((skill, i) => (
          <SkillCard key={skill.name + i} skill={skill} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
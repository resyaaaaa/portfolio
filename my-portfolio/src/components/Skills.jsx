import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Integrated Skills Component with Category Mappings ---
const skillsData = [
  // Languages & Markup
  { name: 'Python', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Dart', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
  { name: 'PHP', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'JavaScript', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Frameworks & Libraries
  { name: 'React', category: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', category: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Flutter', category: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', category: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },

  // Plugins, Styling & Build Tools
  { name: 'Tailwind CSS', category: 'plugins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', category: 'plugins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Vite.js', category: 'plugins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },

  // Databases & Backend-as-a-Service
  { name: 'MySQL', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Mongo DB', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Supabase', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },

  // UI/UX Design
  { name: 'Figma', category: 'ui-ux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', category: 'ui-ux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },

  // Data Analytics, AI & Notebooks
  { name: 'Power BI', category: 'data-ai', icon: './icons/powerbi.png' },
  { name: 'Looker', category: 'data-ai', icon: './icons/looker.png' },
  { name: 'Jupyter', category: 'data-ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
  { name: 'Google Colab', category: 'data-ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg' },

  // Automation & Data Formats
  { name: 'n8n', category: 'automation', icon: './icons/n8n.png' },
  { name: 'JSON', category: 'automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg' },

  // Project Management
  { name: 'Jira', category: 'project-management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
  { name: 'Trello', category: 'project-management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg' },
  { name: 'Notion', category: 'project-management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },

  // Developer Tools & Cloud Platforms 
  { name: 'GitHub', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'Visual Studio Code', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Android Studio', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Vercel', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg' },
  { name: 'Railway', category: 'dev-tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'language', label: 'Languages' },
  { id: 'framework', label: 'Frameworks & Libraries' },
  { id: 'database', label: 'Databases & Backend-as-a-Service' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'automation', label: 'Automation' },
  { id: 'data-ai', label: 'Data Analytics, AI & Notebooks' },
  { id: 'plugins', label: 'Plugins, Themes & Build Tools' },
  { id: 'dev-tools', label: 'Developer Tools' },
  { id: 'project-management', label: 'Project Management' },
];

const ITEMS_PER_PAGE = 12;

const SkillsFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto px-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.id)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-sm border
            ${activeFilter === category.id
              ? 'bg-text text-bg border-text shadow-sm'
              : 'bg-text/5 text-text border-text/10 hover:bg-text/10 hover:border-text/20'}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

const SkillCard = ({ skill, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => setCardVisible(true), index * 40);
      return () => clearTimeout(timeout);
    } else {
      setCardVisible(false);
    }
  }, [visible, index]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
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
      className={`bg-bg/40 border border-text/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 min-h-[120px]
        ${cardVisible ? 'opacity-100' : 'opacity-0'} 
        ${hovered ? 'shadow-lg shadow-text/5' : 'shadow-none'}
        transition-all`}
      style={{
        transform: cardVisible
          ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${hovered ? -6 : 0}px)`
          : 'translateY(20px) scale(0.95)',
        transitionDuration: hovered ? '150ms' : '500ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" draggable={false} />
      <label className="font-body font-medium text-text text-xs tracking-wide text-center line-clamp-1 cursor-pointer">
        {skill.name}
      </label>
    </div>
  );
};

const Skills = forwardRef(({ className }, ref) => {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  // Intersection observer initialization code
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );

    const target = ref?.current || sectionRef.current;
    if (target) observer.observe(target);
    return () => { if (target) observer.unobserve(target); };
  }, [ref]);

  // Reset page when filter selection updates
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredSkills = skillsData.filter(
    (skill) => activeFilter === 'all' || skill.category === activeFilter
  );

  // Pagination bounds calculation logic
  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSkills = filteredSkills.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      id="skills"
      ref={ref || sectionRef}
      className={`w-full max-w-md sm:max-w-xl md:max-w-2xl scroll-mt-20 lg:max-w-3xl mx-auto select-none outline-none py-12 px-4 ${className || ""}`}
    >
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">Skills</h2>
        <p className="font-body text-sm text-muted">What I can bring to the table</p>
      </div>

      {/* Filter Component */}
      <SkillsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[260px]">
        {paginatedSkills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} visible={visible} />
        ))}
      </div>

      {/* Pagination Controls Footer Container */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-text/10 text-text
              hover:bg-text/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="font-body text-xs text-muted tracking-widest uppercase">
            {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-text/10 text-text
              hover:bg-text/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300 focus:outline-none"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
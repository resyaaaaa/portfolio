import React from "react";

// ==========================================
// 1. SAMPLE DATA (Modify or replace with props)
// ==========================================
const projectData = [
  {
    id: 1,
    title: "E-Commerce Analytics Dashboard",
    description: "A real-time data visualization platform tracking user conversion funnels, inventory metrics, and monthly revenue streams with micro-frontend architecture.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: null // Pass image string URL here if available
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description: "An intelligent productivity application featuring automatic task prioritization, smart scheduling suggestions, and NLP-driven note taking features.",
    tags: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    image: null
  },
  {
    id: 3,
    title: "Decentralized File Storage",
    description: "A secure, encrypted cloud storage alternative utilizing IPFS protocol networks to ensure peer-to-peer file sharing privacy and redundancy.",
    tags: ["React", "Solidity", "Web3.js", "IPFS"],
    image: null
  }
];

// ==========================================
// 2. SUB-COMPONENT: INDIVIDUAL CARD
// ==========================================
const ProjectCard = ({ title, description, tags, image, index }) => {
  // Generates offset rotations to build the visual stack depth
  const rotationDegrees = index === 0 ? '-rotate-2' : index === 1 ? 'rotate-1' : 'rotate-3';
  const translationY = index === 0 ? '-translate-y-2' : index === 1 ? 'translate-y-1' : 'translate-y-3';

  return (
    <div 
      className={`absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-500 ease-out transform 
        group-hover:static group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-indigo-500/10
        ${rotationDegrees} ${translationY}`}
      style={{ zIndex: 3 - index }}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Card Media Preview */}
          <div className="w-full h-40 bg-slate-800 rounded-xl mb-4 overflow-hidden relative border border-slate-700/50">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-slate-500 text-sm font-mono">&lt;project_thumbnail /&gt;</span>
              </div>
            )}
          </div>

          {/* Texts */}
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
          <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">{description}</p>
        </div>

        {/* Tech Badges */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN EXPORT COMPONENT
// ==========================================
export default function Works() {
  return (
    <section className="min-h-screen bg-slate-950 py-20 px-4 flex flex-col justify-center items-center">
      {/* Header section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Featured Creations
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-400">
          Hover over the deck to unpack the stack layout and review full project configurations.
        </p>
      </div>

      {/* Interactive Deck Structure */}
      <div className="w-full flex items-center justify-center p-4">
        <div className="group relative w-full max-w-[340px] h-[420px] md:max-w-none md:h-auto md:grid md:grid-cols-3 md:gap-6">
          {projectData.map((project, index) => (
            <div 
              key={project.id} 
              className="absolute inset-0 md:relative md:inset-auto h-[420px] transition-all duration-500"
              style={{
                transform: `translateY(${index * 12}px) scale(${1 - index * 0.04})`,
                zIndex: 10 - index
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


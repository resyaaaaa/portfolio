import React, { useState, useCallback, forwardRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ProjectsData = [
  {
    title: "Echoeyes",
    tag: "Final Year Project",
    description:
      "At my fourth year in UMPSA, my supervisor and I envision the future of visually impaired pedestrians by developing a mobile-based Object Detection and Recognition using lightweight yolo8n and Flutter that assist visually impaired to navigate safely on roads.",
    image:
      "https://plus.unsplash.com/premium_photo-1670519227907-aa249c422a99?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Foodie Journal",
    tag: "Web Platform",
    description:
      "A collaborative university project created for food enthusiasts to log recipes, ratings and dining experiences online.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Workshop Management System",
    tag: "Mobile App",
    description:
      "A collaborative university project developed using Flutter and Firebase for workshop owners and foremen to manage schedules, inventory and payroll system.",
    image:
      "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "SPOMET",
    tag: "Web Platform",
    description:
      "A minimalist university project created for parents and students expenses and allowances management. Built using Laravel, TailwindCSS and MySQL",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Aurora Dashboard",
    tag: "Product Design",
    description:
      "A real-time analytics dashboard with custom charting, dark mode, and drag-to-reorder widgets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Dolce Gelato",
    tag: "Frontend Development",
    description:
      "A minimalist gelato shop, a mini project built during free time with React and TailwindCSS/Vite, focused on aesthetic, layout and responsiveness.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Yaya Kitchen",
    tag: "UI/UX Design",
    description:
      "A mini UI/UX design project built with Figma for small local pizza business, focused on aesthetic, layout and responsiveness.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "KKMJP",
    tag: "Web Platform",
    description:
      "A responsive website for insurance company to enhance online presence and visibility. Managed SEO and development using Hostinger and n8n for automation.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.kkmjp.my",
  },
  {
    title: "Appointment Booking System",
    tag: "Full-Stack",
    description:
      "A full-stack prototype system using React, Node.js (Express.js) and MySQL, developed during internship training to solve small to medium business owner's problem in scheduling customer bookings.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    link: "https://appointment-booking-system-omega.vercel.app",
  },
];

const PEEK_DEPTH = 2;

const Project = forwardRef(({ projects = ProjectsData, className }, ref) => {
  const [index, setIndex] = useState(0);
  const count = projects.length;

  const goTo = useCallback(
    (newIndex) => {
      setIndex(((newIndex % count) + count) % count);
    },
    [count]
  );

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      ref={ref}
      className={`w-full max-w-md sm:max-w-xl md:max-w-2xl scroll-mt-20 lg:max-w-3xl mx-auto select-none outline-none py-12 px-4 ${className || ""}`}
      tabIndex={0}
      role="region"
      aria-label="Project showcase"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      {/* Section Header Matching App Style */}
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">Projects</h2>
        <p className="font-body text-sm text-muted">Some of selected works that I recently builds</p>
      </div>

      {/* Deck area */}
      <div className="relative pt-4 pr-4 sm:pt-6 sm:pr-6 md:pt-8 md:pr-8">
        <div className="relative h-96 sm:h-64 md:h-72 lg:h-80">
          {projects.map((project, i) => {
            let depth = i - index;
            if (depth < 0) depth += count;

            if (depth > PEEK_DEPTH) return null;

            const isFront = depth === 0;
            const zIndex = 10 - depth;

            const depthTransformClasses =
              depth === 0
                ? "translate-x-0 translate-y-0 scale-100"
                : depth === 1
                  ? "translate-x-2 -translate-y-2 scale-[0.98] sm:translate-x-3 sm:-translate-y-3 md:translate-x-4 md:-translate-y-4"
                  : "translate-x-4 -translate-y-4 scale-[0.96] sm:translate-x-6 sm:-translate-y-6 md:translate-x-8 md:-translate-y-8";

            return (
              <div
                key={project.title + i}
                onClick={() => {
                  if (!isFront) goTo(i);
                }}
                className={`absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-md bg-bg/80 shadow-xl border border-text/10
                  transition-all duration-500
                  ${depthTransformClasses}
                  ${isFront ? "opacity-100" : "cursor-pointer opacity-40 hover:opacity-60"}`}
                style={{
                  zIndex,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                aria-hidden={!isFront}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                  {/* Text panel */}
                  <div className="flex flex-col justify-center gap-1.5 sm:gap-3 p-4 sm:p-6 md:p-8 order-2 sm:order-1 h-3/5 sm:h-full">
                    <span className="text-[10px] sm:text-xs font-body font-medium tracking-widest uppercase text-muted">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-sm sm:text-base md:text-2xl font-bold text-text leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="hidden sm:block font-body text-xs md:text-sm text-muted leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <a
                      href={isFront ? project.link : undefined}
                      onClick={(e) => !isFront && e.preventDefault()}
                      className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-text/20
                        text-text text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 hover:bg-text/5 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Image panel */}
                  <div className="relative order-1 sm:order-2 h-2/5 sm:h-full min-h-[120px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      draggable={false}
                    />
                    {/* Dark gradient overlay to blend smoothly into layout environments */}
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-transparent to-bg/20 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 sm:mt-8 px-2">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-text/20
            text-text hover:bg-text/5 transition-colors duration-300 shrink-0
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dynamic Dot Indicators matching global UI rhythm */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none
                ${i === index ? "w-6 bg-text" : "w-1.5 bg-text/20 hover:bg-text/40"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-text/20
            text-text hover:bg-text/5 transition-colors duration-300 shrink-0
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
});

Project.displayName = "Project";

export default Project;
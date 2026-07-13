import React, { useState, useEffect, useRef, forwardRef } from 'react';

const About = forwardRef(({ className = "" }, ref) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Sync internal ref with forwarded ref
  useEffect(() => {
    if (typeof ref === 'function') ref(sectionRef.current);
    else if (ref) ref.current = sectionRef.current;
  }, [ref]);

  // Handle smooth scroll fade-in animation rules
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`w-full max-w-md sm:max-w-xl md:max-w-2xl scroll-mt-20 lg:max-w-3xl mx-auto select-none outline-none py-12 px-4 ${className || ""}`}
    >
      {/* Section Header Matching App Design Style */}
      <div className="mb-8 text-center sm:text-left">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">About Me</h2>
        <p className="font-body text-sm text-muted">My background and academic journey</p>
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">

        {/* Left Side: Content Box */}
        <div className="md:col-span-3 text-justify hyphens-auto font-body text-sm text-muted space-y-4 leading-[1.6]">
          <p className="text-text font-medium text-base">My name is Resyalizatul Binti Omar.</p>
          <p>
            I am a fresh graduate Software Engineering student at Universiti Malaysia Pahang
            Al-Sultan Abdullah (UMPSA). Born and raised in rural Lahad Datu, Sabah, I’ve grown
            into an adaptable learner through my journey across Malaysia.
          </p>

          <header>
            <h3 className="font-display text-lg md:text-xl font-bold text-text mt-6 mb-2 text-left leading-snug">
              The Relentless Learner: Why Starting from Zero Was My Best Move
            </h3>
          </header>

          <div className="space-y-3">
            <p>
              Academically, I secured <strong className="text-text font-semibold">7As</strong> in secondary school with a background in Computer Science, earning a full
              scholarship from the <strong className="text-text font-semibold">Yayasan Sabah Group</strong>.
            </p>
            <p>
              Transitioning into Economics, I graduated with STPM and was a <strong className="text-text font-semibold">Top 3 student</strong> with
              a <strong className="text-text font-semibold">CGPA of 3.92</strong>, proving my ability to master new disciplines rapidly.
            </p>
            <p>
              Trying to figure out my career path and passion, I pursued my dream to study Software Engineering<strong className="text-text font-semibold"> at UMPSA, Pekan, Pahang.</strong> I graduated with a <strong className="text-text font-semibold">CGPA of 3.30, </strong> and passionate to become a Mobile App or Web Developer as I begin my career journey.
            </p>

            {/* Accent Highlight Box matching styling constraints */}
            <div className="p-4 sm:p-6 bg-text/5 border-l-4 border-text/40 rounded-r-xl my-6 text-left text-text/90 font-medium">
              During my study, my work integrated Software Engineering, Web Development, Data Analytics, Machine Learning, Cyber Security, and Networking,
              shaping my holistic understanding of modern computing systems.

              {/* Interactive Action Call: Download CTA */}
              <div className="mt-12 text-left">
                <a
                  href="./transcript-academic.pdf"
                  aria-label="Transcript Academic"
                  download="Resyalizatul Transcript Academic.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-text/20
            text-text text-xs sm:text-sm font-medium tracking-widest uppercase px-4 py-1.5 hover:bg-text/5 transition-colors duration-300"
                >
                  Download Transcript Academic
                </a>

              </div>
              <div>
                <div className="mt-4 text-left">
                  <a
                    href="./resume.pdf"
                    download="Resyalizatul Resume.pdf"
                    className="inline-flex items-center justify-center rounded-full border border-text/20
            text-text text-xs sm:text-sm font-medium tracking-widest uppercase px-6 py-1.5  hover:bg-text/5 transition-colors duration-300"
                  >
                    Download Resume
                  </a>
                </div></div>
            </div>

            <p className="font-body italic text-text text-center sm:text-left font-medium pt-2">
              "I may have started from zero, but zero was the strongest foundation I could have built."
            </p>
          </div>

          <footer className="pt-6 font-body font-bold text-[10px] tracking-widest uppercase text-muted text-left border-t border-text/10">
            UMPSA SOFTWARE ENGINEERING GRADUATE • YAYASAN SABAH SCHOLAR
          </footer>
        </div>

        {/* Right Side: Stacked Halos Profile Container */}
        <div className="md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-6 sm:gap-8 md:pt-4">
          <div className="relative group shrink-0">
            <div className="absolute inset-0 rounded-full bg-text/5 scale-105 blur-sm transition-transform duration-500 group-hover:scale-110" />
            <img
              src="./images/spm2.jpeg"
              alt="SPM Result Day"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border border-text/10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
          </div>
          <div className="relative group shrink-0">
            <div className="absolute inset-0 rounded-full bg-text/5 scale-105 blur-sm transition-transform duration-500 group-hover:scale-110" />
            <img
              src="./images/stpm.jpeg"
              alt="STPM Muet"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border border-text/10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
          </div>

          <div className="relative group shrink-0">
            <div className="absolute inset-0 rounded-full bg-text/5 scale-105 blur-sm transition-transform duration-500 group-hover:scale-110" />
            <img
              src="./images/umpsa1.jpeg"
              alt="UMPSA Final Paper Exam"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border border-text/10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
          </div>
          <div className="relative group shrink-0">
            <div className="absolute inset-0 rounded-full bg-text/5 scale-105 blur-sm transition-transform duration-500 group-hover:scale-110" />
            <img
              src="./images/intern3.jpeg"
              alt="Internship at AIA"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border border-text/10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
          </div>
          <div className="relative group shrink-0">
            <div className="absolute inset-0 rounded-full bg-text/5 scale-105 blur-sm transition-transform duration-500 group-hover:scale-110" />
            <img
              src="./images/intern1.jpeg"
              alt="Industrial Training Event"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border border-text/10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
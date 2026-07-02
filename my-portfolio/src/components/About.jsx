import React, { useState, useEffect, useRef, forwardRef } from 'react';

const About = forwardRef(({ className = "", onBack }, ref) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof ref === 'function') ref(sectionRef.current);
    else if (ref) ref.current = sectionRef.current;
  }, [ref]);

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

  const TOKENS = {
    colorBg: "#f5f1e8",
    colorAccent: "#1a1a1a",
    fontDisplay: "'Cormorant Garamond', serif",
    fontBody: "'Inter', sans-serif",
  };

  const sectionStyle = {
    padding: "6rem 2rem",
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(25px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    willChange: 'opacity, transform',
  };

  return (
    <section id="about" ref={sectionRef} className={className} style={sectionStyle}>
      <h2 style={{ fontFamily: TOKENS.fontDisplay, fontSize: '5rem' }}>
        About Me
      </h2>

      <div style={styles.grid}>
        {/* TEXT CONTENT - Added textAlign: "justify" here */}
        <div className="about-info" style={styles.textContent}>
          <p>My name is Resyalizatul Binti Omar</p>
          <p>
            I am a fresh graduate Software Engineering student at Universiti Malaysia Pahang 
            Al-Sultan Abdullah (UMPSA). Born and raised in rural Lahad Datu, Sabah, I’ve grown 
            into an adaptable learner through my journey across Malaysia.
          </p>

          <header>
            <h1 style={{ fontSize: '1.5rem', margin: '1.5rem 0 0.5rem', textAlign: 'left' }}>
              The Relentless Learner: Why Starting from Zero Was My Best Move
            </h1>
          </header>

          <article>
            <p>
              Academically, I secured <strong>7As</strong> in secondary school, earning a full 
              scholarship from the <strong>Yayasan Sabah Group</strong>.
            </p>

            <h3>The Art of the Intellectual Pivot</h3>
            <p>
              Transitioning into Economics, I graduated as a <strong>Top 3 student</strong> with 
              a <strong>CGPA of 3.92</strong>, proving my ability to master new disciplines rapidly.
            </p>

            <div style={styles.highlightBox}>
              My work integrated Data Analytics, Machine Learning, Cyber Security, and Networking, 
              shaping my holistic understanding of modern computing systems.
            </div>

            <p style={{ fontStyle: "italic", fontWeight: 500 }}>
              "I may have started from zero, but zero was the strongest foundation I could have built."
            </p>
          </article>

          <footer style={{ marginTop: "2rem", fontWeight: 600, fontSize: '0.75rem', textAlign: 'left' }}>
            UMPSA SOFTWARE ENGINEERING GRADUATE • YAYASAN SABAH SCHOLAR
          </footer>
        </div>

        {/* IMAGE */}
        <div style={styles.imageContainer}>
          <div className="profile-halo">
            <img
              src="./images/smkdk.jpeg"
              alt="secondary school"
              style={{ maxWidth: "260px", borderRadius: "50%", boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div className="profile-halo">
            <img
              src="./images/umpsa.jpeg"
              alt="university"
              style={{ maxWidth: "260px", borderRadius: "50%", boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>

      <a href="./my-resume.pdf" download="Resyalizatul-Resume.pdf" style={styles.resumeBtn}>
        Download Resume
      </a>
    </section>
  );
});

const styles = {
  grid: {
    display: "grid",
    gap: "3rem",
    gridTemplateColumns: "1.5fr 1fr",
  },
  // Added this new style block
  textContent: {
    textAlign: "justify",
    hyphens: "auto",
    lineHeight: "1.6", // Improves readability when justified
  },
  highlightBox: {
    padding: "1.5rem",
    background: "rgba(0,0,0,0.05)",
    borderLeft: "4px solid #1a1a1a",
    margin: "2rem 0",
    textAlign: "left", // Usually looks better left-aligned inside boxes
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  resumeBtn: {
    display: "inline-block",
    marginTop: "3rem",
    padding: "0.7rem 1.8rem",
    borderRadius: "40px",
    background: "#1a1a1a",
    color: "#f5f1e8",
    textDecoration: "none",
    fontSize: "0.8rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  }
};

export default About;
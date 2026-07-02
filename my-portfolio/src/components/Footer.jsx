import React, { useEffect } from 'react';

const Footer = ({ className }) => {
  useEffect(() => {
    // Ice cream drips melting from the wave border edge
    const container = document.getElementById("particle-container");
    if (!container) return;
    
    const fragment = document.createDocumentFragment();

    // Create 40 drips along the wave edge
    for (let i = 0; i < 40; i++) {
      const span = document.createElement("span");
      span.classList.add("particle");

      // Varied drip blob sizes
      const dripSize = 1.5 + Math.random() * 3;
      span.style.setProperty("--dim", `${dripSize}rem`);
      
      // How long each drip extends downward
      const dripLength = 30 + Math.random() * 50;
      span.style.setProperty("--drip-length", `${dripLength}px`);
      
      // Spread drips across the width
      span.style.setProperty("--pos-x", `${Math.random() * 100}%`);
      
      // Varied drip speeds (slower = more dramatic)
      const dripSpeed = 3 + Math.random() * 4;
      span.style.setProperty("--dur", `${dripSpeed}s`);
      
      // Staggered delays for continuous melting effect
      span.style.setProperty("--delay", `${-1 * (Math.random() * 10)}s`);

      fragment.appendChild(span);
    }
    
    container.appendChild(fragment);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={className}>
      {/* Particle Container for animated background */}
      <div id="particle-container" className="particle-container"></div>

      {/* Main Footer Content */}
      <div className="footer-container">
        
        {/* Footer Top Section */}
        <div className="footer-top">
          
          {/* Branding & CTA */}
          <div className="footer-brand">
            <h2 className="footer-logo">Resyalizatul</h2>
            <p className="footer-tagline">
              Crafting beautiful digital experiences with code and creativity
            </p>
            <a href="#home" className="footer-cta">
              <span>Let's Work Together</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#ui-design">UI/UX Design</a></li>
              <li><a href="#mobile-apps">Mobile Apps</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h3 className="footer-section-title">Connect</h3>
            <div className="footer-social">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 10H16M16 10L12 6M16 10L12 14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Resyalizatul. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
            <p className="footer-credit">
              Designed & Built with <span className="heart">❤️</span> by Resyalizatul
            </p>
          </div>
        </div>

      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
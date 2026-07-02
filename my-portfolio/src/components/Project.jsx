import React from 'react';

const Project = ({ className }) => {
  return (
    <section id="projects" className={className}>
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>University Projects</h3>
          <p>Project presentations</p>
          <a href="https://www.canva.com/design/DAG9C6VlHUQ/xhLKoLNeUiK33ZhDG3HTvA/edit?utm_content=DAG9C6VlHUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">View Canva</a>
        </div>
        <div className="project-card">
          <h3>Other Project</h3>
          <p>Visit my GitHub Repositories</p>
          <a href="https://github.com/resyaaaaa?tab=repositories">View GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Project;

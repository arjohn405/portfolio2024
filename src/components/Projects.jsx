import React from 'react'

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/e-commerce-platform",
      demo: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Vue.js", "D3.js", "Firebase"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "#"
    },
    {
      title: "AI Image Generator",
      description: "Machine learning powered image generation tool",
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Python", "TensorFlow", "React"],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Vite",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Vite", "CSS3"],
      github: "https://github.com/yourusername/portfolio",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Socket.io", "Express"],
      github: "https://github.com/yourusername/task-manager",
      demo: "#"
    }
  ];

  const scrollLeft = () => {
    document.querySelector('.projects-grid').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.querySelector('.projects-grid').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Projects 
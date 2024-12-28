import React from 'react'

function Projects() {
  const projects = [
    {
      title: "ResuMech: Automated Resume Analysis Engine",
      description: "The primary goal of this project is to develop an intelligent system that utilizes Natural Language Processing (NLP) techniques to analyze resumes.",
      image: "https://images.pexels.com/photos/5598289/pexels-photo-5598289.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "HTML", "CSS"],
      github: "https://github.com/arjohn405/resume-project.git",
      demo: "#"
    },
    {
      title: "Smart Drowsiness Detection with Real-Time Gender Classification",
      description: "An AI-powered system detecting drowsiness, yawning, and classifying gender in real time. Features alarm alerts.",
      image: "https://images.pexels.com/photos/1392621/pexels-photo-1392621.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "HTML", "CSS"],
      github: "https://github.com/arjohn405/drown-detect.git",
      demo: "#"
    },
    {
      title: "Culinary AI: Recipe Generation and Image Recognition",
      description: "A system that generates recipes ingredients.",
      image: "https://images.pexels.com/photos/9028872/pexels-photo-9028872.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React"],
      github: "https://github.com/arjohn405/recipe-ai.git",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Vite",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Vite", "CSS3"],
      github: "https://github.com/arjohn405/portfolio2024.git",
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
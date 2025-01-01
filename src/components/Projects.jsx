import React from 'react'

function Projects() {
  const projects = [
    {
      title: "ResuMech: Automated Resume Analysis Engine",
      description: "The project is to develop an intelligent system that utilizes Natural Language Processing (NLP) techniques to analyze resumes.",
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471611285_9025420054170907_8597590309410600294_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHEBC6Ygkzb4eL_87gt2M3zrV4kJ6Jxg4etXiQnonGDh4Bv3ZWZtNG7qCx_nWJhRVJUZk87a-cX9rSPztnwoEL9&_nc_ohc=D9v5IfByFzkQ7kNvgH4E7Zq&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gFFhitUtSIMmp5JLQUMY6LCkfUma2lp3FvmTSqJGfDQ6A&oe=679C7965",
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
      image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471601308_1268572217711672_6910674832595451007_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH5CCecRY6UOnyDLrpgvyR6EG7eBYp-wpUQbt4Fin7ClR7yYJcOyE3LBRUmNvZv6Ln3nxWPl0YghmLweO_r_USF&_nc_ohc=nk7EpQGGLkQQ7kNvgGYdXBN&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gEl8C1wOyTcLXufmTBBCj4jxNWUP3RXaLZwC-Ku-kctfQ&oe=679C860F",
      technologies: ["Python", "TensorFlow", "React"],
      github: "https://github.com/arjohn405/recipe-ai.git",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Vite",
      image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471611285_9180226568665511_2735581127313940392_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHgEYLvLMxQD_8A9840s-l9upsZH83V8Mq6mxkfzdXwypludCCatXWQvs2Vi3tv8PwFmwDc3iZE_XcOWEgAFaJL&_nc_ohc=6Q3P_vQxUqMQ7kNvgGAhNIN&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gHIDvw2kEac9ECLdZp1uyy1_fIgGhmXZe7-qPXtYshSLg&oe=679C8CEF",
      technologies: ["React", "Vite", "CSS3"],
      github: "https://github.com/arjohn405/portfolio2024.git",
      demo: "https://arjohncapucion.vercel.app/"
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
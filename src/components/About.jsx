import React from 'react'

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Professional headshot" 
          />
        </div>
        <div className="about-content">
          <p>Hello! I'm a passionate web developer with expertise in React and modern web technologies.</p>
          <p>With over X years of experience in web development, I specialize in creating responsive and user-friendly applications that solve real-world problems.</p>
          <p>My journey in tech has led me to work with various technologies and frameworks, always staying current with the latest industry trends.</p>
          
          <a href="/path-to-your-resume.pdf" className="resume-button" download>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About 
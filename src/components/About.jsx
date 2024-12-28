import React from 'react'

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/467759948_2588183508048634_4362839040130438672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGsq9-I7hOtrXIx3wzB1T_4syQkOFCC_qqzJCQ4UIL-qqjMsGmr5VOUn8cimCk6pU543aic9iGYJLf-sDU2zUW8&_nc_ohc=NOQJiGjwIGwQ7kNvgEM11VR&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=AsYIkpYdumNjuszzzDQLrCj&oh=00_AYA4tBQVh42OX_xZ3jRKvBM70gJYey9TUJrNlXX2L7zXng&oe=67755EFE" 
            alt="Professional headshot" 
          />
        </div>
        <div className="about-content">
          <p>Hi, I'm <span className="highlight">Arjohn V. Capucion</span>, a passionate Freelancer, Video Editor, and Front-end Developer based in Quezon City, Philippines. The Chief of Opertations in <span className="highlight">Craftora</span></p><br/>
          <p> Currently pursuing a <span className="highlight">Bachelor of Science in Computer Science</span> at the Technological Institute of the Philippines, I combine my technical knowledge, creativity, and leadership experience to deliver innovative solutions.</p><br/>
          <p> With a strong background in Video Editing, UI/UX Design, and collaborative projects, I thrive in roles that blend technology and artistry </p>
          
          
          <a href="/Capucion, Arjohn_Resume .pdf" className="resume-button" download>
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
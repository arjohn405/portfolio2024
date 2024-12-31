import React from 'react'
import Header from './components/Header'
import About from './components/About'
import LogoScroll from './components/LogoScroll'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Speaking from './components/Speaking'
import Contact from './components/Contact'
import Hackathon from './components/Hackathon'
import Volunteer from './components/Volunteer'
import VideoPortfolio from './components/VideoPortfolio'

function App() {
  return (
    <div className="app">
      <div className="background-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Header />
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Arjohn</span></h1>
            <p className="hero-text">Junior Developer & UI/UX Designer</p>
            
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#contact" className="secondary-btn">Hire Me!</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/467456245_457406087205842_1344710649005278150_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFcuwRUmM7tHDpxYY1fcN-u-DiS5HR_r2j4OJLkdH-vaH70esEc6_UC7cBPt_gVAnn8CQDrY4pS9yjQBP-l2mb5&_nc_ohc=ZqwV1wv3BzkQ7kNvgEWICBI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gGJmix8wuOrZvj1jYSNVIaWCKEV8Pb1NnWFdZwX9agzBg&oe=67975784" 
              alt="Developer workspace with laptop and code" 
            />
          </div>
        </div>
        <About />
        <LogoScroll />
        <WorkExperience />
        <Projects />
        <Speaking />
        <Hackathon />
        <Volunteer />
        <VideoPortfolio />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Arjohn C. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/arjohn405" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arjohn-capucion/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/arjohn.capucion/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default App 
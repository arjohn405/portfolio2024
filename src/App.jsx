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
import Banner from './components/Banner'
import UIUXPortfolio from './components/UIUXPortfolio'

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
              src="assets/banner.jpg" 
              alt="Developer workspace with laptop and code" 
            />
          </div>
        </div>
        <About />
        <LogoScroll />
        <WorkExperience />
        <Projects />
        <Banner imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" />
        <Speaking />
        <Hackathon />
        <Banner imageUrl="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <Volunteer />
        <VideoPortfolio />
        <Banner imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <UIUXPortfolio />
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
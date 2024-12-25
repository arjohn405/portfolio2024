import React from 'react'
import Header from './components/Header'
import About from './components/About'
import LogoScroll from './components/LogoScroll'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Speaking from './components/Speaking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
            <p className="hero-text">Full Stack Developer & UI/UX Designer</p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
              alt="Developer workspace with laptop and code" 
            />
          </div>
        </div>
        <About />
        <LogoScroll />
        <WorkExperience />
        <Projects />
        <Speaking />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Your Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default App 
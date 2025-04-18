import React, { useState, useEffect } from 'react'
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
  // Check if user previously set a theme preference
  const savedTheme = localStorage.getItem('theme');
  const [isDarkTheme, setIsDarkTheme] = useState(
    savedTheme ? savedTheme === 'dark' : true
  );

  // Update theme and save preference
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Apply theme class to body when theme changes
  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`app ${!isDarkTheme ? 'light-theme' : ''}`}>
      <div className="background-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
        <Banner imageUrl="assets/banner.jpg" />
        <Speaking />
        <Hackathon />
        <Banner imageUrl="assets/banner2.jpg" />
        <Volunteer />
        <VideoPortfolio />
        <Banner imageUrl="assets/banner.jpg" />
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
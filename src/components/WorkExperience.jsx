import React, { useRef } from 'react'

function WorkExperience() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const experiences = [
    {
      company: "EduFied",
      position: "UI/UX Designer Trainee",
      period: "Jan 27, 2025 - April 9, 2025 ",
      description: "Worked as a UI/UX Designer Intern.",
      achievements: [
        "Create templates for the website",
        "Timely Delivery weekly design projects",
        "Communicate with the Project Manager and to the Developers"
      ],
      logo: "/assets/fillpass.jpeg",
      color: "#eba832"
    },
    {
      company: "ABS-CBN Corporation",
      position: "YouTube Video Compliance",
      period: "May 16, 2023 - May 1, 2025",
      description: "100% Data validation of song/OSR ownership in various YouTube channels.",
      achievements: [
        "Data Visualization and Analysis",
        "Ownership Validation and Compliance",
        "Report Generation and Presentation"
      ],
      logo: "/assets/ABS-CBN_(2013).svg.png",
      color: "#d89b29"
    },
    {
      company: "SQME Professionals, Inc.",
      position: "Web Developer Intern",
      period: "October 18, 2021- January 18, 2022",
      description: "Worked as a Front End Developer Intern.",
      achievements: [
        "Built design for the website",
        "Conducted Front End Development",
        "Implement users experience testing"
      ],
      logo: "/assets/tslogo.png",
      color: "#e9a72b"
    },
    {
      company: "MaxOut Digital Marketing Agency",
      position: "Sales Executive",
      period: "February 8, 2022- July 5, 2023",
      description: "Worked as a Part time Sales Executive.",
      achievements: [
        "Developed 5 projects in a span of 5 months",
        "Timely Delivery of Projects and Clients",
        "Closing Deals and Sales"
      ],
      logo: "/assets/alaslogo.png",
      color: "#f0b846"
    },
    {
      company: "Moxie Denver Entertainment",
      position: "Freelance Video Editor",
      period: "Oct 13, 2022 - Dec 20, 2023 ",
      description: "Worked as a Project Base Video Editor.",
      achievements: [
        "Create 5 video projects in a span of 1 month",
        "Timely Delivery weekly video projects",
        "Clear Communication with the client"
      ],
      logo: "/assets/moxie1.png",
      color: "#eba832"
    },
  ];

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-container">
        <button 
          className="scroll-button left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div className="experience-timeline" ref={scrollContainerRef}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card" style={{'--accent-color': exp.color}}>
              <div className="experience-header">
                <div className="company-logo">
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="company-info">
                  <h3>{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="achievements-container">
                <h4>Key Achievements</h4>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <span className="achievement-bullet">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="scroll-button right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </section>
  )
}

export default WorkExperience 
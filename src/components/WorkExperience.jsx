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
      period: "Jan 27, 2025 - Present ",
      description: "Worked as a UI/UX Designer.",
      achievements: [
        "Create templates for the website",
        "Timely Delivery weekly design projects",
        "Communicate with the Project Manager and to the Developers"
      ],
      logo: "assets/fillpass.jpeg",
      color: "#f3505e"
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
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFmqs9glBwQcw/company-logo_200_200/company-logo_200_200/0/1630548466099/abs_cbn_logo?e=1743638400&v=beta&t=ljza5nPrikdaWx9qQIMgyKf9ENjuQeHRddczfpw_FRY",
      color: "#ff6b6b"
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
      logo: "https://media.licdn.com/dms/image/v2/C510BAQFFuFtuPo7_QA/company-logo_200_200/company-logo_200_200/0/1630635152786/sqme_professionals_inc_logo?e=1743638400&v=beta&t=0uWhJDL5FArJ21NQ07CXc0EStLRWq9KxI6OIFwGOWWk",
      color: "#1b75bb"
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
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEjXokYVHbMdA/company-logo_100_100/company-logo_100_100/0/1661959124145?e=1743638400&v=beta&t=i9l9abSygwJDTkFWSw000GgoUzPb2ryJgeS11DVRWLY",
      color: "#4ecdc4"
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
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TpZyahTO57RyK1d3MVyoRgxo3fSPBm_V0Q&s",
      color: "#feb626"
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
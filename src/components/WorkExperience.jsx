import React from 'react'

function WorkExperience() {
  const experiences = [
    {
      company: "ABS-CBN Corporation",
      position: "YouTube Video Compliance",
      period: "May 16, 2023 - October 16, 2024",
      description: "100% Data validation of song/OSR ownership in various YouTube channels.",
      achievements: [
        "Data Visualization and Analysis",
        "Ownership Validation and Compliance",
        "Report Generation and Presentation"
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.position}</h3>
              <span className="company">{exp.company}</span>
              <span className="period">{exp.period}</span>
            </div>
            <p>{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience 
import React from 'react'

function WorkExperience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Led development of enterprise-level applications using React and Node.js",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed responsive web applications using modern JavaScript frameworks",
      achievements: [
        "Built 20+ client websites",
        "Reduced load time by 60%",
        "Mentored junior developers"
      ]
    },
    {
      company: "StartUp Hub",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Worked on various web development projects using React and Vue.js",
      achievements: [
        "Developed 5 major features",
        "Implemented responsive designs",
        "Collaborated with UX team"
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
import React from 'react'

function Hackathon() {
  const hackathons = [
    {
      title: "The NextGen Start-Up Challenge 2024",
      role: "Participant",
      date: "July 2024",
      organizer: "Information Systems NextGen - Mapúa Universty-Makati",
      description: "Start-Up Challenge 2024 Pitching Day held on July 27, 2024 at Mapúa Cardinal.",
      achievement: "1st Placer",
      techStack: ["IOT", "UI/UX", "Python"],
      image: "/assets/ecoquestw.png"
    },
    {
      title: "Blockchain Campus Conference Whack A Thon",
      role: "Participant",
      date: "June 2024",
      organizer: "Superteam Philippines",
      description: "A Design Thinking Hackathon that aims to create a solution for bonk coin",
      achievement: "3rd Placer",
      techStack: ["Figma", "Node.js", "Blockchain"],
      image: "/assets/hackhaive.png"
    },
    {
      title: "Hack the Future: Technology for a Better World",
      role: "Participant",
      date: "November 2024",
      organizer: "Kaya Founders",
      description: "A 24-hour hackathon focused on developing solutions for tourism.",
      achievement: "3rd Placer",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "/assets/biyahero.png"
    },
    // Add more hackathons here
  ];

  return (
    <section id="hackathons">
      <h2>Hackathon Experience</h2>
      <div className="hackathon-grid">
        {hackathons.map((hack, index) => (
          <div key={index} className="hackathon-card">
            <div className="hackathon-image">
              <img src={hack.image} alt={hack.title} />
              <div className="hackathon-achievement">{hack.achievement}</div>
            </div>
            <div className="hackathon-content">
              <h3>{hack.title}</h3>
              <div className="hackathon-meta">
                <span>{hack.date}</span>
                <span>{hack.role}</span>
              </div>
              <p>{hack.description}</p>
              <div className="tech-stack">
                {hack.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hackathon 
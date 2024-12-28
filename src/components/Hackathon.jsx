import React from 'react'

function Hackathon() {
  const hackathons = [
    {
      title: "Hack The Track 2024",
      role: "Participant",
      date: "January 2024",
      organizer: "PLM Computer Science Society",
      description: "A 24-hour hackathon focused on developing innovative solutions for transportation challenges.",
      achievement: "Top 10 Finalist",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/468626051_1013334560805793_498166945573761532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGuAoXhaBkWlNXuAsA2fPKG186yR4vNCQbXzrJHi80JFwnMBlHdUwmebM6EYhlsIfQX74oLlr0f33lcZlScJBH&_nc_ohc=Qk23rq9oUGQQ7kNvgHmelOL&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AupRZS1zR2l7leG-jB11tLK&oh=00_AYDd3ghyayjE-f9IZH4NNux0N1Ez51g2sSSrLu0Yt5EDhg&oe=67756390"
    },
    {
      title: "Hack The Track 2024",
      role: "Participant",
      date: "January 2024",
      organizer: "PLM Computer Science Society",
      description: "A 24-hour hackathon focused on developing innovative solutions for transportation challenges.",
      achievement: "Top 10 Finalist",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/468626051_1013334560805793_498166945573761532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGuAoXhaBkWlNXuAsA2fPKG186yR4vNCQbXzrJHi80JFwnMBlHdUwmebM6EYhlsIfQX74oLlr0f33lcZlScJBH&_nc_ohc=Qk23rq9oUGQQ7kNvgHmelOL&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AupRZS1zR2l7leG-jB11tLK&oh=00_AYDd3ghyayjE-f9IZH4NNux0N1Ez51g2sSSrLu0Yt5EDhg&oe=67756390"
    },
    {
      title: "Hack The Track 2024",
      role: "Participant",
      date: "January 2024",
      organizer: "PLM Computer Science Society",
      description: "A 24-hour hackathon focused on developing innovative solutions for transportation challenges.",
      achievement: "Top 10 Finalist",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/468626051_1013334560805793_498166945573761532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGuAoXhaBkWlNXuAsA2fPKG186yR4vNCQbXzrJHi80JFwnMBlHdUwmebM6EYhlsIfQX74oLlr0f33lcZlScJBH&_nc_ohc=Qk23rq9oUGQQ7kNvgHmelOL&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AupRZS1zR2l7leG-jB11tLK&oh=00_AYDd3ghyayjE-f9IZH4NNux0N1Ez51g2sSSrLu0Yt5EDhg&oe=67756390"
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
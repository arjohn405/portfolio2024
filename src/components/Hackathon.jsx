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
      image: "https://media.licdn.com/dms/image/v2/D562DAQFDSUmM47KBlg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723353039167?e=1735988400&v=beta&t=HOvOFH7jv10dxyN64YotMsLUxuvpdDYMf2gu75_h1y4"
    },
    {
      title: "Blockchain Campus Conference Whack A Thon",
      role: "Participant",
      date: "June 2024",
      organizer: "Superteam Philippines",
      description: "A Design Thinking Hackathon that aims to create a solution for bonk coin",
      achievement: "3rd Placer",
      techStack: ["Figma", "Node.js", "Blockchain"],
      image: "https://media.licdn.com/dms/image/v2/D4D2DAQEcubT2gWhy-g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721351043242?e=1735988400&v=beta&t=sT70wjfDqCkQVyPm9J0ZnWBoZfbCy8rLmDqKNBlhJMU"
    },
    {
      title: "Hack the Future: Technology for a Better World",
      role: "Participant",
      date: "November 2024",
      organizer: "Kaya Founders",
      description: "A 24-hour hackathon focused on developing solutions for tourism.",
      achievement: "3rd Placer",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/465001100_2307033012989865_5986096322232073984_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHPY2M6CSmSR-UbWBV31N-IvyfYX05hOH-_J9hfTmE4fwaLjcQDZC4rWpgPzk3hp_0oXi5SD7h9JYifZFoabJM3&_nc_ohc=X_VvzTQQ2jYQ7kNvgGGq0yi&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gFKnwmIRpMp5M19rFX6Ej51-GeHRyYPqQv8PP1ynkFofw&oe=67973C9A"
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
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
      image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471850400_1142153883984095_7387870950622395221_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGmHdgY6-xh-rThXVEDDhGzVZUVW4bSt7VVlRVbhtK3tQDVBk2VY1DBI1aHUc9mQesVNUTnPSP2Cbt4dX9YG26H&_nc_ohc=-x4iRDldCM8Q7kNvgFEl7Ua&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gEyzHuBrV2vs6sIc8pPNRzEIdwLxBEMTPPeWFm35roUmg&oe=67A2D55C"
    },
    {
      title: "Blockchain Campus Conference Whack A Thon",
      role: "Participant",
      date: "June 2024",
      organizer: "Superteam Philippines",
      description: "A Design Thinking Hackathon that aims to create a solution for bonk coin",
      achievement: "3rd Placer",
      techStack: ["Figma", "Node.js", "Blockchain"],
      image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/472328594_3875887619407414_237138464850493189_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHsKzZ5FkihO8AL762tymPMcO6CxlZQYYpw7oLGVlBhige5DdTd3HzQ21i8eG3ewIyB1u4gPAuIeWjx8RJ5tMu1&_nc_ohc=a6BCl8LETJ4Q7kNvgEutBgQ&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gG4fBozmMBlJDG-CilPqhOvSnmmbUS11wlFnWEiV7knVA&oe=67A2E180"
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
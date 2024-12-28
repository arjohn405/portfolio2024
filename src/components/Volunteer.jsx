import React from 'react'

function Volunteer() {
  const volunteering = [
    {
      organization: "DEVCON Philippines",
      role: "Community Volunteer",
      period: "2023 - Present",
      description: "Actively contributing to tech community development and education.",
      activities: [
        "Organizing tech meetups and workshops",
        "Mentoring aspiring developers",
        "Contributing to open source projects"
      ],
      image: "https://devcon.ph/wp-content/uploads/2019/06/devco_logo_black.png"
    },
    {
      organization: "DEVCON Philippines",
      role: "Community Volunteer",
      period: "2023 - Present",
      description: "Actively contributing to tech community development and education.",
      activities: [
        "Organizing tech meetups and workshops",
        "Mentoring aspiring developers",
        "Contributing to open source projects"
      ],
      image: "https://devcon.ph/wp-content/uploads/2019/06/devco_logo_black.png"
    },
    // Add more volunteer experiences
  ];

  return (
    <section id="volunteer">
      <h2>Volunteer Experience</h2>
      <div className="volunteer-timeline">
        {volunteering.map((vol, index) => (
          <div key={index} className="volunteer-card">
            <div className="volunteer-image">
              <img src={vol.image} alt={vol.organization} />
            </div>
            <div className="volunteer-content">
              <h3>{vol.organization}</h3>
              <div className="volunteer-role">{vol.role}</div>
              <div className="volunteer-period">{vol.period}</div>
              <p>{vol.description}</p>
              <ul className="volunteer-activities">
                {vol.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Volunteer 
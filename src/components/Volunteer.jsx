import React from 'react'

function Volunteer() {
  const volunteering = [
    {
      organization: "DEVCON Philippines",
      role: "Community Volunteer",
      period: "2023 - Present",
      description: "Actively contributing to tech community development and education.",
      activities: [
        "Campus DEVCON Summit 2023 -  APC Campus",
        "DEVCON PRO Summit 2023",
        "Campus DEVCON Summit 2024 - UB Lipa Campus "
      ],
      image: "/assets/devconlogo.png"
    },
    {
      organization: "Blockchain Campus Conference",
      role: "Community Volunteer",
      period: "2023 - Present",
      description: "Actively contributing to blockchain campus community events.",
      activities: [
        "Blockchain Campus Conference 2023 - Mapúa University Makati",
        "Blockchain Campus Conference 2024 - iAcademy",
      ],
      image: "/assets/blockchainlogo.png"
    },
    {
      organization: "The Spectrum",
      role: "Community Volunteer",
      period: "2020 - Present",
      description: "Actively contributing to media organization compose of students.",
      activities: [
        "Christmas Music Video 2020",
        "Sa Mata ng Isang Bayani Documentary 2020",
        "AugusThings Interview 2022",
      ],
      image: "/assets/tslogo.png"
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
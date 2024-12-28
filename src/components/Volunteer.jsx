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
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/314552238_497750849062603_8378956834937194397_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExjiWrb46uULYuUuL9JGU_Bj-xuyJMT1IGP7G7IkxPUp64_L0yDOwbRMUo1gRaK45NwsXMqdPQH1pdjyWYWwbn&_nc_ohc=Z0KrHvDxR6cQ7kNvgFyG2x6&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AGkRDP4sqFCSNir-nFFnyQ2&oh=00_AYDjzEgeNgrPvpSSlVxTmOJzbqGnuY9WHHxfDOdUb91Nig&oe=67759D6E"
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
      image: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/448234721_122156208980136564_2091708297961492085_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-BV648epMV_chal74ZSlFDTfcWP6X_cUNN9xY_pf9xWxM9CxbzATWZlrLBTsb5HwqSjNCPQz0lOBjguzzxEqo&_nc_ohc=nKfU4tSNhoEQ7kNvgHzhb4G&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=AoTR8HDnHDqUJYcHc5Wqupk&oh=00_AYC_nMeKpHulAFtzVApFTQ-_jrvNI-f17wkahFlPTtk81g&oe=67758C79"
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
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/283080926_5068743213251193_8282183532686120542_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtMmBbmh-wdPSGNc_t3SNKFd-wqjUn-qoV37CqNSf6qpWm4b5tbcpZL8RUEm_ygyHX9fu59zD8l89Tl9_g5Mdr&_nc_ohc=lJloWVnAV9kQ7kNvgHO4NKw&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AD3ZcQUI_irmnW8OAeU-G9s&oh=00_AYDD9R7R8lTjfDFKSm9H8k6bII234hJRwcFVmF-bn3Ec8Q&oe=67759032"
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
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
      image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/368784174_1045607469813522_5580458218455349773_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGHBrgfd0W002WI4SbezCGJ0xIegzbb0nXTEh6DNtvSdbUsJa_Kzot8km1tkPLVjJGL8tlcC0Z-qSFoqI1yNfJt&_nc_ohc=Hv3Tu3D-SawQ7kNvgGAkSfW&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gF_bOCGg8TPqPOgNhcdKQvSIs8RJ7wFB-DrUNmwCmUR7w&oe=679D83F4"
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
      image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/470051647_9063296357061165_5537632640574563165_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGFmNr3HnT-4zSMCEdFYYHL76yssW8-7b_vrKyxbz7tv4IAv8UegF6TW027LGyZa4tKJpfqlSYbBmfTQoZzeB-p&_nc_ohc=FhEEVHwLC_AQ7kNvgH3zZzH&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gESfCgtTk49x5aT5W6SnAX0jm1jVfLVqRkmOIUg2qXRXA&oe=679D78F8"
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
      image: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t1.15752-9/470050734_4089318051298730_3516370618797966004_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF3dng2mqg_UQaiom24CX8U9n2HCrAK1Nz2fYcKsArU3LPhX9bseMxOz_a6pL4N8-Z7f3PZSwMRMd7mbyKIVqcp&_nc_ohc=-lW0rKhN-58Q7kNvgE05Iks&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-3.fna&oh=03_Q7cD1gGmh59eAG_McWXjSwR5miqUWfGgwiD65ihpiVKJhNzQhg&oe=679D8955"
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
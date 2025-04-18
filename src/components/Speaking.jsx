import React from 'react'

function Speaking() {
  const speeches = [
    {
      title: "30th CCS Days",
      date: "November 13, 2023",
      venue: "Open Society TIP Manila",
      description: "I discuss the importance and best practices in UI/UX Design.",
      image: "/assets/ostalk.png"
    },
    {
      title: "Hack The Track 2024",
      date: "November 28, 2024",
      venue: "PLM Computer Science Society ",
      description: "I deliver my expertise and inspiring message to our future volunteers.",
      image: "/assets/plmtalk.png"
    },
    {
      title: "Olongapo Tech Meetup",
      date: "November 30, 2024",
      venue: "Olongapo City",
      description: "Dsicussing about tech-community and what is DEVCON?.",
      image: "/assets/olongapotalk.png"
    },
    
    
  ];

  return (
    <section id="speaking">
      <h2>Speaking Engagements</h2>
      <div className="speaking-grid">
        {speeches.map((speech, index) => (
          <div key={index} className="speaking-card">
            <div className="speaking-image">
              <img src={speech.image} alt={speech.title} />
            </div>
            <div className="speaking-content">
              <div className="speaking-date">{speech.date}</div>
              <h3 className="speaking-title">{speech.title}</h3>
              <div className="speaking-venue">{speech.venue}</div>
              <p>{speech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speaking 
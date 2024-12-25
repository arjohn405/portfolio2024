import React from 'react'

function Speaking() {
  const speeches = [
    {
      title: "Modern Web Development with React",
      date: "March 15, 2024",
      venue: "TechConf 2024",
      description: "A deep dive into modern React development practices and patterns",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Future of AI in Web Applications",
      date: "January 20, 2024",
      venue: "AI Summit",
      description: "Exploring the integration of AI technologies in modern web applications",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Building Scalable Applications",
      date: "December 5, 2023",
      venue: "DevOps Conference",
      description: "Best practices for building and deploying scalable web applications",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
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
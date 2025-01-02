import React from 'react'

function Speaking() {
  const speeches = [
    {
      title: "30th CCS Days",
      date: "November 13, 2023",
      venue: "Open Society TIP Manila",
      description: "I discuss the importance and best practices in UI/UX Design.",
      image: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/467159548_1124427112569306_6338438417702639052_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG0wVp5EaKfo3ZLIVOE3PnYmp1ANfiyC4manUA1-LILiQBBymgf-QGnzZCwxN_tTV3T290SwfkpeMf2f2n0rVtl&_nc_ohc=g_QBlV2CoacQ7kNvgFjPtrh&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gHHG3EWuSwFaOmNUKWL5F6OkvWsYM0pKdVvgDZBV-4r1w&oe=679D9FCC"
    },
    {
      title: "Hack The Track 2024",
      date: "November 28, 2024",
      venue: "PLM Computer Science Society ",
      description: "I deliver my expertise and inspiring message to our future volunteers.",
      image: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/470051647_1839236676828305_4983640286377083434_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG3IAsB3a2ojE951y-pf00Yx2WBKQFKS83HZYEpAUpLzSEtHHaAVKz3QDK5K5Lpku3kWoisuQh62qTMAW7S2LrK&_nc_ohc=CEtrno7uoe4Q7kNvgH9BrJe&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gFrwW9ITAAWrXqKkGZd1OeoN1ZBudG2Pad83zY10m8sjQ&oe=679D80B7"
    },
    {
      title: "Olongapo Tech Meetup",
      date: "November 30, 2024",
      venue: "Olongapo City",
      description: "Dsicussing about tech-community and what is DEVCON?.",
      image: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/471633430_1507932409898136_2692392866443606054_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFUkRayu8iPxQK5mbpLgGPcT7Ug95-aDKBPtSD3n5oMoNL6ILB5QovrRjcNF0MU5zRvDi3R9DTpp7pKdfKso8zV&_nc_ohc=u8r4MpaChL8Q7kNvgGiDVKH&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gG2ZoyHVwxstICZo3u5v44KeYEzcCHY_N5V0laCRr9pZQ&oe=679D7859"
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
import React from 'react'

function Speaking() {
  const speeches = [
    {
      title: "30th CCS Days",
      date: "November 13, 2023",
      venue: "Open Society TIP Manila",
      description: "I discuss the importance and best practices in UI/UX Design.",
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/466871688_870475208625443_8450924227434674591_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFlcZCfa-UwLSkOQHWy_5dLKC-FIxS_B1ooL4UjFL8HWu60Y--clFUcRbL3Jr4Bwc4DsZzB-dX0_EHd2sRQp_Jc&_nc_ohc=Q8v8jkqMFbgQ7kNvgEjR_Uw&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=ACfr4KqQtyiHhXcQqCwLX5R&oh=00_AYC9U4t_DVb7mtilDBh8jBpximhtz9_QCiX7QAvBkqXaXw&oe=6775648C"
    },
    {
      title: "Hack The Track 2024",
      date: "November 28, 2024",
      venue: "PLM Computer Science Society ",
      description: "I deliver my expertise and inspiring message to our future volunteers.",
      image: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/468626051_1013334560805793_498166945573761532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGuAoXhaBkWlNXuAsA2fPKG186yR4vNCQbXzrJHi80JFwnMBlHdUwmebM6EYhlsIfQX74oLlr0f33lcZlScJBH&_nc_ohc=Qk23rq9oUGQQ7kNvgHmelOL&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AupRZS1zR2l7leG-jB11tLK&oh=00_AYDd3ghyayjE-f9IZH4NNux0N1Ez51g2sSSrLu0Yt5EDhg&oe=67756390"
    },
    {
      title: "Olongapo Tech Meetup",
      date: "November 30, 2024",
      venue: "Olongapo City",
      description: "Dsicussing about tech-community and what is DEVCON?.",
      image: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-6/469328359_122123645000542209_1348797109550507390_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEbwodMOKluuLAiqrcX9O3h3vhjsCBIxn_e-GOwIEjGf1flDsxvX7OcKTkvjefU94Qcb5RM8IMmw5Js4iNqoia0&_nc_ohc=QqM_XWJ-96gQ7kNvgFsKL0d&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-3.fna&_nc_gid=AWEH1w3QrcVCPhFzIIRQ6v3&oh=00_AYBdHFWPb0JRPVIX1uRtoJnjnPJu0029Wqs_YdbUxu4Deg&oe=677571F8"
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
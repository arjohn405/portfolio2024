import React, { useRef } from 'react';

function VideoPortfolio() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 400; // Adjust this value based on your card width
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const videos = [
    
    {
      title: "JhaiHoVLOG | Episode 11",
      description: "JhaihoVLOG's",
      videoUrl: "https://youtu.be/FSvGqeTLoZk?si=9wDE_MnTPsZKvo9E",
      thumbnail: "assets/jhaiho3.png"
    },
    {
      title: "JhaiHoVLOG | Episode 06",
      description: "JhaihoVLOG's",
      videoUrl: "https://youtu.be/E5sM6lsWJpY?si=R5rq64UjP-onlod9",
      thumbnail: "assets/jhaiho.png"
    },
    {
      title: "Fresh Skinlab Tomato Glass",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/r1HdVq1yxDQ?si=iiajDAzndLkjbF9N",
      thumbnail: "assets/bea2.png"
    },
    {
      title: "Maybelline Lifter Gloss ",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/lkYJbQmrqfE?si=V0IAVJxG_lmdGQi-",
      thumbnail: "assets/bea1.png"
    },
    {
      title: "Weekend Trip to Singapore",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/Cs2DYbaXKPk?si=TccrM8drSMXoPTKp",
      thumbnail: "assets/myrasingapore.png"
    },
    {
      title: "Kingdom Course Creator Ep 4",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/6A-ffSTCD-o?si=DuW_McgUq_smFKId",
      thumbnail: "assets/myrapodcast.png"
    },

    {
      title: "Somewhere in Colorado",
      description: "Somewhere in Colorado YT",
      videoUrl: "https://youtu.be/EOu4UPlDx1M",
      thumbnail: "assets/moxie1.png"
    },
    {
      title: "Beyond Tech Conference EP3",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/iSMsgW0y0hg",
      thumbnail: "assets/devcon3.png"
    },
    {
      title: "Beyond IT EP1 ",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/9KgiSCjwbCk",
      thumbnail: "assets/devcon.png"
    },
    {
      title: "DECEMBER SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/xGup-EE0v1Y",
      thumbnail: "assets/tscontent.png"
    },
    {
      title: "DOCUMENTARY SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/M1dq48R973k",
      thumbnail: "assets/ts3.png"
    },
    {
      title: "AUDIO MIXED DOWN",
      description: "CITE-DSC Tiktok",
      videoUrl: "https://youtu.be/3dXsTahurjo",
      thumbnail: "assets/dance.png"
    },
    {
      title: "VIDEO CAMPAIGN",
      description: "CITE-DSC Facebook",
      videoUrl: "https://youtu.be/-4D24Qy4gN4",
      thumbnail: "assets/cite.png"
    },
    // Add more video projects here
  ];

  return (
    <section id="video-portfolio">
      <h2>Video Projects</h2>
      <div className="video-container">
        <button 
          className="scroll-button left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div className="video-slider" ref={scrollContainerRef}>
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="video-button">Watch Video</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="scroll-button right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default VideoPortfolio; 
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
      thumbnail: "https://i.ytimg.com/an_webp/FSvGqeTLoZk/mqdefault_6s.webp?du=3000&sqp=CKq9zrsG&rs=AOn4CLClR9fV8UagqG5OGb4mYJAJTSe5AQ"
    },
    {
      title: "JhaiHoVLOG | Episode 06",
      description: "JhaihoVLOG's",
      videoUrl: "https://youtu.be/E5sM6lsWJpY?si=R5rq64UjP-onlod9",
      thumbnail: "https://i.ytimg.com/an_webp/E5sM6lsWJpY/mqdefault_6s.webp?du=3000&sqp=CKqnzrsG&rs=AOn4CLDQjMOT4_Zaq_HmvqPKnZ__gURDCw"
    },
    {
      title: "Fresh Skinlab Tomato Glass",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/r1HdVq1yxDQ?si=iiajDAzndLkjbF9N",
      thumbnail: "https://i.ytimg.com/an_webp/r1HdVq1yxDQ/mqdefault_6s.webp?du=3000&sqp=CKy2zrsG&rs=AOn4CLDxBzHDq3PbN6hITr5A0ev2iAB5Uw"
    },
    {
      title: "Maybelline Lifter Gloss ",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/lkYJbQmrqfE?si=V0IAVJxG_lmdGQi-",
      thumbnail: "https://i.ytimg.com/an_webp/lkYJbQmrqfE/mqdefault_6s.webp?du=3000&sqp=CI-wzrsG&rs=AOn4CLCPLh8hXrDiV14SBl_2_jcuHZ54_Q"
    },
    {
      title: "Weekend Trip to Singapore",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/Cs2DYbaXKPk?si=TccrM8drSMXoPTKp",
      thumbnail: "https://i.ytimg.com/an_webp/Cs2DYbaXKPk/mqdefault_6s.webp?du=3000&sqp=CKq9zrsG&rs=AOn4CLCuNfUNc5KifQXROTAorq5bYieDOg"
    },
    {
      title: "Kingdom Course Creator Ep 4",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/6A-ffSTCD-o?si=DuW_McgUq_smFKId",
      thumbnail: "https://i.ytimg.com/an_webp/6A-ffSTCD-o/mqdefault_6s.webp?du=3000&sqp=CJaszrsG&rs=AOn4CLD6ObaTX6Y7Ek0BAK8YS1_nmja_VA"
    },

    {
      title: "Somewhere in Colorado",
      description: "Somewhere in Colorado YT",
      videoUrl: "https://youtu.be/EOu4UPlDx1M",
      thumbnail: "https://i9.ytimg.com/vi/EOu4UPlDx1M/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFUgVyhlMA8=&rs=AOn4CLClhmS7e40p4pA_3iZqzz_ZX-dmtw"
    },
    {
      title: "Beyond Tech Conference EP3",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/iSMsgW0y0hg",
      thumbnail: "https://i9.ytimg.com/vi/iSMsgW0y0hg/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFEgMCh_MA8=&rs=AOn4CLB6cBFmv6x0mwoyWLi8Z_1tYSh3FQ"
    },
    {
      title: "Beyond IT EP1 ",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/9KgiSCjwbCk",
      thumbnail: "https://i9.ytimg.com/vi/9KgiSCjwbCk/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEkgVChlMA8=&rs=AOn4CLAulnru-e19DWbvTrJ07JBwByVZ0A"
    },
    {
      title: "DECEMBER SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/xGup-EE0v1Y",
      thumbnail: "https://i9.ytimg.com/vi/xGup-EE0v1Y/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AGoA4AC8AGKAgwIABABGGUgSyg-MA8=&rs=AOn4CLADRbxiPGMKfhkZWkle5sC3Y26JVQ"
    },
    {
      title: "DOCUMENTARY SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/M1dq48R973k",
      thumbnail: "https://i9.ytimg.com/vi/M1dq48R973k/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AGoA4AC8AGKAgwIABABGGUgVChRMA8=&rs=AOn4CLBaueSi57uZfkSQnV8SrQ3o_fCZOQ"
    },
    {
      title: "AUDIO MIXED DOWN",
      description: "CITE-DSC Tiktok",
      videoUrl: "https://youtu.be/3dXsTahurjo",
      thumbnail: "https://i9.ytimg.com/vi/3dXsTahurjo/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AGUA4AC0AWKAgwIABABGGUgYChRMA8=&rs=AOn4CLDNuhNV9ypWtQ9THHYtANDw5yQvlA"
    },
    {
      title: "VIDEO CAMPAIGN",
      description: "CITE-DSC Facebook",
      videoUrl: "https://youtu.be/-4D24Qy4gN4",
      thumbnail: "https://i9.ytimg.com/vi/-4D24Qy4gN4/mqdefault.jpg?sqp=CNC_zrsG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXChRMA8=&rs=AOn4CLD2GhyrYBg79wMp71EjGmj44PetNg"
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
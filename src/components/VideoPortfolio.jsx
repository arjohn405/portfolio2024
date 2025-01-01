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
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471949119_464703333109542_1413477858736153150_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGSo_keAQnawFLQYDKtpHtLRnzjmCRzt6lGfOOYJHO3qcXLANuzJk57LxiGxiJNdaJDEHpXsl25ks3ztQS85lLV&_nc_ohc=W-D4q7Ivm8YQ7kNvgE3ElXY&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gEK5U_b6V1Y8XLGogJ7B1yX7IzT30GPpg2hSamnVqxahw&oe=679C661F"
    },
    {
      title: "JhaiHoVLOG | Episode 06",
      description: "JhaihoVLOG's",
      videoUrl: "https://youtu.be/E5sM6lsWJpY?si=R5rq64UjP-onlod9",
      thumbnail: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/470053584_8968149709971854_8172026155113183829_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGRgEgbRHAHvYuPuO5q5nN6l5G-0UEFY0uXkb7RQQVjS7s5tBGIyP2dHPr4ecSAVOdAi7pwzNEShFzaKRwbwnam&_nc_ohc=pCbegtWJlNMQ7kNvgH5eADO&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gHzQbELzyXRl_i0W1c0eOWgD8qUH861xK28oOG2u3h3Ng&oe=679C7D3C"
    },
    {
      title: "Fresh Skinlab Tomato Glass",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/r1HdVq1yxDQ?si=iiajDAzndLkjbF9N",
      thumbnail: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471500793_7835272416597716_900255972802489522_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFoZ5Y53fivZUhh5aAw9PecFcfwzaxWY98Vx_DNrFZj33c6tOdTyRmg4MCadQDmGqo-nfuNPFZPUG7QH8GBObxe&_nc_ohc=xVgHac9ZfvAQ7kNvgG59cdl&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gHYWHZ9aoEPbi7q5AywkiuFIackONcPIJkNoUm70QA2OQ&oe=679C86A8"
    },
    {
      title: "Maybelline Lifter Gloss ",
      description: "Miss Bea",
      videoUrl: "https://youtu.be/lkYJbQmrqfE?si=V0IAVJxG_lmdGQi-",
      thumbnail: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/467725757_2270030873397672_5592805675837095072_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH9Ex18knJJizqipgOxVT7d7FGPV7SRbNPsUY9XtJFs0-7u9imUfCB6wQuugYbGqJwd_j-NMi3NxRTsywc7AWo9&_nc_ohc=fr6rB41RwegQ7kNvgGsC7jW&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gEi2zk7MW2COzw2NidxeRl0uWWCkcMaZYm4kFoeS2175Q&oe=679C66CB"
    },
    {
      title: "Weekend Trip to Singapore",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/Cs2DYbaXKPk?si=TccrM8drSMXoPTKp",
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471734395_581369897842333_4489862156807855807_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE_L-L_ZkHbBE06eQNZGmyHgA_eg9VX2K-AD96D1VfYr1TVJ6KpaTm68fL9t1q_buyCPWmklxtKMCLgjzcrqgjE&_nc_ohc=DtyuCj6WfSkQ7kNvgENXgk5&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gFUSsrJEXmeONzmoc2r84v3DQF8cUWHJ2xoOmyiE5GXlw&oe=679C748B"
    },
    {
      title: "Kingdom Course Creator Ep 4",
      description: "Myrra Kate",
      videoUrl: "https://youtu.be/6A-ffSTCD-o?si=DuW_McgUq_smFKId",
      thumbnail: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/470053544_1297096171632214_4465155403663667513_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHKXKMBO4zD_nzXKfKhXHv36wyGIeWsaTjrDIYh5axpODrgHnjqfp7adSceMPj3GsM_ZVe-xcFE_zQqoUD35QBZ&_nc_ohc=-bpdoJ9d7uYQ7kNvgHrP85W&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gHRpfn0C_U1zqvUuOh2qZuyusWrJedH4a1aM47eaiDmsw&oe=679C84EE"
    },

    {
      title: "Somewhere in Colorado",
      description: "Somewhere in Colorado YT",
      videoUrl: "https://youtu.be/EOu4UPlDx1M",
      thumbnail: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471696185_477891918661631_5061622089082381245_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeECK8Sh0qouoRh7Dl1QQG14HXI2BR6lduEdcjYFHqV24a752kyQd3pVp8DEQM0-kjSl0Mb7ALxJ7qdHJ8JDnSxR&_nc_ohc=4N4phNI-txAQ7kNvgGuMciF&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gHyn_UBiwMZ2CDzzVLdfN-1TRsCFKAbijCCUG3tHQR2nw&oe=679C5BC6"
    },
    {
      title: "Beyond Tech Conference EP3",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/iSMsgW0y0hg",
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/470054836_480131931780511_8658898418101914427_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHhzsw8DZg6qBCdvuMTm8q8vCS9DA_v3_C8JL0MD-_f8ETly4lvU48rvmsR4jpyk1lvWTkDZ8P8pK9sAhIPcSVd&_nc_ohc=CjeTnS_PasgQ7kNvgG1aOBN&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gFbRy2aQprMZsI5_seEJyGvQzNeM05Or-U50-502QtgAg&oe=679C5545"
    },
    {
      title: "Beyond IT EP1 ",
      description: "DEVCON Philippines",
      videoUrl: "https://youtu.be/9KgiSCjwbCk",
      thumbnail: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/470050623_523952474005648_8902135724226470639_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFu2Y3nw9X7gu2m6vkj2Vyy5xIRgCQJ_EPnEhGAJAn8Q0HJe353DyIVhv6g91O9yqhSlvJ7qiu07ISNcAM89cp1&_nc_ohc=tCjSgn6aj7UQ7kNvgGylzEP&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gEYUchyHjcMS1wD1fBjmWwIlf64Oc6i9a0Gm94uDHo55Q&oe=679C7B17"
    },
    {
      title: "DECEMBER SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/xGup-EE0v1Y",
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/467480767_562665366587368_8221996040238926485_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGIbtb3TROuNDXDprxpy6hNkJg5rPyxsMWQmDms_LGwxU0W-3mRuFDFnsTkqd6wQAsqTEvlE-6latVtseXOJnEa&_nc_ohc=rMvXH7nEi2gQ7kNvgFfOvGC&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gFu7WqgGmzmO-CY-8YIJNEAjezLAKI9c-nBw4cchc7dSA&oe=679C691B"
    },
    {
      title: "DOCUMENTARY SPECIAL",
      description: "The Spectrum",
      videoUrl: "https://youtu.be/M1dq48R973k",
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471520648_621033823719996_1517692865891373838_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEWz6UkYTH0hv_CmCIrfZRELkPk4hTUQWkuQ-TiFNRBaSLDAa31vcU2tPXXiPGdUQG7UzhCzx-G5l7Obz08uMOT&_nc_ohc=JscsBp_8VXYQ7kNvgEExzg2&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gExSyW6d8SRWFizAVOxZSVFOOkm9VD8RnqJAKe1t2QPBg&oe=679C5FE1"
    },
    {
      title: "AUDIO MIXED DOWN",
      description: "CITE-DSC Tiktok",
      videoUrl: "https://youtu.be/3dXsTahurjo",
      thumbnail: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/467675053_3177341975756203_3698240605453679275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE9tM0wFUarSoEgkuMM9n7XiRQNO11qMYaJFA07XWoxhvnwpwkj5N_94uV7gBfJA7jkmHJnbwDGx0uXirmulzdh&_nc_ohc=babInmuZY2MQ7kNvgHoT7I5&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gGyslkCJ51aB_S4uXxPlb86BRRGVU_4Kr7eTXbjcRF5Hw&oe=679C6EBD"
    },
    {
      title: "VIDEO CAMPAIGN",
      description: "CITE-DSC Facebook",
      videoUrl: "https://youtu.be/-4D24Qy4gN4",
      thumbnail: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/467475753_383533578151323_4625476431345141029_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEI1PSf1tXnSgdwb1uPguH0JiWzEQ5CiTkmJbMRDkKJOe83_bo7IZpvUitmWRvAbBhS2oiGpuyoeYcu8O9H1dFQ&_nc_ohc=2UUfQ2r5O7kQ7kNvgGLNgKJ&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gEE5BbI8RqE-kLoL_wjS5T2xIQr73Sxlwl9lOMatMUJCA&oe=679C5E73"
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
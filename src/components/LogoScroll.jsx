import React from 'react'

function LogoScroll() {
  const logos = [
    {
      name: "MSC TIP",
      url: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/458211241_536038098954784_3936765564654395841_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGgH7L0o5FmF6uFIGSdTyWJ1F3qWYoiU2vUXepZiiJTa9RFSVwmlrJTpWdfjQ1qpAq8xtaezMKTC3EV3yFBiVBQ&_nc_ohc=WVe9pXG5o8cQ7kNvgHEtMEa&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=AmhDUmG7lIg0NEjeXSv-EkQ&oh=00_AYDIOhVFZMIiYcNgNvpuYHnEEnWOc6JEpPx0fJlsh9a2wg&oe=67712F20",
      link: "#"
    },
    {
      name: "Devcon Ph",
      url: "https://devcon.ph/wp-content/uploads/2019/06/devco_logo_black.png",
      link: "#"
    },
    {
      name: "Open Society",
      url: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/66648021_875942602776018_623300136625242112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFYuH4PItUKlJg15TeQIylAVDfdn2nyZ7NUN92fafJns7lzizaskIWCUdJ6XR_8-VN-zdCOt_2r-PrsVZODzzvk&_nc_ohc=2w2SulsOD18Q7kNvgFMPzBs&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=AiNusKajNNXiyItht-Gbt4m&oh=00_AYB7F6fyyWbF2J9WOqUznCBPJdfiVr2yBi3FAJrnn41_6Q&oe=6792CCCE",
      link: "#"
    },
    {
      name: "The Spectrum",
      url: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/283080926_5068743213251193_8282183532686120542_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtMmBbmh-wdPSGNc_t3SNKFd-wqjUn-qoV37CqNSf6qpWm4b5tbcpZL8RUEm_ygyHX9fu59zD8l89Tl9_g5Mdr&_nc_ohc=bFfDVunNbbUQ7kNvgF4E6YT&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=ABh3aMMp-wf7pUyH6flUbH9&oh=00_AYA6BtBzvvl8CZ57NhE0k_K4rYJrJwbA68WTfwkyTYaHTg&oe=67716372",
      link: "#"
    }
  ];

  return (
    <div className="logo-scroll-section">
      <div className="logo-scroll">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <a 
              key={index} 
              href={logo.link} 
              className="logo-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo.url} alt={logo.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoScroll 
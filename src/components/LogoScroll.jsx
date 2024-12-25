import React from 'react'

function LogoScroll() {
  const logos = [
    {
      name: "Company 1",
      url: "https://example.com/logo1.png",
      link: "#"
    },
    {
      name: "Company 2",
      url: "https://example.com/logo2.png",
      link: "#"
    },
    {
      name: "Company 3",
      url: "https://example.com/logo3.png",
      link: "#"
    },
    {
      name: "Company 4",
      url: "https://example.com/logo4.png",
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
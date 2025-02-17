import React from 'react'

function LogoScroll() {
  const logos = [
    {
      name: "MSC TIP",
      url: "assets/msclogo.png",
      link: "#"
    },
    {
      name: "Devcon Ph",
      url: "assets/devconlogo.png",
      link: "#"
    },
    {
      name: "Open Society",
      url: "assets/oslogo.png",
      link: "#"
    },
    {
      name: "The Spectrum",
      url: "assets/tslogo.png",
      link: "#"
    },
    {
      name: "Craftora",
      url: "assets/craftora.png",
      link: "#"
    },
    {
      name: "Alas Kwatro Films",
      url: "assets/alaslogo.png",
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
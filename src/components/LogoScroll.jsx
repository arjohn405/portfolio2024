import React from 'react'

function LogoScroll() {
  const logos = [
    {
      name: "MSC TIP",
      url: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471478480_1107885850796706_6036132653843151556_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHdATrSx5VSq0UETssIs6v5t8YAzcSWcPW3xgDNxJZw9VtwLR2BYP8rBhXA1ABn9fd1c9L0D_NJoHwmFMq9lM2f&_nc_ohc=fCU2P_hb-WsQ7kNvgFFplJr&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gHuay6jemv47BDQvKdKHXA53ip6Q6tECS5_LZmXo_BzYw&oe=679DA2CD",
      link: "#"
    },
    {
      name: "Devcon Ph",
      url: "https://devcon.ph/wp-content/uploads/2019/06/devco_logo_black.png",
      link: "#"
    },
    {
      name: "Open Society",
      url: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t1.15752-9/467482416_488709124240328_7882729619153599290_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE_DMQPn2LAtfpKXpuBVtKK_DHIyEp0r638McjISnSvrQIL9rMbl_hzLsWMWSvDmaIZht3tPWTahQKpL3Uovoha&_nc_ohc=-sUScq2tm2MQ7kNvgFYdNHI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-3.fna&oh=03_Q7cD1gFK4G-suKyyIj6D5QglskOccfEDX2okyd1Yxtu5Mu3y-Q&oe=679D91AE",
      link: "#"
    },
    {
      name: "The Spectrum",
      url: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t1.15752-9/470050734_4089318051298730_3516370618797966004_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF3dng2mqg_UQaiom24CX8U9n2HCrAK1Nz2fYcKsArU3LPhX9bseMxOz_a6pL4N8-Z7f3PZSwMRMd7mbyKIVqcp&_nc_ohc=-lW0rKhN-58Q7kNvgE05Iks&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-3.fna&oh=03_Q7cD1gGmh59eAG_McWXjSwR5miqUWfGgwiD65ihpiVKJhNzQhg&oe=679D8955",
      link: "#"
    },
    {
      name: "Craftora",
      url: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/471630273_616288887604916_7859516600942726064_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFwQf6vEFJD9nRpKjtYqZ6SsuhNs6syZHmy6E2zqzJkeag4JSZya5j1au3gHqb9CU56Gb6y-5625WQpB_UhGgJr&_nc_ohc=VB0xzZqrapIQ7kNvgGkQkuc&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gFEcIiRllqmo9SBWHH37PqE3LSUnRfDIzDlxg7mWmbVOA&oe=679D7D10",
      link: "#"
    },
    {
      name: "Alas Kwatro Films",
      url: "https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.15752-9/470057394_1343415403310739_5738990522214150482_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGA6mqvFdT2-Wd54_yViX8_nIm47-yEalScibjv7IRqVD7cVM_0hkfHXkrRla_NdpdWfZaw0yhNw0X8HGEq3loh&_nc_ohc=6hU-CKshDhwQ7kNvgEEP4e4&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&oh=03_Q7cD1gEYD9OKwzqIccmWXethFQs7y0x89lXvWQ0TNNpqCNHuUQ&oe=679D77C0",
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
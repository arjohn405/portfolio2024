import React, { useState } from 'react';

function UIUXPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Number of items to display per page

  const uiuxProjects = [
    {
      title: "HackHaive",
      description: "AI-powered virtual event platform designed for hackathon enthusiasts and innovators. ",
      images: [
        "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/471446163_1102570934887421_2505973350768290337_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeETs_cBaEoqLv5zO5h0aifg6SLf9nuKHw3pIt_2e4ofDS3ZlAIeL0dDGiVNAXRDgOIYPOvEZ7dlxDOMtJTKvBi-&_nc_ohc=GENM9rbipCcQ7kNvgF_wRXt&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gFjpo9Qh75RqxEMMSmxancpg8CxUm5JBcr7ZHBK8HXYlg&oe=679C6900",

      ],
      previewUrl: "https://www.figma.com/proto/sRR2UawMCyZ8VimQXAPqdh/HACKHIVE-(OFFICIAL)?page-id=0%3A1&node-id=12-15&p=f&viewport=8944%2C-521%2C0.43&t=RTXKyLOAR7CKlnYZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A2455" // Replace with actual preview link
    },
    {
      title: "TaHack",
      description: "A streamlined web platform helping users efficiently manage and progress through courses.",
      images: [
        "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/471542485_1104713004718162_9082213499272365984_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEeeII3Vc8mM8K0eqNQE6fJjWOrODEio0uNY6s4MSKjS58LIkdagIjttIXzgeslR5IuCg9eDljOplNjMfLRPH8Q&_nc_ohc=C0bBclUQpdcQ7kNvgEdvc86&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gEB1YRwy87iXuFkyN_U1DEVk2sUUFEJSaD344NYhdYi0Q&oe=679C87ED",
        
      ],
      previewUrl: "https://www.figma.com/proto/bTzpBdDAp4yiJYeiSiD4iF/TaHack-Web-Application?page-id=0%3A1&node-id=121-722&p=f&viewport=807%2C1621%2C0.18&t=TlKQMjTdUCwylyvO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=121%3A722" // Replace with actual preview link
    },
    {
      title: "EcoQuest",
      description: "A gamified mobile app motivating users to responsibly dispose of trash via challenges. ",
      images: [
        "https://scontent.fmnl33-5.fna.fbcdn.net/v/t1.15752-9/470057394_2071668546615603_3203423572338456278_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFZJuTV86sD1GV-pRqRvUw5razBkRxyNbmtrMGRHHI1udfzPs8--OhkBaxiwJqikaRtTmDaaXFWmbu-X3HH4lYp&_nc_ohc=Ph_9nRqXNyMQ7kNvgF8-8ag&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&oh=03_Q7cD1gHeb3za8-lh0aWO9aTtb0lWfeTaLYUmmtyvJNFSipFY1w&oe=679C9D63",

      ],
      previewUrl: "https://www.figma.com/proto/G4s7gWKNgr3KKv7WIJsnbx/EcoGrow?page-id=0%3A1&node-id=6-9&p=f&viewport=-2535%2C-213%2C1.39&t=7mUxUMDloneBvfuu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A9" // Replace with actual preview link
    },
    {
      title: "VIBE",
      description: "An all-in-one app streamlining event planning, ticketing, and managing participants.",
      images: [
        "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/470054835_1895456934526688_7359167798574079597_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF-iy_rfep_oEbc_AeFP5XAjfbwfzbGjXiN9vB_NsaNePzDsjHiwxc5fJ6fJuRTx5fiMcWTtACUDrUw1tIHb1Yy&_nc_ohc=jVTMfcGLq3wQ7kNvgFfw1_L&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gEMR8it7xJWs-pxju_LU794Ru778IZ6WD-dtdsAKDLVsA&oe=679C8706",
        
      ],
      previewUrl: "https://www.figma.com/proto/8eDhadRWYZ6MGlZ4oQlSuU/VIIIBEEEE?page-id=913%3A2&node-id=913-3&viewport=525%2C270%2C0.06&t=6ykszckcjsAGvKD3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=913%3A3&show-proto-sidebar=1" // Replace with actual preview link
    },
    {
      title: "Hiraya",
      description: "An intuitive platform for easily browsing, booking, and managing hotel accommodations.",
      images: [
        "https://scontent.fmnl33-6.fna.fbcdn.net/v/t1.15752-9/470058495_1775642646568712_8450981921435770896_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGNpp8B60_vrJFBv9kbaEsT7SdPRVqY7U_tJ09FWpjtT0x_OjHkslHpUHItQsM-w1FQhOcrt505MOFDeipnztwE&_nc_ohc=6XxpcOrAl4kQ7kNvgH5UpCN&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&oh=03_Q7cD1gHhCY1i8wrOS-Bpf_t_2G56lDdAAm8scXiq0UyL3LdxNQ&oe=679C8F99",
        
      ],
      previewUrl: "https://www.figma.com/proto/rjueSYFhNvcPV2KFUzbczu/Hiraya-Prototype?page-id=0%3A1&node-id=27-158&viewport=-242%2C340%2C0.1&t=BhPzCVZamxQBXcUh-1&scaling=contain&content-scaling=fixed&starting-point-node-id=27%3A158&show-proto-sidebar=1" // Replace with actual preview link
    },
    // Add more UI/UX projects here with images array
  ];

  const totalPages = Math.ceil(uiuxProjects.length / itemsPerPage);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="uiux-portfolio">
      <h2>UI/UX Portfolio</h2>
      <div className="uiux-gallery">
        {uiuxProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((project, index) => (
          <div key={index} className="uiux-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="uiux-images">
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${project.title} image ${imgIndex + 1}`} 
                  className="uiux-image" 
                  onClick={() => openModal(image)} // Open modal on image click
                />
              ))}
            </div>
            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <button className="preview-button">Preview</button>
            </a>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span 
            key={index} 
            className={`dot ${currentPage === index ? 'active' : ''}`} 
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Selected project" className="modal-image" />
        </div>
      )}
    </section>
  );
}

export default UIUXPortfolio; 
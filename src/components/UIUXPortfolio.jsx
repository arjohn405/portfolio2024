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
        "/assets/hacakhaive2.png",

      ],
      previewUrl: "https://www.figma.com/proto/sRR2UawMCyZ8VimQXAPqdh/HACKHIVE-(OFFICIAL)?page-id=0%3A1&node-id=12-15&p=f&viewport=8944%2C-521%2C0.43&t=RTXKyLOAR7CKlnYZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40%3A2455" // Replace with actual preview link
    },
    {
      title: "TaHack",
      description: "A streamlined web platform helping users efficiently manage and progress through courses.",
      images: [
        "/assets/tahacklandingpage.png",
        
      ],
      previewUrl: "https://www.figma.com/proto/bTzpBdDAp4yiJYeiSiD4iF/TaHack-Web-Application?page-id=0%3A1&node-id=121-722&p=f&viewport=807%2C1621%2C0.18&t=TlKQMjTdUCwylyvO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=121%3A722" // Replace with actual preview link
    },
    {
      title: "EcoQuest",
      description: "A gamified mobile app motivating users to responsibly dispose of trash via challenges. ",
      images: [
        "/assets/ecogrow2.png",

      ],
      previewUrl: "https://www.figma.com/proto/G4s7gWKNgr3KKv7WIJsnbx/EcoGrow?page-id=0%3A1&node-id=6-9&p=f&viewport=-2535%2C-213%2C1.39&t=7mUxUMDloneBvfuu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A9" // Replace with actual preview link
    },
    {
      title: "VIBE",
      description: "An all-in-one app streamlining event planning, ticketing, and managing participants.",
      images: [
        "/assets/vibe.png",
        
      ],
      previewUrl: "https://www.figma.com/proto/8eDhadRWYZ6MGlZ4oQlSuU/VIIIBEEEE?page-id=913%3A2&node-id=913-3&viewport=525%2C270%2C0.06&t=6ykszckcjsAGvKD3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=913%3A3&show-proto-sidebar=1" // Replace with actual preview link
    },
    {
      title: "Hiraya",
      description: "An intuitive platform for easily browsing, booking, and managing hotel accommodations.",
      images: [
        "/assets/hiraya.png",
        
      ],
      previewUrl: "https://www.figma.com/proto/rjueSYFhNvcPV2KFUzbczu/Hiraya-Prototype?page-id=0%3A1&node-id=27-158&viewport=-242%2C340%2C0.1&t=BhPzCVZamxQBXcUh-1&scaling=contain&content-scaling=fixed&starting-point-node-id=27%3A158&show-proto-sidebar=1" // Replace with actual preview link
    },
    {
      title: "Digi8 Studios",
      description: "A profile website for Media Company Digi8 Studios that gives looks and baranding to it.",
      images: [
        "/assets/digi8.png",
        
      ],
      previewUrl: "https://www.digi8studios.com/" // Replace with actual preview link
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
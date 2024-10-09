import React, { useState } from 'react';
import './Textproduktion.css'; 

const Textproduktion = () => {
  const textProjects = [
    {
      title: "SEO-optimerad bloggpost",
      description: "Säljande copy för en digital kampanj, skapad för att öka konverteringar.",
      file: "/annotated-Lisa_Wiklund_Annonstext-2.docx.pdf"
    },
    {
      title: "Nyhetstext",
      description: "En nyhetstext skriven för en företagswebbplats med fokus på aktuella branschnyheter.",
      file: "/annotated-Inlämningsuppgift_2_Lisa_Wiklund_ny-1.pdf"
    },
    {
      title: "Sökmotoroptimering och webbcopy",
      description: "En artikel optimerad för sökmotorer med fokus på hållbar konsumtion.",
      file: "/Lisa_Wiklund_Text.pdf"
    },

    {
      title: "Lättläst text för Försäkringskassan",
      description: "En text om våld, översatt till lättläst svenska för nyinflyttade vuxna som lär sig svenska.",
      file: "/annotated-Lisa Wiklund - Del - B & C_2.docx.pdf"
    }


  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (file) => {
    setModalContent(file);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    
    <div className="textproduktion-container">
   <div className="portfolio-container">
      <h1>Textproduktion</h1>
    
    </div>
      <p>
        Här kan du läsa om olika projekt inom textproduktion, såsom innehållsskapande, SEO-optimering,
        och copywriting för webben.
      </p>

      {/* Grid för textproduktionsprojekt */}
      <div className="projects-grid">
        {textProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <embed
              src={project.file}
              type="application/pdf"
              className="project-embed"
              width="100%"
              height="300px"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-button" onClick={() => openModal(project.file)}>
                Visa Större
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal för att förstora textprojekt */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <embed
              src={modalContent}
              type="application/pdf"
              className="modal-embed"
              width="100%"
              height="100%"
            />
            <button className="close-button" onClick={closeModal}>Stäng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Textproduktion;

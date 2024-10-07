import React, { useState } from 'react';
import './GraphicDesign.css';

const GraphicDesign = () => {
  const projects = [
    { title: "Bokomslag", description: "Bokomslaget är skapat i Adobe Illustrator för en fiktiv skräckroman, inspirerad av Stephen Kings berättelser. Omslaget använder starka kontraster och en demonisk skugga för att skapa en atmosfär av mystik och fara. Den minimalistiska designen med subtila symboler och skuggspel riktar sig till barn och unga vuxna som uppskattar psykologisk skräck och spänning.", file: "/annotated-Wiklund_Lisa_Bokomslag.ai.pdf" },
    { title: "Tidningsuppslag", description: "Uppslaget är designat som en del av ett projekt om hållbarhetskommunikation och visuellt uttryck för tidningen Bröllopsguiden. Det använder sig av färg, form och bild för att lyfta fram budskapet om miljövänliga, labbodlade diamanter. Målgruppen är miljömedvetna personer som söker mer prisvänliga smycken inför tillfällen som förlovningar och bröllop.", file: "/annotated-Wiklund_print-1.pdf" },
    { title: "Informationsprodukt", description: "Informationsprodukt om hur man ansöker om körkortslån via CSN", file: "/Informationsprodukt_1.pdf" },
    { title: "Informationsprodukt", description: "Informationsprodukt om hur man ansöker om körkortslån via CSN", file: "/Informationsprodukt_2.pdf" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Bläddrar till nästa två projekt
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= projects.length ? 0 : prevIndex + 2
    );
  };

  // Bläddrar till föregående två projekt
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? projects.length - 2 : prevIndex - 2
    );
  };

  const openModal = (file) => {
    setModalContent(file);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="graphic-design-container">
      <h1>Mina Grafiska Projekt</h1>
      <div className="projects-grid">
        {projects.slice(currentIndex, currentIndex + 2).map((project, index) => (
          <div className="project-card" key={index}>
            {project.file ? (
              <embed
                src={project.file}
                type="application/pdf"
                className="project-embed"
                width="100%"
                height="300px"
              />
            ) : (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
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
      <div className="navigation-arrows">
        <span className="arrow prev-arrow" onClick={handlePrevious}>
          ← Föregående
        </span>

        <span className="arrow next-arrow" onClick={handleNext}>
          Nästa →
        </span>
      </div>

      {/* Modal för att förstora projekt */}
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

export default GraphicDesign;

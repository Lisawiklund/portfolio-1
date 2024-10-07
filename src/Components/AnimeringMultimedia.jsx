import React from 'react';
import './AnimeringMultimedia.css';

const AnimeringMultimedia = () => {
  const projects = [
    { title: "Animering 1", description: "Reklambanner för fiktivt resebolag skapad i After Effects", gif: "/Flygresor.gif" },
    { title: "Multimedia 2", description: "Titelsekvens inspirerad av skräckfilmer från 1980-talet skapad i After Effects", video: "/Presenterar.mp4" }
  ];

  // Funktion för att sätta ett element i fullskärmsläge
  const handleFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  };

  return (
    <div className="animering-multimedia-container">
      <h1>Animering och Multimedia</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Klickbar GIF eller video */}
            {project.gif ? (
              <img
                src={project.gif}
                alt={project.title}
                className="project-gif"
                onClick={(e) => handleFullscreen(e.target)}  // Sätter bilden i fullskärmsläge
              />
            ) : (
              <video
                controls
                className="project-video"
                onClick={(e) => handleFullscreen(e.target)}  // Sätter videon i fullskärmsläge
              >
                <source src={project.video} type="video/mp4" />
                Din webbläsare stöder inte video-taggen.
              </video>
            )}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeringMultimedia;

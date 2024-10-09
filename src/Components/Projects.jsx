import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; 

const Projects = () => {
  const projects = [
    {
      title: "Webbplatsprojekt",
      image: "/wordpress-923188_1280.jpg",
      link: "/webbplatsprojekt"
    },

    {
      title: "Appar",
      image: "/App-react.jpg",  
      link: "/Appli" 
    },
    
    {
      title: "Prototyper",
      image: "/Prototyp.jpg",
      link: "/Prototyp"
    },
    {
      title: "Grafisk Design",
      image: "/Grafisk.jpg", 
      link: "/graphicDesign"
    },
    {
      title: "Animering & multimedia för webben",
      image: "/Adobe-after.jpg", 
      link: "/animeringMultimedia"
    },
  
    {
      title: "Textproduktion",
      image: "/textproduktion.jpg",
      link: "/Textproduktion", 
    }
  ];

  return (
    <div className="graphic-design-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>

            
              <Link to={project.link}>
                <button className="view-button">Visa Större</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

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
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
         <Link to={project.link} className="link">  
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;

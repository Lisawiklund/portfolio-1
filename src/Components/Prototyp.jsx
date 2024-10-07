import React from 'react';
import './Prototyp.css'; 

const Prototyp = () => {
  const projects = [
    {
      title: "Prototyp 1",
      description: "Hi-fi Prototyp för en fiktiv hotellbokningsapp designad i Adobe XD.",
      image: "/Prototyp-HotellApp.png",
      link: "https://xd.adobe.com/view/aebdca58-ff61-4f3a-b81d-5141da29191f-fbee/?fbclid=IwY2xjawFmlp4BHbzV2zNLZCtpySQC-vrI9oyaCSfnFQSCQAJtj1Ex2ci6B2H203w7LcObYg&fullscreen&hints=off"
    },
    {
      title: "Prototyp 2",
      description: "Hi-fi Prototyp för en onepage app designad i Figma.",
      image: "/Prototyp-KlimatKoll.png", 
      link: "https://www.figma.com/proto/i4azN0R2dxPi7F37P1gdhf/Personas%2C-user-stories%2C-user-journeys%2C-UML-diagram%2C-task-analysis%2C-lo-fi-prototype%2C-hi-fi-prototype?type=design&node-id=431-648&t=sJ3KX6YRsV1BrADc-1&scaling=scale-down&page-id=432%3A221"
    }
  ];

  return (
    <div className="prototyp-container">
      <h1>Mina Prototyper</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="prototyp-link"
              >
                Se Prototyp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prototyp;

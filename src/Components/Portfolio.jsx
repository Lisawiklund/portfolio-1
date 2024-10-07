import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Min Portfolio</h1>
      <p>Här är några av mina senaste projekt.</p>

      {/* Projektsektionen */}
      <Projects />
    </div>
  );
};

export default Portfolio;

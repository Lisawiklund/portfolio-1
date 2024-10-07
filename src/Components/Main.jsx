import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-section">
        <h1>Hej, jag heter Lisa</h1>
        <p>Jag är en webbredaktör med fokus på front end webbutveckling, UX/UI-design och content management.</p>
        {/* Länk med pil som ligger under texten */}
        <Link to="/OmMig" className="about-link">
          Om mig <span className="arrow">→</span>
        </Link>
      </div>
      <div className="image-section">
        <img
          src={`${process.env.PUBLIC_URL}/IMG_5710.jpg`} 
          alt="MinBild"
          className="full-screen-image"
        />
      </div>
     
      
    </div>
  
  );
};

export default Main;

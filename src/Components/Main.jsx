import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-section">
        <h2>Hej, jag heter Lisa.</h2>
        <p>Jag är en webbredaktör specialiserad på front end webbutveckling, UX/UI-design och content management.</p>
        <Link to="/OmMig" className="about-link">
          Om mig <span className="arrow1">→</span>
        </Link>
      </div>

      <div className="image-section">
    
        <Link to="/OmMig">
          <img
            src={`${process.env.PUBLIC_URL}/IMG_5710.jpg`} 
            alt="MinBild"
            className="full-screen-image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Main;

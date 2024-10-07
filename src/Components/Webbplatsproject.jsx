import React from 'react';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './Webbplatsprojekt.css';

const Webbplatsprojekt = () => {
  return (
    <div className="webbplatsprojekt-container">
      <h1>Mitt Webbplatsprojekt</h1>
      <p>
        Utforska mitt projekt i både laptop- och mobilvy. Du kan interagera direkt
        med webbplatsen eller besöka den fullständiga versionen via länken nedan.
      </p>
      
      <div className="grid-container">
        {/* Desktop-vy */}
        <div className="device laptop">
          <LaptopMacIcon className="icon" />
          <div className="iframe-container laptop-view">
            <iframe
              src="https://smarta-hem.s-hem.se/"
              title="Laptop View"
              className="iframe"
              scrolling="yes" 
            />
          </div>
        </div>

        {/* Mobil-vy */}
        <div className="device mobile">
          <PhoneIphoneIcon className="icon" />
          <div className="iframe-container mobile-view">
            <iframe
              src="https://smarta-hem.s-hem.se/"
              title="Mobile View"
              className="iframe"
              scrolling="yes"
            />
          </div>
        </div>
      </div>
      <div className="project-description">
        <h2><strong>Projektbeskrivning:</strong></h2>
        <p>
          Jag har utvecklat och skräddarsytt en webbplats åt Smarta Hem i Sverige AB,
          en husleverantör som specialiserar sig på att bygga lösvirkeshus.
          Webbplatsen är byggd i WordPress för att ge företaget en flexibel och skalbar
          lösning som är enkel att hantera och uppdatera. Projektet är anpassat efter
          företagets specifika behov, med fokus på att presentera deras produkter och
          tjänster på ett användarvänligt och estetiskt tilltalande sätt.
        </p>
      </div>

      {/* Centrerar knappen under båda vyerna */}
      <a
        href="https://smarta-hem.s-hem.se/"
        target="_blank"
        rel="noopener noreferrer"
        className="visit-site-button"
      >
        Besök Webbplatsen
      </a>
    </div>
  );
};

export default Webbplatsprojekt;

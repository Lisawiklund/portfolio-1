// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import './App.css';
import Webbplatsprojekt from './Components/Webbplatsproject';
import GraphicDesign from './Components/GraphicDesign';  
import AnimeringMultimedia from './Components/AnimeringMultimedia'; 
import Prototyp from './Components/Prototyp';  
import Appli from './Components/Appli';
import Textproduktion from './Components/Textproduktion';
import Kontakt from './Components/Kontakt';
import OmMig from './Components/OmMig';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/webbplatsprojekt" element={<Webbplatsprojekt />} />
          <Route path="/GraphicDesign" element={<GraphicDesign />} />
          <Route path="/animeringMultimedia" element={<AnimeringMultimedia />} /> 
          <Route path="/Prototyp" element={<Prototyp />} /> 
          <Route path="/Appli" element={<Appli />} />
          <Route path="/textproduktion" element={<Textproduktion />} />
          <Route path="/OmMig" element={<OmMig />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


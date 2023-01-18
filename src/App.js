import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { HeroBanner } from './Components/Homepage/HeroBanner/HeroBanner';
import { CTA } from './Components/Homepage/CTA/cta'

function App() {

  const heroImgSrc = require("./Media/homepage-background-image-large.jpg");

  //this function component renders the top-level views for each page
  //header and footer are always visible on every page
  return (
    <Router>
    <div className="App">
            <Header />
            <HeroBanner
              src={heroImgSrc}
              alt="Luisa's Italian Restaurant in Radcliffe"
            />
            <CTA />
    </div>
    </Router>

  );
}

export default App;

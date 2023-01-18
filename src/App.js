import './App.css';
import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { HeroBanner } from './Components/Homepage/Body/HeroBanner';

function App() {

  const HeroImg = require("./Media/homepage-background-image-large.jpg");

  return (
    <div className="App">
            <Header />
          <section>
            <HeroBanner
              src={HeroImg}
              alt=''
            />
          </section>
    </div>

  );
}

export default App;

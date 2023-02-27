import './App.css';
import './reset.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Components/Pages/Homepage/Homepage';
import { MenuPage } from './Components/Pages/Menu/menu';

function App() {

  //this function component renders the top-level views for each page
  //header and footer are always visible on every page
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

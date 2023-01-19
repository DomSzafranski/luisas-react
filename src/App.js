import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Homepage } from './Components/Pages/Homepage/Homepage';

function App() {

  //this function component renders the top-level views for each page
  //header and footer are always visible on every page
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>

  );
}

export default App;

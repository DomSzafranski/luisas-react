import './App.css';
import './reset.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Pages/Homepage/Homepage';
import { MenuPage } from './Pages/Menu/MenuPage';
import { ErrorPage } from './Pages/404/404';
import { Menu } from './Components/Menu/menu';
import { MothersDayMenu } from './Components/Menu/MothersDayMenu';

function App() {

  //this function component renders the top-level views for each page
  //header and footer are always visible on every page
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menu' element={<MenuPage />}>
          <Route index element={<Menu />} />
          <Route path='dessert' element={<Menu />} />
          <Route path='bar' element={<Menu />} />
          <Route path='mothers-day' element={<MothersDayMenu />} />
        </Route>
        <Route path='/about' />
        <Route path='/visit-us' />
        <Route path='/careers' />
        <Route path='/franchise' />
        <Route path="*" element={<ErrorPage />} /> {/* 404 handler */}
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

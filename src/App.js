import './App.css';
import './reset.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Pages/Homepage/Homepage';
import { MenuPage } from './Pages/Menu/MenuPage';
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
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

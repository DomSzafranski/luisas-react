import './App.css';
import './reset.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Pages/Homepage/Homepage';
import { MenuPage } from './Pages/Menu/MenuPage';
import { VisitUs } from './Pages/Visit-Us/VisitUs';
import { ErrorPage } from './Pages/404/404';
import { PrivacyPolicy } from './Pages/Privacy Policy/privacy-policy';
import { Menu } from './Components/Menu/menu';
import { MothersDayMenu } from './Components/Menu/MothersDayMenu';
import { CookieBanner } from './Components/Compliance/CookieBanner';

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
        <Route path='/visit-us' element={<VisitUs />} />
        <Route path='/careers' />
        <Route path='/franchise' />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} /> {/* 404 handler */}
      </Routes>
      <Footer />
      <CookieBanner />
  
    </div>

  );
}

export default App;

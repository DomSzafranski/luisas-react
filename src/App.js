import './App.css';
import './reset.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Pages/Homepage/Homepage';
import { MenuPage } from './Pages/Menu/MenuPage';
import { VisitUs } from './Pages/Visit-Us/VisitUs';
import { Franchise } from './Pages/Franchise/Franchise';
import { ErrorPage } from './Pages/404/404';
import { PrivacyPolicy } from './Pages/Privacy Policy/privacy-policy';
import { Menu } from './Components/Menu/menu';
import { BarMenu } from './Components/Menu/BarMenu';
import { DessertMenu } from './Components/Menu/DessertMenu';
import { MothersDayMenu } from './Components/Menu/MothersDayMenu';
import { CookieBanner } from './Components/Compliance/Cookies';
import ScrollToTop from './Helpers/ScrollToTop';

import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module'


//GA4 tracking info
const TRACKING_ID = 'G-LPS6VZTTTR';
ReactGA.initialize(TRACKING_ID);

//GTM tracking info
const tagManagerArgs = {
  gtmId: 'GTM-WTZW3NX'
}

TagManager.initialize(tagManagerArgs)

function App() {

  //facebook pixel initialize
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };

  //this function component renders the top-level views for each page
  //header and footer are always visible on every page
  return (
    <div className="App">

    


      <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/menu' element={<MenuPage />}>
            <Route index element={<Menu />} />
            <Route path='dessert' element={<DessertMenu />} />
            <Route path='bar' element={<BarMenu />} />
            <Route path='mothers-day' element={<MothersDayMenu />} />
          </Route>
          <Route path='/about' />
          <Route path='/visit-us' element={<VisitUs />} />
          <Route path='/careers' element={<ErrorPage />} /> {/* temporarily load 404 page until finished */}
          <Route path='/franchise' element={<Franchise />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} /> {/* 404 handler */}
        </Routes>
      <Footer />
      <CookieBanner />

    </div>

  );
}

export default App;

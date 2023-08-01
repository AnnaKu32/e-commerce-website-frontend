import React, { useState, useEffect } from 'react';

import './styles/MainPage.css';

import PageNavbar from './PageNavbar';
import ProductsNavbar from './ProductsNavbar';
import TwoWindows from './TwoWindows'
import MainWindows from './MainWindows';
import NewCollectionNavbar from './NewCollectionNavbar';
import HeadlinesNewCollection from './HeadlinesNewCollection';
import HeadlinesSeasonalCollection from './HeadlinesSeasonalCollection';
import HeadlinesBestseller from './HeadlinesBestseller';
import HeadlinesSales from './HeadlinesSales';
import ProductMozaic from './ProductMozaic';
import AboutCompanyFooter from './AboutCompanyFooter';


// kolory rgb(255, 133, 81) - pomarańcza
// kolory rgb(3, 198, 216) - niebieski
const MainPage = () => {
  
  //TODO: fog effect
  return (
    <div>
        <PageNavbar />
        <div className="main-page-container">
          <div className="products-navbar-container">
            <ProductsNavbar />
          </div>
          <MainWindows />
          <TwoWindows />
          <HeadlinesBestseller />
          <HeadlinesSeasonalCollection />
          <NewCollectionNavbar />
          <HeadlinesSales />
          <HeadlinesNewCollection />
          <ProductMozaic />
        </div>
        <AboutCompanyFooter />
        <div style={{fontSize:15, color: "grey"}}>
          <p> Credit for all images: https://www.freepik.com</p>
          <p> Shop icon author: Creatype - https://www.freepik.com</p>
        </div>
    </div>
  );
};

export default MainPage;


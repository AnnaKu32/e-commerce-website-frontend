import React, {useState} from 'react';
import './styles/MainWindows.css';
import 'bootstrap/dist/css/bootstrap.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import carousel_image from '../../assets/images/main1-new.jpg';
import carousel_image3 from '../../assets/images/main2-new.jpg';
import carousel_image2 from '../../assets/images/main3-new.jpg';

const MainWindows = () => {
  return (
    <div className= "justify-content-center d-flex">
      <div className="main-campaign-windows py-5">
        
        <Carousel 
          infiniteLoop 
          autoPlay 
          showStatus={false} 
          showThumbs={false} 
          showArrows={false}
        >
          <div className="image-container-main-carousel">
            <div className="image-wrapper">
              <img src={carousel_image} alt="carousel_image" />
            </div>
          </div>

          <div className="image-container-main-carousel">
            <div className="image-wrapper">
              <img src={carousel_image2} alt="carousel_image2"/>
              <div className="image-overlay-1">
              </div>
            </div>
          </div>

          <div className="image-container-main-carousel">
            <div className="image-wrapper">
              <img src={carousel_image3} alt="carousel_image3"/>
              <div className="image-overlay-1">
              </div>
            </div>
          </div>
        </Carousel>

      </div>
    </div>
  );
};

export default MainWindows;
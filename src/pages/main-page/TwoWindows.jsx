import React from 'react';
import './styles/TwoWindows.css';
import 'bootstrap/dist/css/bootstrap.css';

import mask_image from '../../assets/images/mask.jpg';
import red_lipstick_mask from '../../assets/images/red-lipstick.jpg';

const TwoWindows = () => {
  return (
    <div className="news-windows ">
      <div className="news-windows-row">
        <div className="col-7 headline-news-windows-col-2 overflow-hidden">
            <div className="container-image-prodt">
              <img className="new-collection-main-image" src={red_lipstick_mask} alt="Image1" />
            </div>
            <div className="text-container">
              <h2 className="display-news">Collection of red lipsticks</h2>
              <p className="lead-news">Discover the combination of care and color</p>
              <button className='btn show-more'>Show more</button>
            </div>
        </div>
        <div className="col-7 headline-news-windows-col-2 overflow-hidden">
            <div className="container-image-prodt">
              <img className="new-collection-main-image" src={mask_image} alt="Image2" />
            </div>
            <div className="text-container">
              <h2 className="display-news">Cucumber masks</h2>
              <p className="lead-news">The most popular series of masks</p>
              <button className='btn show-more'>Show more</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TwoWindows;

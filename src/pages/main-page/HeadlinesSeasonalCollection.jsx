import React from 'react';
import './styles/HeadlinesNewCollection.css';
import 'bootstrap/dist/css/bootstrap.css';

import newCollection_mainImage1 from '../../assets/images/headline1.jpg';
import newCollection_mainImage2 from '../../assets/images/headline2.jpg';
import newCollection_mainImage3 from '../../assets/images/headline3.jpg';

const HeadlinesSeasonalCollection = () => {
  return (
    <div className="season-items py-5">
      <div className="row season-items-row">
        <h1 className="season-items-headline">Seasonal cosmetics</h1>
          <div className="col season-items-col justify-content-center d-flex">

            <div className="col-4 mx-2 my-2 headline-prod-col">
              <div className="headline-prod text-center overflow-hidden">
                <div className="py-3">
                  <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage1} alt="Image1"/>
                  </div>
                  <h2 className="display">Grapefruits</h2>
                  <p className="lead">Collection inspired by grapefruit</p>
                </div>
              </div>
            </div> 

            <div className="col-4 mx-2 my-2 headline-prod-col">
              <div className="headline-prod text-center overflow-hidden">
                <div className="py-3">
                  <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage3} alt="Image2"/>
                  </div>
                  <h2 className="display">Summer body</h2>
                  <p className="lead">See our suggestions for the summer</p>
                </div>
              </div>
            </div>

            <div className="col-4 mx-2 my-2 headline-prod-col">
              <div className="headline-prod text-center overflow-hidden">
                <div className="py-3">
                  <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage2} alt="Image3"/>
                  </div>
                  <h2 className="display">SPF</h2>
                  <p className="lead">Selection of SPF 50+</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div> 
  );
};

export default HeadlinesSeasonalCollection;
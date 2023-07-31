import React from 'react';
import './styles/HeadlinesNewCollection.css';
import 'bootstrap/dist/css/bootstrap.css';

import newCollection_mainImage1 from '../../assets/images/headline_trend.jpg';
import newCollection_mainImage2 from '../../assets/images/headline_trend2.jpg';
import newCollection_mainImage3 from '../../assets/images/headline_trend3.jpg';

const HeadlinesNewCollection = () => {
  return (
    <div className="season-items py-5">
      <div className="row">
        <h1 className="season-items-headline">Makeup trends in 2023</h1>
          <div className="col justify-content-center d-flex">

              <div className="headline-prod text-center overflow-hidden">
                  <div className="py-3">
                    <div className ="container-image-prod">
                      <img className = "new-collection-main-image" src={newCollection_mainImage1} alt="Image1"/>
                    </div>
                    <h2 className="display">Back to Nature</h2>
                    <p className="lead">Focus on nature-friendly products</p>
                  </div>
              </div>
            

            <div className="headline-prod text-center overflow-hidden mx-3">
              <div className="py-3">
              <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage3} alt="Image2"/>
                  </div>
                <h2 className="display">Makeup concealers</h2>
                <p className="lead">New Cornflower Correctors from Glowy</p>
              </div>

            </div>

            <div className="headline-prod text-center overflow-hidden">
              <div className="py-3">
                <div className ="container-image-prod">
                  <img className = "new-collection-main-image" src={newCollection_mainImage2} alt="Image3"/>
                </div>
                <h2 className="display">Minimalism</h2>
                <p className="lead">Minimalism is the new maximalism</p>
            </div>
           
          </div>
        </div>
      </div>
    </div> 
  );
};

export default HeadlinesNewCollection;
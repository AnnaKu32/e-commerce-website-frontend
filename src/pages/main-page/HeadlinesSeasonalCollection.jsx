import React from 'react';
import './styles/HeadlinesNewCollection.css';
import 'bootstrap/dist/css/bootstrap.css';

import newCollection_mainImage1 from '../../assets/images/headline1.jpg';
import newCollection_mainImage2 from '../../assets/images/headline2 .jpg';
import newCollection_mainImage3 from '../../assets/images/headline3.jpg';

const HeadlinesSeasonalCollection = () => {
  return (
    <div className="season-items py-5">
      <div className="row season-items-row">
        <h2 className="season-items-headline">Sezonowe kosmetyki</h2>
          <div className="col justify-content-center d-flex">

            <div className="col-4 mx-2 my-2 headline-prod-col">
              <div className="headline-prod text-center overflow-hidden">
                <div className="py-3">
                  <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage1} alt="Image1"/>
                  </div>
                  <h2 className="display">Pomarańcza</h2>
                  <p className="lead">Kolekcja zainpirowana pomarańczami</p>
                </div>
              </div>
            </div> 

            <div className="col-4 mx-2 my-2 headline-prod-col">
              <div className="headline-prod text-center overflow-hidden">
                <div className="py-3">
                  <div className ="container-image-prod">
                    <img className = "new-collection-main-image" src={newCollection_mainImage3} alt="Image2"/>
                  </div>
                  <h2 className="display">Ciało latem</h2>
                  <p className="lead">Zobacz nasze włosowe propozycje na lato</p>
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
                  <p className="lead">Wybór SPF 50+</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div> 
  );
};

export default HeadlinesSeasonalCollection;
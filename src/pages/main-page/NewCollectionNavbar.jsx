import React from 'react';
import './styles/NewCollectionNavbar.css';
import 'bootstrap/dist/css/bootstrap.css';

const NewCollectionNavbar = () => {

  function toggleVisibility(button) {
    button.classList.toggle('clicked');
  }
  
  return (
    <div className="new-collection position-relative overflow-hidden py-5  text-center">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">New Sunny Cosmetics Collection</h1>
        <p className="lead font-weight-normal">Make yourself shiny and glowy within new summer collection</p>
        <button className = "show-more-button">Show more</button>
      </div>
      <div className="image-overlay"></div>
    </div>
  );
};

export default NewCollectionNavbar;

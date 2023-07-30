import React, {useState} from "react";
import './Product.css'
import 'bootstrap/dist/css/bootstrap.css';

import cosmeticsImage from '../../../assets/images/cream.png';

export default function Products(){

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return(
    <div className="product-container d-flex flex-column align-items-center justify-content-center">
      <div className="product-image-container">
        <img src={cosmeticsImage} alt="Product1 Image" className="flex-image"/>
      </div>
      <h2 className ="product-title">Sunny Cream</h2>
      <p className ="product-category">Creams</p>

      <p className ="product-price">$20.00</p>
      <p className ="product-price-sale">Price before sale: $35.00</p>
      
    </div>
  )
}
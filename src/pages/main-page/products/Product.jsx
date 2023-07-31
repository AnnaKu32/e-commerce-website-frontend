import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Product.css'
import 'bootstrap/dist/css/bootstrap.css';
import { IoBasket } from 'react-icons/io5';
import cosmeticsImage from '../../../assets/images/cream.png';

const Product = ({ productId, showSalePrice, regularPrice }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Link to={`/product/${productId}`}>
      <div className="product-container d-flex flex-column align-items-center justify-content-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isMouseOver && (
          <div className="button-product-basket">
            <button onClick={handleButtonClick}>
              <IoBasket size={30} />
            </button>
          </div>
        )}
        <div className="product-image-container">
          <img src={cosmeticsImage} alt="Product1 Image" className="flex-image" />
        </div>
        <h2 className="product-title">Sunny Cream</h2>
        <p className="product-category">Creams</p>
        <p className="product-price">{showSalePrice ? `$${regularPrice.toFixed(2)}` : "$20.00"}</p>
        {showSalePrice && <p className="product-price-sale">Price before sale: ${regularPrice.toFixed(2)}</p>}
      </div>
    </Link>
  )
}

export default Product;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './ProductModal.css'
import 'bootstrap/dist/css/bootstrap.css';
import { IoInformationCircleOutline } from 'react-icons/io5';
import cosmeticsImage from '../../../assets/images/cream.png';

const ProductModal = ({ productId, showSalePrice, regularPrice }) => {
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
              <IoInformationCircleOutline size={30} />
            </button>
          </div>
        )}

        <div className="product-image-container">
          <img src={cosmeticsImage} className="flex-image" />
        </div>

        <h2 className="product-title">Sunny Cream</h2>
        <p className="product-category">Light cream with covering foundation</p>

      </div>
    </Link>
  )
}

export default ProductModal;
import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselThumbnails.css'

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';

const CarouselThumbnails = () => {
    const thumbnailImages = [product1, product2, product3];
    const [selectedImage, setSelectedImage] = useState(product1);

    const settings = {
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
    };

    const handleThumbnailClick = (image) => {
      setSelectedImage(image);
    };
  
    return (
        <div className="carousel-container-wrapper">
          <div className="vertical-carousel-container">
            <div className="vertical-carousel-thumbnails">
              <Slider {...settings}>
                {thumbnailImages.map((thumbnail, index) => (
                  <div key={index} onClick={() => handleThumbnailClick(thumbnail)}>
                    <img src={thumbnail} alt={`Thumbnail ${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="vertical-carousel-preview">
                <img src={selectedImage} alt="Product Preview" />
            </div>
          </div>
        </div>
      );
    };
export default CarouselThumbnails;
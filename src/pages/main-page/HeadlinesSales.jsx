import React from 'react';
import './styles/HeadlinesBestseller.css';
import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import Product from './products/Product';

const HeadlinesSales = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  
  return(
    <div className="bestsellers-window py-5" >
    <h1 className='bestsellers-window-title'>Sale</h1>
    <Carousel 
     swipeable={true}
     draggable={true}
     autoPlay={false}
     arrows={true}
     responsive={responsive}
     removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>
      <Product productId={1} showSalePrice regularPrice={35.00}/>

    </Carousel>
    </div>
  );
      
};

export default HeadlinesSales;
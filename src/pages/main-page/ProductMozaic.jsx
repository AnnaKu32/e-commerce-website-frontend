import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './styles/ProductMozaic.css';
import 'bootstrap/dist/css/bootstrap.css';

import mainImage from '../../assets/images/product-mozaic-1.jpg';
import mainImage2 from '../../assets/images/product-mozaic-2.jpg';
import mainImage3 from '../../assets/images/product-mozaic-3.jpg';
import mainImage4 from '../../assets/images/product-mozaic-4.jpg';

const ProductMozaic = () => {

  const [animateInViewOne, setAnimateInViewOne] = useState(false);
  const [animateInViewTwo, setAnimateInViewTwo] = useState(false);
  const [animateInViewThree, setAnimateInViewThree] = useState(false);
  const [animateInViewFour, setAnimateInViewFour] = useState(false);

  const [refOne, inViewOne] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [refTwo, inViewTwo] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [refThree, inViewThree] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [refFour, inViewFour] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inViewOne) {
      setAnimateInViewOne(true);
    }
  }, [inViewOne]);

  useEffect(() => {
    if (inViewTwo) {
      setAnimateInViewTwo(true);
    }
  }, [inViewTwo]);

  useEffect(() => {
    if (inViewThree) {
      setAnimateInViewOne(true);
    }
  }, [inViewThree]);

  useEffect(() => {
    if (inViewFour) {
      setAnimateInViewTwo(true);
    }
  }, [inViewFour]);

  return (
    <div className="container-fluid season-items">

      <motion.div
        ref={refThree}
        animate={inViewTwo ? { x: 0 } : { x: -1000 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <div className="row season-product-one">
          <div className="col-6 product-mozaic">
            <img src={mainImage3} alt="Image3" style={{height: "500px"}}/>
          </div>
          <div className="col-6 product-mozaic">
            <div className="headline-prod-mozaic text-center overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display">Wyciąg z palmy jako nowy składnik kosmetyków</h2>
                <p className="lead">Zobacz co daje wyciąg z palmy</p>
              </div>
            </div>
          </div>
          <div className="line-product-mozaic"></div>
        </div>
      </motion.div>

      <motion.div
        ref={refTwo}
        animate={inViewTwo ? { x: 0 } : { x: 1000 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
          <div className="row season-product-two">
            <div className="col-6 product-mozaic">
              <div className="headline-prod-mozaic text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display">Zapach oceanu z nową serią marki Perfume</h2>
                  <p className="lead">Odkryj połączenie kwiatu jaśminu z solą morską</p>
                </div>
              </div>
            </div>
            <div className="col-6 product-mozaic">
              <img src={mainImage2} alt="Image2" style={{height: "500px"}}/>
            </div>
            <div className="line-product-mozaic2"></div>
          </div>
        </motion.div>

        <motion.div
          ref={refThree}
          animate={inViewTwo ? { x: 0 } : { x: -1000 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <div className="row season-product-one">
            <div className="col-6 product-mozaic">
              <img src={mainImage3} alt="Image3" style={{height: "500px"}}/>
            </div>
            <div className="col-6 product-mozaic">
              <div className="headline-prod-mozaic text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display">Wyciąg z palmy jako nowy składnik kosmetyków</h2>
                  <p className="lead">Zobacz co daje wyciąg z palmy</p>
                </div>
              </div>
            </div>
            <div className="line-product-mozaic"></div>
          </div>
        </motion.div>

       
    </div>
  );
};

export default ProductMozaic;
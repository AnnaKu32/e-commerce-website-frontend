import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import '../main-page/styles/MainPage.css';
import './ProductPage.css';

import { IoCaretDownOutline } from 'react-icons/io5';
import { IoCaretUpOutline } from 'react-icons/io5';
import { IoStorefrontOutline } from 'react-icons/io5';
import { IoWalletOutline } from 'react-icons/io5';

import PageNavbar from '../main-page/PageNavbar';
import ProductsNavbar from '../main-page/ProductsNavbar';
import AboutCompanyFooter  from '../main-page/AboutCompanyFooter';
import CarouselThumbnails from './CarouselThumbnails';

const ProductPage =  () => {
  const { productId } = useParams();

  const [isHovered, setIsHovered] = useState(false);
  const [openSections, setOpenSections] = useState([]);

  const product = {
    id: productId,
    name: 'Sunny Lipstick',
    description: 'Satin Hydrating Lipstick',
    price: 20.31,
  };

  const sections = [
    { id: 2, title: 'Ingredients', description: 'Aqua, Glycerin, Cococaprylate/Caprate, Propanediol, Diisooctyl Succinate, Squalane, Sucrose Polystearate, Punica Granatum Seed Oil, Cetearyl Alcohol, Ascorbyl Tetraisopalmitate, Rosa Canina Fruit Oil, Benzyl Alcohol, Helianthus Annuus Seed Oil, Hylocereus Undatus Fruit Extract, Xanthan Gum, Glycogen, Sodium Dehydroacetate, Hydrolyzed Lupine Protein, Sodium Hyaluronate, Sodium Stearoyl Glutamate, Hippophae Rhamnoides Oil, Citric Acid, Olea Europaea Oil Unsaponifiables, Magnesium Ascorbyl Phosphate, Dehydroacetic Acid, Terminalia Ferdinandiana Fruit Extract, Rosmarinus Officinalis Leaf Extract, Parfum, Citrus Aurantium Amara Flower Extract, Linalool, Limonene, Geraniol, Benzoic Acid, Sodium Hydroxide.' },
    { id: 3, title: 'How to use', description: 'Apply to lips and powder'},
  ];

  const handleSectionClick = (id) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((sectionId) => sectionId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <PageNavbar />

      <div className="main-page-container">
        <div className="products-navbar-container">
          <ProductsNavbar />
        </div>

        <div className='margin-for-con py-5'>
          <div className='product-window my-4 '>
            <div className='row d-flex justify-content-between flex-wrap'>
              <div className="col-7 carousel-thumbnails">
                <CarouselThumbnails />
              </div>
              <div className='col-md-5 product-description'>

                <h2 className="product-page-name">{product.name}</h2>
                <p className="product-page-description">{product.description}</p>
                <p className="product-page-price">${product.price}</p>
                <button className='btn add-to-cart'> Add to cart</button>

                <div className={`availability-check ${isHovered ? 'hover-effect' : ''}`}>
                  <button className="btn-availability"> <IoStorefrontOutline /> </button>
                  Sprawdź dostępność w sklepie
                </div>

                <div class={`availability-check ${isHovered ? 'hover-effect' : ''}`}>
                  <button className="btn-payment">  <IoWalletOutline /> </button>
                  Możliwość płatności
                </div>

                <div>
                  <p className= "about-product"> About product</p>
                    <p class="centered-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium velit ex, volutpat rutrum diam cursus sit amet. In nunc urna, commodo vel mi eu, 
                      placerat porttitor tortor. Integer eget dignissim quam, egestas tincidunt justo. Donec placerat orci sit amet interdum rutrum. 
                      Etiam vitae ex eleifend, accumsan ipsum ut, posuere libero. Maecenas at quam in leo finibus venenatis a quis nunc. 
                      Suspendisse vitae consectetur ex. Sed fermentum interdum consectetur.
                    </p>
                </div>
        
                <div>
                  {sections.map((section) => (
                    <div key={section.id} className="section-container">
                      <h2
                        className="section-title"
                        onClick={() => handleSectionClick(section.id)}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                      >
                        {section.title}
                        {/* <div className="container-arrow">
                          <i className="arrow-icon">
                            <IoCaretDownOutline />
                          </i>
                        </div> */}
                      </h2>
                      <AnimatePresence>
                        {openSections.includes(section.id) && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            style={{ overflow: 'hidden' }}
                            transition={{ delay: 0.1 }}
                          >
                            <p className="section-description">{section.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          
          <div>
            <h2 className= "similiar-products"> Similiar products</h2>
              <p class="centered-text"> [ karuzela zdjęć innych produktów ]
              </p>
          </div>

        </div>

      </div>
      <AboutCompanyFooter />
    </div>
  );
};

export default ProductPage;
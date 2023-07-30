import React, { useState } from 'react';
import { motion} from "framer-motion"

import './styles/ProductsNavbar.css';
import 'bootstrap/dist/css/bootstrap.css';

import makeupCategory from '../../assets/images/makeup-category.jpg';

import Category from './products/Category';

const ProductsNavbar = () => {

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav className="navbar-category-products navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav d-flex justify-content-between flex-wrap">

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('New products')} onMouseLeave={handleMouseLeave}>
              <p style={{ color: 'rgb(255, 133, 81)' }}>New products</p>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Makeup')} onMouseLeave={handleMouseLeave}>
            
            
            <div className="nav-link-title-products" id="makeup-link">
              Makeup
            </div>

              {hoveredCategory  === 'Makeup' && (
                <div>
                <div className="black-filter"></div>
                <motion.div
                  className="category-list-container-motion"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onMouseEnter={() => handleMouseEnter('Makeup')}
                  onMouseLeave={handleMouseLeave}
                >

                <div className="category-list-container">
                  <Category
                    title="Face"
                    subcategories={[
                      'Foundation',
                      'BB & CC Creams',
                      'Concealer',
                      'Setting Spray & Powder',
                      'Face Sets'
                    ]}
                  />
                  <Category
                    title="Eye"
                    subcategories={[
                      'Eye Palettes',
                      'Mascara',
                      'Eyeliner',
                      'Eyeshadow',
                      'False Eyelashes'
                    ]}
                  />
                    <Category
                    title="Lip"
                    subcategories={[
                      'Lipstick',
                      'Lip Gloss',
                      'Lip Liner',
                      'Lip Oil',
                      'Lip Sets'
                    ]}
                  />
                  <Category
                    title="Powders"
                    subcategories={[
                      'Blush',
                      'Bronzer',
                      'Highlighter',
                      'Contour',
                      'Cheek Palettes'
                    ]} 
                  />

                  <div className="image-wrapper-category">
                    <img src={makeupCategory} alt="makeup-category-image" />
                  </div>

                </div>
                </motion.div>
              </div>
              )}
              
          </li>

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Perfumes')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
              Perfumes
            </div>

            {hoveredCategory  === 'Perfumes' && (
                <div>
                <div className="black-filter"></div>
                <motion.div
                  className="category-list-container-motion"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >

                <div className="category-list-container">
                  <Category
                    title="Perfume 1"
                    subcategories={[
                      'Foundation',
                      'BB & CC Creams',
                      'Concealer',
                      'Setting Spray & Powder',
                      'Face Sets'
                    ]}
                  />
                  <Category
                    title="Perfume 2"
                    subcategories={[
                      'Eye Palettes',
                      'Mascara',
                      'Eyeliner',
                      'Eyeshadow',
                      'False Eyelashes'
                    ]}
                  />
                    <Category
                    title="Perfume 3"
                    subcategories={[
                      'Lipstick',
                      'Lip Gloss',
                      'Lip Liner',
                      'Lip Oil',
                      'Lip Sets'
                    ]}
                  />
                  <Category
                    title="Perfume 4"
                    subcategories={[
                      'Blush',
                      'Bronzer',
                      'Highlighter',
                      'Contour',
                      'Cheek Palettes'
                    ]} 
                  />

                  <div className="image-wrapper-category">
                    <img src={makeupCategory} alt="makeup-category-image" />
                  </div>

                </div>
                </motion.div>
              </div>
              )}
          </li>

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('Face')} onMouseLeave={handleMouseLeave}>
              Face
            </div>

            {hoveredCategory  === 'Face' && (
                <div>
                <div className="black-filter"></div>
                <motion.div
                  className="category-list-container-motion"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >

                <div className="category-list-container">
                  <Category
                    title="Cream 1"
                    subcategories={[
                      'Foundation',
                      'BB & CC Creams',
                      'Concealer',
                      'Setting Spray & Powder',
                      'Face Sets'
                    ]}
                  />
                  <Category
                    title="Tonic"
                    subcategories={[
                      'Eye Palettes',
                      'Mascara',
                      'Eyeliner',
                      'Eyeshadow',
                      'False Eyelashes'
                    ]}
                  />
                    <Category
                    title="Eye cream"
                    subcategories={[
                      'Lipstick',
                      'Lip Gloss',
                      'Lip Liner',
                      'Lip Oil',
                      'Lip Sets'
                    ]}
                  />
                  <Category
                    title="Lip cream"
                    subcategories={[
                      'Blush',
                      'Bronzer',
                      'Highlighter',
                      'Contour',
                      'Cheek Palettes'
                    ]} 
                  />

                  <div className="image-wrapper-category">
                    <img src={makeupCategory} alt="makeup-category-image" />
                  </div>

                </div>
                </motion.div>
              </div>
              )}
          </li>

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('Body')} onMouseLeave={handleMouseLeave}>
              Body
            </div>

            {hoveredCategory  === 'Body' && (
                <div>
                <div className="black-filter"></div>
                <motion.div
                  className="category-list-container-motion"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >

                <div className="category-list-container">
                  <Category
                    title="Body 1"
                    subcategories={[
                      'Foundation',
                      'BB & CC Creams',
                      'Concealer',
                      'Setting Spray & Powder',
                      'Face Sets'
                    ]}
                  />
                  <Category
                    title="Body 1"
                    subcategories={[
                      'Eye Palettes',
                      'Mascara',
                      'Eyeliner',
                      'Eyeshadow',
                      'False Eyelashes'
                    ]}
                  />
                    <Category
                    title="Body 1"
                    subcategories={[
                      'Lipstick',
                      'Lip Gloss',
                      'Lip Liner',
                      'Lip Oil',
                      'Lip Sets'
                    ]}
                  />
                  <Category
                    title="Body 1"
                    subcategories={[
                      'Blush',
                      'Bronzer',
                      'Highlighter',
                      'Contour',
                      'Cheek Palettes'
                    ]} 
                  />

                  <div className="image-wrapper-category">
                    <img src={makeupCategory} alt="makeup-category-image" />
                  </div>

                </div>
                </motion.div>
              </div>
              )}
          </li>

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('Hair')} onMouseLeave={handleMouseLeave}>
              Hair
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('Sale')} onMouseLeave={handleMouseLeave}>
              <p style={{ color: "red" }}>Sale</p>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link-title-products" id="makeup-link" onMouseEnter={() => handleMouseEnter('Hair')} onMouseLeave={handleMouseLeave}>
              Service
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default ProductsNavbar;
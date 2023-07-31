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
    <nav className="navbar-category-products navbar-expand-lg pt-2">
      <div className="container container-category-products">
        <ul className="navbar-nav d-flex justify-content-between flex-wrap">

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('New products')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
              <p style={{ color: 'rgb(255, 133, 81)' }}>New products</p>
            </div>

            {hoveredCategory  === 'New products' && (
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
                <div className='row'>

                  <div className='col-4'> 
                    <div className="image-wrapper-category-new-products">
                      <img src={makeupCategory} alt="makeup-category-image" />
                    </div>  
                  </div>

                  <div className='col-4'> 
                    <div className="image-wrapper-category-new-products">
                      <img src={makeupCategory} alt="makeup-category-image" />
                    </div>  
                  </div>

                  <div className='col-4'> 
                    <div className="image-wrapper-category-new-products">
                      <img src={makeupCategory} alt="makeup-category-image" />
                    </div>  
                  </div>

                </div>
              </div>

              </motion.div>
            </div>
            )}
            
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

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Fragrance')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
              Fragrance
            </div>

            {hoveredCategory  === 'Fragrance' && (
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
                    title="Woman"
                    subcategories={[
                      'Eau de Parfum',
                      'Eau de Toilette',
                      'Solid Perfume',
                      'Unisex',
                      'Perfume Oil'
                    ]}
                  />
                  <Category
                    title="Men"
                    subcategories={[
                      'Eau de Parfum',
                      'Eau de Toilette',
                      'Solid Perfume',
                      'Unisex',
                      'Perfume Oil'
                    ]}
                  />
                    <Category
                    title="Bestsellers"
                    subcategories={[
                      'Perfume Oil',
                      'Solid Perfume',
                      'Oriental',
                      'Floral',
                      'Unisex'
                    ]}
                  />
                  <Category
                    title="Fragrance Family"
                    subcategories={[
                      'Floral',
                      'Oriental',
                      'Woody',
                      'Citrus',
                      'Green'
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

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Face')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
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
                    title="Creams"
                    subcategories={[
                      'Hydrating',
                      'Anti-Aging',
                      'Soothing',
                      'Mattifying ',
                      'Brightening'
                    ]}
                  />
                  <Category
                    title="Tonic"
                    subcategories={[
                      'Hydrating',
                      'Exfoliating',
                      'Soothing',
                      'Pore-Refining ',
                      'Hydrating Mist'
                    ]}
                  />
                    <Category
                    title="Eye cream"
                    subcategories={[
                      'Hydrating',
                      'Anti-Aging',
                      'Firming',
                      'Cooling',
                      'Brightening'
                    ]}
                  />
                  <Category
                    title="Lip cream"
                    subcategories={[
                      'Moisturizing',
                      'Overnight',
                      'Tinted',
                      'Lip Mask',
                      'Lip Salve'
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

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Body')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
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
                    title="Lotion & Moisturizers"
                    subcategories={[
                      'Hydrating',
                      'Intensive',
                      'Nourishing',
                      'Soothing'
                    ]}
                  />
                  <Category
                    title="Wash & Shower Gels"
                    subcategories={[
                      'Refreshing',
                      'Moisturizing',
                      'Exfoliating',
                      'Sensitive'
                    ]}
                  />
                    <Category
                    title="Scrubs & Exfoliators"
                    subcategories={[
                      'Sugar',
                      'Salt',
                      'Coffee',
                      'Fruit Enzyme'
                    ]}
                  />
                  <Category
                    title="Fragrances & Mists"
                    subcategories={[
                      'Body Sprays',
                      'Perfumed',
                      'Solid Perfume',
                      'Fragrance Lotions'
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

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Hair')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link">
              Hair
            </div>

            {hoveredCategory  === 'Hair' && (
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
                    title="Shampoo"
                    subcategories={[
                      'Moisturizing',
                      'Clarifying',
                      'Color-Protecting',
                      'Volumizing'
                    ]}
                  />
                  <Category
                    title="Conditioner"
                    subcategories={[
                      'Repairing',
                      'Hydrating',
                      'Leave-In',
                      'Color-Protecting'
                    ]}
                  />
                    <Category
                    title="Hair Styling"
                    subcategories={[
                      'Hair Spray',
                      'Hair Gel',
                      'Hair Mousse',
                      'Hair Serum'
                    ]}
                  />
                  <Category
                    title="Treatments"
                    subcategories={[
                      'Deep Conditioning Mask',
                      'Scalp Treatments',
                      'Hair Oil',
                      'Protein Treatments'
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

          <li className="nav-item" onMouseEnter={() => handleMouseEnter('Sale')} onMouseLeave={handleMouseLeave}>
            <div className="nav-link-title-products" id="makeup-link" >
              <p style={{ color: "red" }}>Sale</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProductsNavbar;
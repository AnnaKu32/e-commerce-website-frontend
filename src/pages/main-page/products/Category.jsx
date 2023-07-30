import React from "react";
import './Category.css';
import 'bootstrap/dist/css/bootstrap.css';

const Category = ({ title, subcategories }) => {
    return (
      <div>
        <div className="category-wrapper">
          <div className="category">
            <h3 className="category-title">{title}</h3>
            <ul className="subcategory-list">
              {subcategories.map((subcategory, index) => (
                <li key={index}>
                  <a href="#" className="product">
                    {subcategory}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};
  
export default Category;
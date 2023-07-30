import React, { useState, useTransition} from 'react';
import './styles/PageNavbar.css';

import { IoSearchOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoBasketOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

import 'bootstrap/dist/css/bootstrap.css';
import Modal from './modal-windows/Modal.jsx'

const PageNavbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    console.log('Modal open');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <div className="navbar-top">
          <div className="navbar-left">
            <a className="navbar-brand" href="/">
              Sunny Cosmetics
            </a>
          </div>
        </div>

        <div className="navbar-center">
          <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Search" />
            <button className="searchButton border-0" href="#">
              <IoSearchOutline />
            </button>
          </div>
        </div>

        <div className="navbar-bottom">
          <div className="navbar-right">
            <button className="btn-login btn-outline-primary m-2 rounded-circle border-0" type="button" onClick={handleOpenModal}>
              <IoPersonOutline className="icon" />
            </button>
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>&times;</span>
                  <Modal />
                </div>
              </div>
            )}

            <button className="btn-basket btn-primary rounded-circle m-2 border-0" type="button">
              <IoBasketOutline className="icon"/>
            </button>

            <button className="btn-liked btn-danger rounded-circle m-2 border-0" type="button">
              <IoHeartOutline className="icon"/>
            </button>
          </div>
        </div>

          

        </div>
    </nav>
  );
};

export default PageNavbar;
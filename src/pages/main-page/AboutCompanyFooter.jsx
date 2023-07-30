import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/AboutCompanyFooter.css'

import { IoMail } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';

import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const AboutCompanyFooter = () => {
    return (
      <div className="about-company">
        <footer className="container">
          <div className="row">
            <div className="col-2">
              <p> <IoMail/> Napisz do nas</p>
              <small className="d-block mb-3 text-muted">info-client@sunny.com</small>

              <p> <IoCall /> Zadzwoń</p>
              <small className="d-block mb-3 text-muted">+48 678 456 789</small>
            </div>
            <div className="col-2 mb-3">
              <h5>About</h5>
              <ul className="list-unstyled text-small white-text">
                <li><a className="text-muted" href="#">About us</a></li>
                <li><a className="text-muted" href="#">Carier</a></li>
                <li><a className="text-muted" href="#">Zostań Partnerem</a></li>
                <li><a className="text-muted" href="#">Kontakt</a></li>
                <li><a className="text-muted" href="#">Company values</a></li>
              </ul>
            </div>
            <div className="col-2 mb-3">
              <h5>More informations</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Contact for another companies</a></li>
                <li><a className="text-muted" href="#">Payment methods</a></li>
                <li><a className="text-muted" href="#">Delivery and Returns</a></li>
                <li><a className="text-muted" href="#">Sales rules</a></li>
                
              </ul>
            </div>
            <div className="col-2 mb-3">
              <h5>Help</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Customer Service</a></li>
                <li><a className="text-muted" href="#">Billing</a></li>
                <li><a className="text-muted" href="#">Gift Cards</a></li>
              </ul>
            </div>
            <div class="col-2 mb-3">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div>

            <div class="col-2 mb-3 icons-footer">
              <button className="btn-facebook btn-primary rounded-circle m-2 border-0" type="button">
                <IoLogoFacebook className="icon"/>
              </button>

              <button className="btn-youtube btn-primary rounded-circle m-2 border-0" type="button">
                <IoLogoYoutube className="icon"/>
              </button>

              <button className="btn-instagram btn-primary rounded-circle m-2 border-0" type="button">
                <IoLogoInstagram className="icon"/>
              </button>

              <button className="btn-googleplaystore btn-primary rounded-circle m-2 border-0" type="button">
                <IoLogoGooglePlaystore className="icon"/>
              </button>
              
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default AboutCompanyFooter;
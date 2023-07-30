import React from 'react';
import Login from './Login';
import './Modal.css';

const Modal = () => {
    return (
      <div className="container-login-register">
        <div className="row">
          
          <Login />

          <div class="col-6 register">
            <div class="register-content">
              <h2 class="register-title">Don't have an account?</h2>
              <h4 class="register-subtitle">Create an account</h4>
            </div>
            <button class="register-button">Create Account</button>
          </div>

        </div>
      </div>
  );
}

export default Modal;
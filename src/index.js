import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import Login from './pages/main-page/modal-windows/Login';
import UserPage from "./pages/user-page/UserPage";
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';

// TODO:
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="me" element={<UserPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
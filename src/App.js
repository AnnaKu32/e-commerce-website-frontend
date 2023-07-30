import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Login from './pages/main-page/modal-windows/Login';
import UserPage from './pages/user-page/UserPage';
import MainPage from './pages/main-page/MainPage';
import ProductPage from './pages/product-page/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<UserPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/home.scss';

import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

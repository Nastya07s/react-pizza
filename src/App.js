import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';

import './scss/home.scss';

export const SearchContext = React.createContext();

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

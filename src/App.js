import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/home.scss';

import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

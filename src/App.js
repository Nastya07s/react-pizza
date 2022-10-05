import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/home.scss';

import Header from './components/Header';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

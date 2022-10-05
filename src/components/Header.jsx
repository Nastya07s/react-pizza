import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/img/logo.svg';
import cart from './../assets/img/cart.svg';
import Search from './Search';

import { SearchContext } from '../App';

function Header() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Pizza logo" />
        <div className="title">
          <h1>React pizza</h1>
          <span className="desc">The best pizza in the Universe</span>
        </div>
      </Link>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
      <Link to="cart" className="cart">
        <div className="amount">456$</div>
        <div className="count">
          <img src={cart} alt="Cart" />
          <span>3</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;

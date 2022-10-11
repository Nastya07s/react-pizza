import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

import cart from './../assets/img/cart.svg';
import logo from './../assets/img/logo.svg';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Pizza logo" />
        <div className="title">
          <h1>React pizza</h1>
          <span className="desc">The best pizza in the Universe</span>
        </div>
      </Link>
      <Search></Search>
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

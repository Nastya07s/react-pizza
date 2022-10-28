import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from './Search';
import { cartSelector } from '../redux/slices/cartSlice';

import cart from './../assets/img/cart.svg';
import logo from './../assets/img/logo.svg';

function Header() {
  const { items, totalPrice } = useSelector(cartSelector);
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
        <div className="amount">{totalPrice.toFixed(1)}$</div>
        <div className="count">
          <img src={cart} alt="Cart" />
          <span>{items.reduce((acc, item) => acc + item.count, 0)}</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;

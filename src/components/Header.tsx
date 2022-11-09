import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CartItemRedux } from '../redux/cart/types';
import { cartSelector } from '../redux/cart/selectors';

import Search from './Search';

import cart from './../assets/img/cart.svg';
import logo from './../assets/img/logo.svg';
import { addAllItems } from '../redux/cart/slice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, totalPrice } = useSelector(cartSelector);
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);

      localStorage.setItem('items', json);
    } else {
      const json = localStorage.getItem('items');
      const data: CartItemRedux[] = json ? JSON.parse(json) : [];

      dispatch(addAllItems(data));
    }

    isMounted.current = true;
  }, [dispatch, items]);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Pizza logo" />
        <div className="title">
          <h1>React pizza</h1>
          <span className="desc">The best pizza in the Universe</span>
        </div>
      </Link>
      {!location.pathname.includes('/cart') ? <Search></Search> : null}
      <Link to="cart" className="cart">
        <div className="amount">{totalPrice.toFixed(1)}$</div>
        <div className="count">
          <img src={cart} alt="Cart" />
          <span>{items.reduce((acc: number, item: CartItemRedux) => acc + item.count, 0)}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;

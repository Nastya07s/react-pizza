import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/cart-empty.png';

const CartEmpty = () => {
  return (
    <>
      <p class="title">Cart empty 😕</p>
      <p class="desc">
        You probably haven't ordered pizza yet. To order pizza, go to the main page.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default CartEmpty;

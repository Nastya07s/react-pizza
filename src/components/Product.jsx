import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, removeItem, decreaseCount } from '../redux/slices/cartSlice';

const Product = (product) => {
  const dispatch = useDispatch();
  const { imageUrl, title, price, size: sizeIndex, sizes, type, count } = product;

  const { typeNames } = useSelector((state) => state.constants);

  return (
    <div className="product row">
      <div className="info">
        <img src={imageUrl} alt={title} />
        <div className="text">
          <p className="title">{title}</p>
          <p className="desc">
            {typeNames[type]} dough, {sizes[sizeIndex]} sm
          </p>
        </div>
      </div>
      <div className="counter">
        <button onClick={() => dispatch(decreaseCount(product))} className="decrease button">
          -
        </button>
        <p className="count">{count}</p>
        <button onClick={() => dispatch(increaseCount(product))} className="increase button">
          +
        </button>
      </div>
      <p className="price">${price * count}</p>
      <div className="">
        <button onClick={() => dispatch(removeItem(product))} className="remove button">
          +
        </button>
      </div>
    </div>
  );
};

export default Product;

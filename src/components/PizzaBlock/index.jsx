import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from './../../redux/slices/cartSlice';

function PizzaBlock(pizzaItem) {
  const dispatch = useDispatch();

  const { id, title, price, imageUrl, types, sizes } = pizzaItem;

  const [activeType, setActiveType] = React.useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);

  const { items } = useSelector((state) => state.cart);
  const { typeNames } = useSelector((state) => state.constants);

  const count =
    items.find(
      (item) => item.id === id && item.type === activeType && item.size === activeSizeIndex,
    )?.count ?? 0;

  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={imageUrl} alt="Cheeseburger pizza" />
        <p className="name">{title}</p>
        <div className="filtres">
          <div className="dough">
            {types.map((typeId, i) => {
              return (
                <p
                  key={i}
                  className={activeType === i ? 'active' : ''}
                  onClick={() => setActiveType(i)}>
                  {typeNames[typeId]}
                </p>
              );
            })}
          </div>
          <div className="size">
            {sizes.map((size, i) => {
              return (
                <p
                  key={i}
                  className={activeSizeIndex === i ? 'active' : ''}
                  onClick={() => setActiveSizeIndex(i)}>
                  {size} sm
                </p>
              );
            })}
          </div>
        </div>
        <div className="total">
          <p className="price">
            from $<span>{price}</span>
          </p>
          <button
            onClick={() =>
              dispatch(addItem({ ...pizzaItem, type: activeType, size: activeSizeIndex }))
            }
            className="add">
            <p>+</p>
            <p>Add</p>
            <div className="counter">{count.toString().length > 2 ? '+99' : count}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;

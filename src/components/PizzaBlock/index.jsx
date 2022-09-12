import React from 'react';

function PizzaBlock({ title, price, imageUrl, types, sizes }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);

  const typeNames = ['Thin', 'Traditional'];

  return (
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
        <button className="add">
          <p>+</p>
          <p>Add</p>
          <div className="counter">0</div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;

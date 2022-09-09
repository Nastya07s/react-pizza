import React from 'react';

function PizzaBlock({ title, price, imgUrl }) {
  const [count, setCount] = React.useState(0);

  return (
    <div className="card">
      <img src={imgUrl} alt="Cheeseburger pizza" />
      <p className="name">{title}</p>
      <div className="filtres">
        <div className="dough">
          <p className="active">Thin</p>
          <p>Traditional</p>
        </div>
        <div className="size">
          <p className="active">26 sm</p>
          <p>30 sm</p>
          <p>40 sm</p>
        </div>
      </div>
      <div className="total">
        <p className="price">
          from $<span>{price}</span>
        </p>
        <button className="add" onClick={() => setCount(count + 1)}>
          <p>+</p>
          <p>Add</p>
          <div className="counter">{count}</div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;

import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['All', 'Meat', 'Vega', 'Grill', 'Spicy', 'Closed'];

  return (
    <ul className="types">
      {categories.map((category, i) => {
        return (
          <li
            key={i}
            className={value === i ? 'active' : ''}
            onClick={() => {
              onClickCategory(i);
            }}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;

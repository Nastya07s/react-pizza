import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['All', 'Meat', 'Vega', 'Grill', 'Spicy', 'Closed'];

  return (
    <ul className="types">
      {categories.map((category, i) => {
        return (
          <li
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={() => {
              setActiveIndex(i);
            }}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;

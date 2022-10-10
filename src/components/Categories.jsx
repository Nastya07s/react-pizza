import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategoryId } from '../redux/slices/filterSlice';

const categories = ['All', 'Meat', 'Vega', 'Grill', 'Spicy', 'Closed'];

function Categories() {
  const activeCategoryId = useSelector((state) => state.filter.activeCategoryId);
  const dispatch = useDispatch();

  return (
    <ul className="types">
      {categories.map((category, i) => {
        return (
          <li
            key={i}
            className={activeCategoryId === i ? 'active' : ''}
            onClick={() => dispatch(setActiveCategoryId(i))}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;

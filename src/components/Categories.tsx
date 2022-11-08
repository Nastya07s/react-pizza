import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

import { setActiveCategoryId } from '../redux/slices/filterSlice';

const categories = ['All', 'Meat', 'Vega', 'Grill', 'Spicy', 'Closed'];

const Categories: React.FC = () => {
  const activeCategoryId = useSelector((state: RootState) => state.filter.activeCategoryId);
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
};

export default Categories;

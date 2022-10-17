import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

import arrow from './../assets/img/arrow.svg';

const sortObjects = [
  { name: 'polular first', field: 'rating', order: 'desc' },
  { name: 'polular last', field: 'rating', order: 'asc' },
  { name: 'price ascending', field: 'price', order: 'asc' },
  { name: 'price descending', field: 'price', order: 'desc' },
  { name: 'alfabet', field: 'title', order: 'asc' },
];

function Sort() {
  const [isVisible, setIsVisability] = React.useState(false);
  const sortRef = React.useRef();

  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const findSortName = (currentSort) => sortObjects.find((obj) => obj.field === currentSort.field);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setIsVisability(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <img src={arrow} alt="Arrow up" className={isVisible ? '' : 'rotate'} />
      <div className="text">
        <p>
          Sort by <span onClick={() => setIsVisability(!isVisible)}>{findSortName(sort).name}</span>
        </p>
        {isVisible && (
          <div className="filters">
            {sortObjects.map((obj, i) => {
              return (
                <p key={i} onClick={() => dispatch(setSort(obj))}>
                  {obj.name}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sort;

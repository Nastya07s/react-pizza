import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { constantsSelector } from '../redux/slices/constantsSlice';
import { setSort } from '../redux/slices/filterSlice';

import arrow from './../assets/img/arrow.svg';

function Sort() {
  const dispatch = useDispatch();

  const [isVisible, setIsVisability] = React.useState(false);
  const sortRef = React.useRef();

  const { sortObjects } = useSelector(constantsSelector);
  const sort = useSelector((state) => state.filter.sort);

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

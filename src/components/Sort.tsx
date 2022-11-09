import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { constantsSelector } from '../redux/constants/selectors';
import { SortObject } from '../redux/constants/types';
import { setSort } from '../redux/filter/slice';
import { RootState } from '../redux/store';

import arrow from './../assets/img/arrow.svg';

const Sort: React.FC = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisability] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const { sortObjects } = useSelector(constantsSelector);
  const sort = useSelector((state: RootState) => state.filter.sort);

  const findSortName = (currentSort: SortObject) =>
    sortObjects.find((obj) => obj.field === currentSort.field);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current as Node)) {
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
          Sort by{' '}
          <span onClick={() => setIsVisability(!isVisible)}>{findSortName(sort)?.name}</span>
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
};

export default Sort;

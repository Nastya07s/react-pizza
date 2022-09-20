import React from 'react';

import arrow from './../assets/img/arrow.svg';

function Sort({ value, onClickSort }) {
  const [isVisible, setIsVisability] = React.useState(false);

  const sortObjects = [
    { name: 'polular first', field: 'rating', order: 'desc' },
    { name: 'polular last', field: 'rating', order: 'asc' },
    { name: 'price ascending', field: 'price', order: 'asc' },
    { name: 'price descending', field: 'price', order: 'desc' },
    { name: 'alfabet', field: 'title', order: 'asc' },
  ];

  return (
    <div className="sort">
      <img src={arrow} alt="Arrow up" className={isVisible ? '' : 'rotate'} />
      <div className="text">
        <p>
          Sort by <span onClick={() => setIsVisability(!isVisible)}>{value.name}</span>
        </p>
        {isVisible && (
          <div className="filters">
            {sortObjects.map((obj, i) => {
              return (
                <p key={i} onClick={() => onClickSort(obj)}>
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

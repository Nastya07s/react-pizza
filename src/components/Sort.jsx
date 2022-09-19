import React from 'react';

import arrow from './../assets/img/arrow.svg';

function Sort() {
  const [sortBy, setSortBy] = React.useState('popularity');
  const [isVisible, setIsVisability] = React.useState(false);

  const sortNames = ['popularity', 'price', 'alfabet'];

  return (
    <div className="sort">
      <img src={arrow} alt="Arrow up" className={isVisible ? '' : 'rotate'} />
      <div className="text">
        <p>
          Sort by <span onClick={() => setIsVisability(!isVisible)}>{sortBy}</span>
        </p>
        {isVisible && (
          <div className="filters">
            {sortNames.map((name, i) => {
              return (
                <p key={i} onClick={() => setSortBy(name)}>
                  {name}
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

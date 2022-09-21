import React from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';

function Main({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [sort, setSort] = React.useState({ name: 'polular first', field: 'rating', order: 'desc' });
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(sort);
    fetch(
      `${process.env.REACT_APP_HOST}/items?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${sort.field}&order=${sort.order}`,
    )
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sort]);

  return (
    <main>
      <nav>
        <Categories value={categoryIndex} onClickCategory={(i) => setCategoryIndex(i)} />
        <Sort value={sort} onClickSort={(i) => setSort(i)} />
      </nav>
      <section>
        <div className="title">
          <p>
            <span>Все</span> пиццы
          </p>
        </div>
        <div className="pizzas">
          {isLoading
            ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
            : items
                .filter((pizza) => pizza.title.includes(searchValue))
                .map((pizza) => {
                  return <PizzaBlock key={pizza.id} {...pizza} />;
                })}
        </div>
      </section>
    </main>
  );
}

export default Main;

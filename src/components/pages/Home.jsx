import React from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import Pagination from '../Pagination';

import { SearchContext } from '../../App';

function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [sort, setSort] = React.useState({ name: 'polular first', field: 'rating', order: 'desc' });
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { searchValue } = React.useContext(SearchContext);

  const limit = 4;

  React.useEffect(() => {
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const search = searchValue ? `title=${searchValue}` : '';

    fetch(
      `${process.env.REACT_APP_HOST}/items?limit=${limit}&page=${currentPage}&${category}&sortBy=${sort.field}&order=${sort.order}&${search}`,
    )
      .then((res) => res.json())
      .then(({ items, count }) => {
        setItems(items);
        setCount(count);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryIndex, sort, searchValue, currentPage]);

  React.useEffect(() => {
    setCurrentPage(0);
  }, [count]);

  const pizzas = items
    .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });

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
          {isLoading ? [...Array(4)].map((_, i) => <Skeleton key={i} />) : pizzas}
        </div>
      </section>
      <Pagination
        count={count}
        setCurrentPage={setCurrentPage}
        limit={limit}
        currentPage={currentPage}></Pagination>
    </main>
  );
}

export default Main;

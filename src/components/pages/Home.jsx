import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Categories from '../Categories';
import Pagination from '../Pagination';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import Sort from '../Sort';

import { SearchContext } from '../../App';

function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { searchValue } = React.useContext(SearchContext);
  const { activeCategoryId, sort } = useSelector((state) => state.filter);

  const limit = 4;

  React.useEffect(() => {
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
    const search = searchValue ? `title=${searchValue}` : '';

    // fetch(
    //   `${process.env.REACT_APP_HOST}/items?limit=${limit}&page=${currentPage}&${category}&sortBy=${sort.field}&order=${sort.order}&${search}`,
    // )
    //   .then((res) => res.json())
    //   .then(({ items, count }) => {
    //     setItems(items);
    //     setCount(count);
    //     setIsLoading(false);
    //   });

    axios
      .get(
        `${process.env.REACT_APP_HOST}/items?limit=${limit}&page=${currentPage}&${category}&sortBy=${sort.field}&order=${sort.order}&${search}`,
      )
      .then(({ data }) => {
        setItems(data.items);
        setCount(data.count);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [activeCategoryId, sort, searchValue, currentPage]);

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
        <Categories />
        <Sort />
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

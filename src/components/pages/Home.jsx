import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Categories from '../Categories';
import Pagination from '../Pagination';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import Sort from '../Sort';

import { setCurrentPage, setFilters } from './../../redux/slices/filterSlice';

function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const isMounted = React.useRef(false);

  const { activeCategoryId, sort, searchValue, currentPage, limit } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();

  const DEFULT_SEARCH_PARAMS = `limit=${limit}&page=${currentPage}`;

  const fetchPizzas = React.useCallback(() => {
    const preparedSearchParams =
      searchParams.toString().replace(/(&category=0)|(&title=$)/g, '') || DEFULT_SEARCH_PARAMS;

    axios.get(`${process.env.REACT_APP_HOST}/items?${preparedSearchParams}`).then(({ data }) => {
      setItems(data.items);
      setCount(data.count);
      setIsLoading(false);
    });
  }, [searchParams, DEFULT_SEARCH_PARAMS]);

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        limit,
        page: currentPage,
        category: activeCategoryId,
        sortBy: sort.field,
        order: sort.order,
        title: searchValue || '',
      };

      setSearchParams(params);
    }

    isMounted.current = true;
  }, [setSearchParams, searchParams, activeCategoryId, sort, searchValue, currentPage, limit]);

  React.useEffect(() => {
    if (searchParams.has('sortBy')) {
      const objectSearchParams = Object.fromEntries([...searchParams]);

      objectSearchParams.title = objectSearchParams.title || '';

      dispatch(setFilters(objectSearchParams));
    }
  }, [dispatch, searchParams, activeCategoryId]);

  React.useEffect(() => {
    setIsLoading(true);

    fetchPizzas();

    window.scrollTo(0, 0);
  }, [fetchPizzas, searchParams]);

  React.useEffect(() => {
    dispatch(setCurrentPage(0));
  }, [dispatch, count]);

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
      <Pagination count={count} limit={limit}></Pagination>
    </main>
  );
}

export default Main;

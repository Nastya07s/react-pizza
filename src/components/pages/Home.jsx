import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Categories from '../Categories';
import Pagination from '../Pagination';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import Sort from '../Sort';

import { setCurrentPage, setFilters } from './../../redux/slices/filterSlice';
import { fetchPizzas } from './../../redux/slices/pizzaSlice';

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMounted = React.useRef(false);

  const { items, count, fetchStatus } = useSelector((state) => state.pizza);
  const { activeCategoryId, sort, searchValue, currentPage, limit } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();

  const DEFULT_SEARCH_PARAMS = `limit=${limit}&page=${currentPage}`;

  const getPizzas = React.useCallback(async () => {
    const preparedSearchParams =
      searchParams.toString().replace(/(&category=0)|(&title=$)/g, '') || DEFULT_SEARCH_PARAMS;
    dispatch(fetchPizzas(preparedSearchParams));
  }, [dispatch, searchParams, DEFULT_SEARCH_PARAMS]);

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
  }, [dispatch, searchParams]);

  React.useEffect(() => {
    getPizzas();

    window.scrollTo(0, 0);
  }, [getPizzas, searchParams]);

  React.useEffect(() => {
    dispatch(setCurrentPage(0));
  }, [dispatch, count]);

  const pizzas = items
    .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });

  const elements =
    fetchStatus === 'loading' ? [...Array(4)].map((_, i) => <Skeleton key={i} />) : pizzas;

  return (
    <main>
      <nav>
        <Categories />
        <Sort />
      </nav>
      <section>
        <div className="title">
          <p>
            <span>All</span> pizzas
          </p>
        </div>
        <div className="pizzas">
          {fetchStatus === 'error' ? (
            <div className="error">
              <p class="title">Something went wrong... 😕</p>
              <p class="desc">Failed to load pizzas. Please try again later</p>
            </div>
          ) : (
            elements
          )}
        </div>
      </section>
      <Pagination count={count} limit={limit}></Pagination>
    </main>
  );
}

export default Main;

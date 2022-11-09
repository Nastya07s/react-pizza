import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { RootState, useAppDispatch } from '../../redux/store';
import { setCurrentPage, setFilters } from '../../redux/filter/slice';
import { SearchParams } from '../../redux/filter/types';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import { Status } from '../../redux/pizza/types';

import Categories from '../Categories';
import Pagination from '../Pagination';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import Sort from '../Sort';
import NotFound from '../NotFound';

const Main: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMounted = React.useRef(false);

  const { items, count, fetchStatus } = useSelector((state: RootState) => state.pizza);
  const { activeCategoryId, sort, searchValue, currentPage, limit } = useSelector(
    (state: RootState) => state.filter,
  );
  const dispatch = useAppDispatch();

  const DEFULT_SEARCH_PARAMS = `limit=${limit}&page=${currentPage}`;

  const getPizzas = React.useCallback(async () => {
    const preparedSearchParams =
      searchParams.toString().replace(/(&category=0)|(&title=$)/g, '') || DEFULT_SEARCH_PARAMS;

    dispatch(fetchPizzas(preparedSearchParams));
  }, [dispatch, searchParams, DEFULT_SEARCH_PARAMS]);

  React.useEffect(() => {
    if (isMounted.current) {
      const params: Record<string, string> = {
        limit: String(limit),
        page: String(currentPage),
        category: String(activeCategoryId),
        sortBy: sort.field,
        order: String(sort.order),
        title: searchValue || '',
      };

      setSearchParams(params);
    }

    isMounted.current = true;
  }, [setSearchParams, searchParams, activeCategoryId, sort, searchValue, currentPage, limit]);

  React.useEffect(() => {
    if (searchParams.has('sortBy')) {
      const objectSearchParams: SearchParams = Object.fromEntries([
        ...searchParams,
      ]) as unknown as SearchParams;

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
          {fetchStatus === Status.ERROR ? <NotFound></NotFound> : elements}
        </div>
      </section>
      <Pagination count={count} limit={limit}></Pagination>
    </main>
  );
};

export default Main;

import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../redux/filter/slice';
import { RootState } from '../../redux/store';

import styles from './Pagination.module.scss';

type PaginationProps = {
  count: number;
  limit: number;
};

type ChangePageEvent = {
  selected: number;
};

const Pagination: React.FC<PaginationProps> = ({ count, limit }) => {
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const dispatch = useDispatch();

  const handlePageClick = (event: ChangePageEvent) => {
    dispatch(setCurrentPage(event.selected));
  };

  const pageCount = Math.ceil(count / limit) < 1 ? 1 : Math.ceil(count / limit);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      forcePage={currentPage}
    />
  );
};

export default Pagination;

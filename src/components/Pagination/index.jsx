import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../redux/slices/filterSlice';

import styles from './Pagination.module.scss';

const Pagination = ({ count, limit }) => {
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(count / limit)}
      previousLabel="<"
      forcePage={currentPage}
    />
  );
};

export default Pagination;

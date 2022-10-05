import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ count, limit, setCurrentPage, currentPage }) => {
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
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

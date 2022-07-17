import React from "react";

import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const onPageClick = (id) => {
    setCurrentPage(id + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.control}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>
      <ul className={styles.list}>
        {[...new Array(3)].map((_, i) => (
          <li
            key={i}
            className={currentPage === i + 1 ? styles.active : ""}
            onClick={() => onPageClick(i)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <button
        className={styles.control}
        onClick={() => currentPage < 4 && setCurrentPage(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

import React from "react";
import "./Paginator.css";
import PaginatorPages from "./PaginatorPages";

const Paginator = ({
  currentPage,
  totalRecords,
  pgSize,
  onPageClick,
  numOfpageBtndsToDisplay
}) => {
  if (!totalRecords || totalRecords < pgSize) {
    return null;
  }

  const lastPage = Math.ceil(totalRecords / pgSize);

  return (
    <div className="paginator">
      <button disabled={currentPage === 1} onClick={() => onPageClick(1)}>
        &lt;&lt;
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageClick(currentPage - 1)}
      >
        &lt;
      </button>
      <PaginatorPages
        currentPage={currentPage}
        numOfpageBtndsToDisplay={numOfpageBtndsToDisplay}
        lastPage={lastPage}
        onPageClick={(page) => onPageClick(page)}
      />
      <span className="page-of-total">
        page {currentPage} of {lastPage}
      </span>
      <button
        disabled={currentPage === lastPage}
        onClick={() => onPageClick(currentPage + 1)}
      >
        &gt;
      </button>
      <button
        disabled={currentPage === lastPage}
        onClick={() => onPageClick(lastPage)}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Paginator;

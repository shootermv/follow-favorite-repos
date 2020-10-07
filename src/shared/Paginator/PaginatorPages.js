import React from 'react';
import PropTypes from 'prop-types';

const PaginatorPages = ({
  currentPage,
  lastPage,
  numOfpageBtndsToDisplay = 10,
  onPageClick,
}) => {
  const firstBtn =
    currentPage % numOfpageBtndsToDisplay
      ? parseInt(currentPage / numOfpageBtndsToDisplay, 10) *
          numOfpageBtndsToDisplay +
        1
      : currentPage - numOfpageBtndsToDisplay + 1;
  const lst = firstBtn + numOfpageBtndsToDisplay - 1;
  const lastBtn = lst > lastPage ? lastPage : lst;

  const buttons = new Array(lastBtn - firstBtn + 1);
  for (let i = firstBtn; i <= lastBtn; i++) {
    buttons[i - 1] = i;
  }
  return (
    <span className="page-buttons-list">
      {buttons.map((btn) => (
        <button
          key={btn}
          className={`${currentPage === btn ? 'current' : ''}`}
          onClick={() => onPageClick(btn)}
        >
          {btn}
        </button>
      ))}
    </span>
  );
};

PaginatorPages.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
  onPageClick: PropTypes.func,
  numOfpageBtndsToDisplay: PropTypes.number,
};

export default PaginatorPages;

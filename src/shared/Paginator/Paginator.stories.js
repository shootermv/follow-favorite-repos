import React from 'react';

import Paginator from './Paginator';

export default {
  title: 'Paginator',
  component: Paginator,
};

export const PaginatorStory = () => {
  const [pageNumber, setPageNumber] = React.useState(1);

  return <>
    <p>You are on page {pageNumber}</p>
    <Paginator
      currentPage={pageNumber}
      totalRecords={250}
      pgSize={25}
      onPageClick={setPageNumber}
      numOfpageBtndsToDisplay={3}
    />
  </>
};

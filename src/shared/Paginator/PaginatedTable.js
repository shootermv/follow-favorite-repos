import React, { useState } from "react";
import Paginator from "./Paginator";

const PaginatedTable = ({
  options: { data, numOfpageBtnsToDisplay = 5, pageSize = 10 },
  children,
  ...rest
}) => {
  const [pageNumber, setPageNumber] = useState(1);

  const recordsOfPage = data.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
  const totalRecords = data.length;

  return (
    <div className="table-container">
      <div className="paginator-wrap">
        <Paginator
          currentPage={pageNumber}
          totalRecords={totalRecords}
          pgSize={pageSize}
          onPageClick={(pageClicked) => setPageNumber(pageClicked)}
          numOfpageBtndsToDisplay={numOfpageBtnsToDisplay}
        />
      </div>
      {children({ data: recordsOfPage, ...rest })}
      <div className="paginator-wrap">
        <Paginator
          currentPage={pageNumber}
          totalRecords={totalRecords}
          onFirstClick={() => setPageNumber(1)}
          onLastClick={(lastPage) => setPageNumber(lastPage)}
          onBackClick={() => setPageNumber(pageNumber - 1)}
          onFwdClick={() => setPageNumber(pageNumber + 1)}
          pgSize={pageSize}
          onPageClick={(pageClicked) => setPageNumber(pageClicked)}
          numOfpageBtndsToDispay={numOfpageBtnsToDisplay}
        />
      </div>
    </div>
  );
};

export default PaginatedTable;

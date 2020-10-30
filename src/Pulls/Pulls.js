import React from "react";
import PaginatedTable from "../shared/Paginator";
import Spinner from "../shared/Spinner";
import { useFetch } from "../shared/Hooks";

import "../shared/Table.css";

const Pulls = ({ selectedRepo }) => {
  const url = `https://api.github.com/repos/${selectedRepo.url}/pulls?per_page=50`;
  const { response: pulls, loading: waiting, error } = useFetch(url);

  return (
    <div className="table-wrap">
      { waiting ? <Spinner />
        : error ? "Some error occurred"
          : pulls ? (
            <PaginatedTable options={{ data: pulls || [], pageSize: 10 }}>
            {({ data: pulls }) => (
              <>
                {error && <>Some error occurred</>}
                {waiting && <Spinner />}
                {!!pulls.length && (
                  <table data-test-id="table">
                    <thead>
                      <tr data-test-id="table-head-row">
                        <th>title</th>
                        <th>number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pulls.map(({ number, title }) => (
                        <tr key={number} data-test-id="table-row">
                          <td>
                            <div className="ellipsys-text table-text-withnumber">
                              {title}
                            </div>
                          </td>
                          <td>{number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </PaginatedTable>
          ) : (
            ""
          )}
    </div>
  );
};

export default Pulls;

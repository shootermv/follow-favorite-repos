import React from "react";
import PaginatedTable from "../shared/Paginator";
import Spinner from "../shared/Spinner";
import { useFetch } from "../shared/Hooks";

import "../shared/Table.css";

const Issues = ({ selectedRepo }) => {
  const url = `${process.env.REACT_APP_SERVER_URL}repos/${selectedRepo.url}/issues?per_page=50`;
  const { response: issues, loading: waiting, error } = useFetch(url);

  return (
    <div className="table-wrap">
      {waiting ? <Spinner />
        : error ? "Some error occurred"
          : issues ? (
            <PaginatedTable options={{ data: issues || [], pageSize: 10 }}>
              {({ data: issues }) => (
                <>
                  {error && <>Some error occurred</>}
                  {!!issues.length && (
                    <table>
                      <thead>
                        <tr>
                          <th>title</th>
                        </tr>
                      </thead>
                      <tbody>
                        {issues.map(({ number, title }) => (
                          <tr key={number}>
                            <td>
                              <div className="table-text">{title}</div>
                            </td>
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

export default Issues;

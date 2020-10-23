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
      <PaginatedTable options={{ data: pulls || [], pageSize: 10 }}>
        {({ data: pulls }) => (
          <>
            {error && <>Some error occurred</>}
            {waiting && <Spinner />}
            {!!pulls.length && (
              <table>
                <thead>
                  <tr>
                    <th>title</th>
                    <th>number</th>
                  </tr>
                </thead>
                <tbody>
                  {pulls.map(({ number, title }) => (
                    <tr key={number}>
                      <td>
                        <div className="table-text">{title}</div>
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
    </div>
  );
};

export default Pulls;

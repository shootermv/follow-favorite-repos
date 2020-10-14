import React from "react";
import PaginatedTable from "../shared/Paginator";
import Spinner from "../shared/Spinner";
import useFetch from "../shared/Hooks";
const Pulls = ({ selectedRepo }) => {
  const url = `https://api.github.com/repos/${selectedRepo.url}/pulls?per_page=50`;
  const { response: pulls, loading: waiting, error } = useFetch(url);

  return (
    <div className="table-wrap">
      <PaginatedTable options={{ data: pulls || [], pageSize: 10 }}>
        {({ data: pulls }) => {
          if (error) {
            return <>Some error occurred</>;
          }          
          if (waiting) {
            return <Spinner />;
          }
          return (
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
                    <td>{title.slice(0, 50)}</td>
                    <td>{number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </PaginatedTable>
    </div>
  );
};

export default Pulls;

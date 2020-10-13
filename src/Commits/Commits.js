import React from "react";
import PaginatedTable from "../shared/Paginator";
import Spinner from "../shared/Spinner";
import useFetch from "../shared/Hooks";
import { Link } from "react-router-dom";

import './Commits.css';

const Commits = ({ selectedRepo }) => {
  const url = `https://api.github.com/repos/${selectedRepo.url}/commits?per_page=50`;
  const { response: commits, loading: waiting, error } = useFetch(url);

  return (
    <div className="table-wrap">
      <h2>commits: {commits?.length}</h2>
      <PaginatedTable options={{ data: commits || [], pageSize: 10 }}>
        {({ data: commits }) => {
          if (error) {
            return <>Some error occurred</>;
          }          
          if (waiting) {
            return <Spinner />;
          }
          return (
            <table className="table-table">
              <thead>
                <tr>
                  <th>message</th>
                  <th>date</th>
                  <th className="table-author">author</th>
                </tr>
              </thead>
              <tbody>
                {commits
                  .filter(({ author }) => author)
                  .map(
                    ({
                      sha,
                      author: { login },
                      commit: {
                        message,
                        author: { name, email, date }
                      }
                    }) => (
                      <tr key={sha}>
                        <td><div className="table-text">{message}</div></td>
                        <td className="table-date">{new Date(date).toLocaleDateString("en-US", {hour: '2-digit', minute:'2-digit'})}</td>
                        <td className="table-author">
                          <Link to={`/author/${login}/${email}`}>{name}</Link>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          );
        }}
      </PaginatedTable>
    </div>
  );
};

export default Commits;

import React from 'react';
import PaginatedTable from '../shared/Paginator';
import Spinner from '../shared/Spinner';
import useFetch from '../shared/Hooks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Commits = ({ selectedRepo }) => {
  const url = `https://api.github.com/repos/${selectedRepo.url}/commits?per_page=50`;
  const { response: commits, loading: waiting, error } = useFetch(url, {}, [
    selectedRepo,
  ]);

  return (
    <div>
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
            <table>
              <thead>
                <tr>
                  <th>message</th>
                  <th>author</th>
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
                        author: { name, email },
                      },
                    }) => (
                      <tr key={sha}>
                        <td>{message.slice(0, 50)}</td>
                        <td>
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

Commits.propTypes = {
  selectedRepo: PropTypes.object.isRequired,
};

export default Commits;

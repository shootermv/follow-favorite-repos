import React from 'react';

import PaginatedTable from './PaginatedTable';

export default {
  title: 'PaginatedTable',
  component: PaginatedTable,
};

export const PaginatedTableStory = () => {
  const source =
    new Array(250).fill(0).map((_, i) => ({ id: i, value: `Item ${i}` }));

  return <PaginatedTable options={{ data: source, pageSize: 10 }}>
    {({ data }) => {
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, value }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }}
  </PaginatedTable>
};

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RepoContext = createContext();

const RepoContextProvider = ({ children }) => {
  const initialRepos = [
    { name: 'react', url: 'facebook/react', commits: [], idx: 0 },
    { name: 'angular', url: 'angular/angular', commits: [], idx: 1 },
    { name: 'vue', url: 'vuejs/vue', commits: [], idx: 2 },
  ];
  const [currentRepo, setCurrentRepo] = useState(initialRepos[0]);
  return (
    <RepoContext.Provider value={{ currentRepo, setCurrentRepo, initialRepos }}>
      {children}
    </RepoContext.Provider>
  );
};

RepoContextProvider.propTypes = {
  children: PropTypes.array,
};

export default RepoContextProvider;

import React, { useContext } from "react";
import { Tabs, TabPanel, Tab } from "../../shared/Tabs";
import Commits from "../../Commits";
import Issues from "../../Issues";
import Pulls from "../../Pulls";

import { RepoContext } from "../../Contexts/RepoContext";

export default function HomePage() {
  const {
    currentRepo: selectedRepo,
    setCurrentRepo: setSelectedRepo,
    initialRepos
  } = useContext(RepoContext);
  const tabs = [
    { tabName: "Commits", component: Commits },
    { tabName: "Issues", component: Issues },
    { tabName: "Pull Requests", component: Pulls }
  ];

  return (
    <div className="App">
      <h1>
        Whats new at
        <select
          value={selectedRepo.idx}
          onChange={(event) =>
            setSelectedRepo(initialRepos[event.target.value])
          }
        >
          {initialRepos.map((repo, idx) => (
            <option key={repo.name} value={idx}>
              {repo.name}
            </option>
          ))}
        </select>
        repo?
      </h1>
      <Tabs>
        {tabs.map(({ tabName }) => (
          <Tab key={tabName}>{tabName}</Tab>
        ))}

        {tabs.map(({ component: My, tabName }) => (
          <TabPanel key={`panel-${tabName}`}>
            <My selectedRepo={selectedRepo} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

import React, { useState } from "react";
import { Tabs, TabPanel, Tab } from "../../shared/Tabs";
import Commits from "../../Commits";
import Issues from "../../Issues";
import Pulls from "../../Pulls";
import { Link } from "react-router-dom";

export default function HomePage() {
  const initialRepos = [
    { name: "react", url: "facebook/react", commits: [] },
    { name: "angular", url: "angular/angular", commits: [] },
    { name: "vue", url: "vuejs/vue", commits: [] }
  ];
  const [selectedRepo, setSelectedRepo] = useState(initialRepos[0]);
  const tabs = [{ tabName: "Commits", component: Commits}, {tabName: "Issues", component: Issues}, {tabName: "Pull Requests", component: Pulls}];
  console.log("home page rendering");
  return (
    <div className="App">
      <h1>
        Whats new at
        <select
          value={initialRepos.findIndex(r => selectedRepo.name === r.name)}
          onChange={(event) => setSelectedRepo(initialRepos[event.target.value])}
        >
          {initialRepos.map((repo, idx) => (
            <option key={repo.name} value={idx}>
              {repo.name}
            </option>
          ))}
        </select>
        repo?
        <Link to="/guys">guys im following</Link>
      </h1>
      <Tabs>
        {tabs.map(({tabName}) => (<Tab key={tabName}>{tabName}</Tab>))}

        {tabs.map(({component: My}) => <TabPanel>
          <My selectedRepo={selectedRepo}/>
        </TabPanel>)}
      </Tabs>
    </div>
  );
}

import React from "react";
import "./styles.css";
import TopBar from "./Layout/TopBar";
/* pages */
import HomePage from "./Pages/HomePage";
import AuthorPage from "./Pages/AuthorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoolGuysPage from "./Pages/CoolGuysPage";
import RepoContextProvider from "./Contexts/RepoContext";

export default function App() {
  return (
    <RepoContextProvider>
      <Router>
	    <TopBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/author/:authorName/:email">
            <AuthorPage />
          </Route>
          <Route exact path="/guys">
            <CoolGuysPage />
          </Route>
        </Switch>
      </Router>
    </RepoContextProvider>
  );
}

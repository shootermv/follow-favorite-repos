import React from "react";
import "./styles.css";
import HomePage from "./Pages/HomePage";
import AuthorPage from "./Pages/AuthorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoolGuysPage from "./Pages/CoolGuysPage";

export default function App() {
  return (
    <Router>
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
  );
}

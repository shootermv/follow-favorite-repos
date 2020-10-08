import React from "react";
import "./TopBar.css";
import { NavLink } from "react-router-dom";
export default function TopBar() {
  return (
    <header className="topBar">
      <nav>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink exact to="/guys" activeClassName="selected">
          Guys
        </NavLink>
      </nav>
    </header>
  );
}

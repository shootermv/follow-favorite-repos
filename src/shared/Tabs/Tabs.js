import React, { useState, Children, isValidElement, cloneElement } from "react";

import "./Tabs.css";
function flat(RR) {
  return RR.reduce((acc, item) => {
    return Array.isArray(item) ? [...acc, ...flat(item)] : [...acc, item];
  }, []);
}
const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  const panelsWithProps = Children.map(
    flat(children).filter((comp) => {
      return comp?.type?.name === "TabPanel";
    }),
    (child, tabindex) => {
      const props = { active, tabindex };
      if (isValidElement(child)) {
        return cloneElement(child, props);
      }
      return child;
    }
  );
  const titlesWithProps = Children.map(
    flat(children).filter((comp) => {
      return comp?.type?.name === "Tab";
    }),
    (child, tabindex) => {
      const props = { active, setActive, tabindex };
      if (isValidElement(child)) {
        return cloneElement(child, props);
      }
      return child;
    }
  );
  return (
    <div className="tabs">
      <header>
        <ul>{titlesWithProps}</ul>
      </header>
      <main>
        <ul>{panelsWithProps}</ul>
      </main>
    </div>
  );
};

export default Tabs;

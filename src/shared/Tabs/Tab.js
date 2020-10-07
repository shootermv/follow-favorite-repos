import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children, active, tabindex, setActive }) => {
  return (
    <li onClick={() => setActive(tabindex)}>
      <button className={active === tabindex ? 'active' : ''}>
        {children}
      </button>
    </li>
  );
};

Tab.propTypes = {
  children: PropTypes.array,
  active: PropTypes.string,
  tabindex: PropTypes.number,
  setActive: PropTypes.func,
};

export default Tab;

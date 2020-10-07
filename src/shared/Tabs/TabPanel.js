import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({ children, active, tabindex }) => {
  if (tabindex !== active) {
    return null;
  }
  return <>{children}</>;
};

TabPanel.propTypes = {
  children: PropTypes.array,
  active: PropTypes.string,
  tabindex: PropTypes.number,
};

export default TabPanel;

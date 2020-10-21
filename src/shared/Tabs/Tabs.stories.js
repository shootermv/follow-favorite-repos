import React from 'react';


import Tab from './Tab';
import TabPanel from './TabPanel';
import Tabs from './Tabs';

export default {
  title: 'Tabs - static',
  component: Tabs,
};

export const StaticTabs = () => (
  <Tabs>
    <Tab key="tab1">Tab 1</Tab>
    <Tab key="tab2">Tab 2</Tab>

    <TabPanel key="panel-tab1">
      <p>Tab 1 content</p>
    </TabPanel>
    <TabPanel key="panel-tab2">
      <p>Tab 2 content</p>
    </TabPanel>
  </Tabs>
);

export const DynamicTabs = () => {

  const tabs = [
    { tabName: "tab 1", component: () => <>123</> },
    { tabName: "tab 2", component: () => <>456</> },
    { tabName: "tab 3", component: () => <>789</> }
  ];

  return (
      <Tabs>
        {tabs.map(({ tabName }) => (
          <Tab key={tabName}>{tabName}</Tab>
        ))}

        {tabs.map(({ component: My, tabName }) => (
          <TabPanel key={`panel-${tabName}`}>
            <My/>
          </TabPanel>
        ))}
      </Tabs>
);
}
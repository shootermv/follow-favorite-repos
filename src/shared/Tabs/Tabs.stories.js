import React from 'react';

import Tab from './Tab';
import TabPanel from './TabPanel';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const TabsStory = () => (
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

import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const App = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default App;
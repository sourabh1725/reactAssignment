import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

class App extends React.PureComponent {
  state = {
    activeTab: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({ activeTab: newValue });
  };

  renderTabs = () => {
    const { activeTab } = this.state;
    return (
      <Tabs
        value={activeTab}
        onChange={this.handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Screen 1" />
        <Tab label="Screen 2" />
      </Tabs>
    );
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Header renderTabs={this.renderTabs} />
        <Content activeTab={activeTab} />
      </div>
    );
  }
}

export default App;

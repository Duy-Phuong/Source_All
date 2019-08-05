import React, { Component } from "react";
import "./App.css";
import "tachyons";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    // console.log(event);
    // console.log(event.target.value);
    const filtersRobot = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filtersRobot);
  };

  render() {
    return (
      <div className="tc">
        <h1>Robot friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;

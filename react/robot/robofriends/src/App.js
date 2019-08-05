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

  onSearchChage(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="tc">
        <h1>Robot friends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;

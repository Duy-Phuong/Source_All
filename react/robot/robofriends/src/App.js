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
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(user => {
        this.setState({ robots: user });
      });
  }

  onSearchChange = event => {
    // console.log(event);
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filtersRobot = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filtersRobot);
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robot friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filtersRobot} />
          {
            // sau khi cập nhật state
            // <CardList robots={this.state.robots} />
          }
        </div>
      );
    }
  }
}

export default App;

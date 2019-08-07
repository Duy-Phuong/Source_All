import React, { Component } from "react";
import "./App.css";
import "tachyons";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    console.log(this.props.store);
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
    const { robots, searchfield } = this.state;
    const filtersRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log(filtersRobot);
    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robot friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filtersRobot} />
          </Scroll>

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

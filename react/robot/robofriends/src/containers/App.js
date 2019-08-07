import React, { Component } from "react";
import "./App.css";
import "tachyons";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions";
// import { setSearchField, requestRobots } from "../actions";

import { connect } from "react-redux";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => {
  return {
    searchField: state.searchField
    // robots: state.requestRobots.robots,
    // isPending: state.requestRobots.isPending
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
    // onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   robots: [],
    //   searchfield: ""
    // };

    // step connect
    this.state = {
      robots: []
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

  // step connect will remove
  // onSearchChange = event => {
  //   // console.log(event);
  //   // console.log(event.target.value);
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    // const { robots, searchfield } = this.state;

    // step connect
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filtersRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log(filtersRobot);
    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robot friends</h1>
          {
            // step connect
            // <SearchBox searchChange={this.onSearchChange} />
          }
          <SearchBox searchChange={onSearchChange} />
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

// export default App;

// step 7
// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

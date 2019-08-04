import React, { Component } from "react";
import "./App.css";
import "tachyons";

class Hello extends Component {
  render() {
    return (
      <div className="tc i f1">
        <p>
          Hello msg <code>{this.props.gretting}</code>
        </p>
      </div>
    );
  }
}

export default Hello;

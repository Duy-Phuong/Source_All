import React, { Component } from "react";
import "./App.css";
import "tachyons";

// class Hello extends Component {
//   render() {
//     return (
//       <div className="tc i f1">
//         <p>
//           Hello msg <code>{this.props.gretting}</code>
//         </p>
//       </div>
//     );
//   }
// }

const Hello = props => {
  return (
    <div className="tc i f1">
      <p>
        Hello msg <code>{props.gretting}</code>
      </p>
    </div>
  );
};

export default Hello;

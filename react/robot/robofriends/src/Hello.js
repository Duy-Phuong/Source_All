import React, { Component } from "react";
import "./containers/App";
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

// bỏ từ khóa this vì k là object
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
// import Hello from "./Hello";
// import Card from "./Card";
// import CardList from "./CardList";

import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";

// ReactDOM.render(<App />, document.getElementById('root'));

// step 2 start
// ReactDOM.render(
//   <Hello greeting={"hello" + "my friends"} />,
//   document.getElementById("root")
// );
// step 2 start end

// step 3 start
// ReactDOM.render(
//   <div>
//     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//   </div>,
//   document.getElementById("root")
// );
// step 3 start end

// step 4 start
// ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
// step 4 end

// step 5 start
ReactDOM.render(<App />, document.getElementById("root"));
// step 5 end

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

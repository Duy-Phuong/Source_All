import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Hello from "./Hello";
import Card from "./Card";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));

// step 2 start
// ReactDOM.render(
//   <Hello greeting={"hello" + "my friends"} />,
//   document.getElementById("root")
// );
// step 2 start end

// step 3 start
ReactDOM.render(
  <div>
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById("root")
);
// step 3 start end

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

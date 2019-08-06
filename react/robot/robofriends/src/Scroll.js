import React from "react";
import "tachyons";

const Scroll = props => {
  console.log(props.children);
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

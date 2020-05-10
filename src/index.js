import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h2>hello world</h2>,
  document.getElementById("root"));


ReactDOM.render( /*#__PURE__*/React.createElement("h2", null, "hello world"), document.getElementById("root"));


  var h2 =document.createElement("h2");
  h2.innerHTML = "thapa";
  document.getElementById("root").appendChild(h2);

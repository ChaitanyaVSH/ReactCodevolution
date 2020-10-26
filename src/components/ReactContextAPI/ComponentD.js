import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentD extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is the Component D</h1>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentD;

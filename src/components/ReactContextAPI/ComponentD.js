import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentD extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is the Component D</h1>
        <h2>This is the context: {this.context}</h2>
        <ComponentF />
      </div>
    );
  }
}
ComponentD.contextType = UserContext;
export default ComponentD;

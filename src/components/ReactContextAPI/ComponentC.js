import React, { Component } from "react";
import ComponentD from "./ComponentD";

class ComponentC extends Component {
  render() {
    return (
      <div className="container">
        <strong>Context steps.</strong>
        <ol>
          <li>Create a context</li>
          <li>Provide a context value</li>
          <li>Consume the context value</li>
        </ol>
        <h1>This is the Component C</h1>
        <ComponentD />
      </div>
    );
  }
}

export default ComponentC;

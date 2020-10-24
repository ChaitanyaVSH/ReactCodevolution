import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalDemo extends Component {
  state = {};
  render() {
    return ReactDOM.createPortal(
      <div className="container">
        <hr />
        <h1>React Portal component</h1>
      </div>,
      document.getElementById("portal-root")
    );
  }
}

export default PortalDemo;

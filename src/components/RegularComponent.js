import React, { Component } from "react";
import "../components/globalStyles.css";

export default class RegularComponent extends Component {
  render() {
    console.log("Regular Component");
    return (
      <div className="container">
        <h1>Regular Component name: {this.props.name}</h1>
      </div>
    );
  }
}

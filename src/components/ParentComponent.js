import React, { Component } from "react";
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";
import MemoComp from "./MemoComponent";

export default class ParentComponent extends Component {
  state = {
    name: "Chaitu Maverick",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Chaitu Maverick",
      });
    }, 2000);
  }
  render() {
    console.log("Parent component");
    return (
      <div className="container">
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegularComponent name={this.state.name} /> */}
      </div>
    );
  }
}

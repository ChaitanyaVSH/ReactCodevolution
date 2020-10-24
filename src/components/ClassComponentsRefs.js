import React, { Component } from "react";

class ClassComponentsRefs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  reachHere() {
    // alert("Action reached");
  }
  render() {
    return (
      <div className="container">
        <hr />
        <h1>Refs for Class Components</h1>
        <label>Username: </label>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default ClassComponentsRefs;

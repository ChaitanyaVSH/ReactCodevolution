import React, { Component } from "react";

/**
 *  React Refs: 1. https://youtu.be/FXa9mMTKOu8?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=326
 *              2. CallBack Refs: https://youtu.be/FXa9mMTKOu8?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=484
 */
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.cbRef.focus();
    console.log(this.inputRef);
  }

  onClick = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div className="container">
        <hr />
        <h1>Refs for individual elements inside a component.</h1>
        <label>Username: </label>
        <input type="text" name="username" ref={this.inputRef} />
        <br />
        <label>Username: </label>
        <input type="text" name="username2" ref={this.setCbRef} />
        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;

import React, { Component } from "react";
import RefForwarding from "./RefForwarding";

/**
 * Tutorial: https://www.youtube.com/watch?v=RLWniwmfdq4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=30
 */
class RefForwardingParent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.componentRef = React.createRef();
  }

  focusHandler = () => {
    this.componentRef.current.focus();
  };
  render() {
    return (
      <div className="container">
        <RefForwarding ref={this.componentRef} />
        <p>Steps for forwarding the React Refs.</p>
        <ol>
          <li>Create a ref in the Parent component</li>
          <li>Attach the ref to the child component</li>
          <li>Use arrow based child functional components</li>
          <li>
            Use React.forwardRef method that taked the component as an argument
          </li>
        </ol>
        <button onClick={this.focusHandler}>Forward Ref: Focus Input</button>
      </div>
    );
  }
}

export default RefForwardingParent;

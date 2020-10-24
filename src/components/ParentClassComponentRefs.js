import React, { Component } from "react";
import ClassComponentsRefs from "./ClassComponentsRefs";

class ParentClassComponentRefs extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  focusHandler = () => {
    this.componentRef.current.focusInput();
    this.componentRef.current.reachHere();
  };
  render() {
    return (
      <div className="container">
        <ClassComponentsRefs ref={this.componentRef} />
        <p>Steps for creating a component ref.</p>
        <ol>
          <li>Create an element ref in the child component</li>
          <li>Create a local ref in the parent component</li>
          <li>
            Create a hanlder in the parent component that calls the methods on
            the child component which inreturn hits the element refs
          </li>
          <li>
            These kind of Refs cannot be attached to a Functional Component
          </li>
        </ol>
        <button onClick={this.focusHandler}>
          Click to focus on the Child component.
        </button>
      </div>
    );
  }
}

export default ParentClassComponentRefs;

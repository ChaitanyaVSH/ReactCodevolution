import React, { PureComponent } from "react";
import "../components/globalStyles.css";

export class PureComp extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    //Reference: https://reactjs.org/docs/react-component.html#shouldcomponentupdate
    console.log("Next Props: " + nextProps);
    console.log("Next State: " + nextState);
    console.log("####################");
    console.log("this props: " + this.props);
    console.log("this state: " + this.state);
  }
  render() {
    console.log("Pure Component");
    return (
      <div className="container">
        <h1>Pure Component name: {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComp;

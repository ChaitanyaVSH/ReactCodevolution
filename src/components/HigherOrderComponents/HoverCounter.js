import React, { Component } from "react";
import updatedComponent from "./WithCounter";

export class HoverCounter extends Component {
  //   state = {
  //     counter: 0,
  //   };
  //   clickHandler = () => {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   };
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.clickHandler}>
          Hovered on me for by state {this.props.state.counter} times by{" "}
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default updatedComponent(HoverCounter);

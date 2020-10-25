import React, { Component } from "react";
import updatedComponent from "./WithCounter";

export class ClickCounter extends Component {
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
        <button onClick={this.props.clickHandler}>
          Clicked by state {this.props.state.counter} times by {this.props.name}
        </button>
      </div>
    );
  }
}

export default updatedComponent(ClickCounter, 5);

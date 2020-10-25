import React, { Component } from "react";

class ClickCounter2 extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     counter: 0,
  //   };
  // }

  // clickHandler = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default ClickCounter2;

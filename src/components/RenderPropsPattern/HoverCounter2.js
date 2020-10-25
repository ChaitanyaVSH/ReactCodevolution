import React, { Component } from "react";

export class HoverCounter2 extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       counter: 0,
  //     };
  //   }

  //   clickHandler = () => {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   };
  render() {
    return (
      <div>
        <h2 onMouseOver={this.clickHandler}>
          Hovered {this.state.counter} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter2;

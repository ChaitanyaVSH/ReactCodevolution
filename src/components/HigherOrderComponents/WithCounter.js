import React, { Component } from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      counter: 0,
    };
    clickHandlerHOC = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          name="Chaitu Maverick"
          clickHandler={this.clickHandlerHOC}
          state={this.state}
        />
      );
    }
  }

  return NewComponent;
};

export default updatedComponent;

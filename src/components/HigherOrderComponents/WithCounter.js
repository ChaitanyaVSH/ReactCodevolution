import React from "react";

/**
 * Tutorial: https://youtu.be/rsBQj6X7UK8?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=752
 */
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
      console.log(this.props);
      return (
        <OriginalComponent
          clickHandler={this.clickHandlerHOC}
          state={this.state}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default updatedComponent;

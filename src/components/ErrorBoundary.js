import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(Error, ErrorInformation) {
    console.log(Error);
    console.log(ErrorInformation);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1>Error Occurred, Team is notified about this.</h1>

          <strong>
            Error Boundaries can only catch errors in the lifeCylce methods, but
            not in the EventHandlers. To catch the errors in the Event Handlers,
            use the regular try and catch.
          </strong>
          <p>Steps to create an Error Boundary.</p>
          <ol>
            <li>Create an Error Boundary Class Component</li>
            <li>Nest all the children components inside an error boundary</li>
            <li>Create and Render a fallback UI</li>
            <li>
              Based on the usecase we can nest all the components inside a
              single error boudnary or use individual error boundaries to
              individual components.
            </li>
          </ol>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;

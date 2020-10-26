import React, { Component } from "react";
import User from "../RenderPropsPattern/User";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <div className="container">
              <h1>This is the Component F</h1>
              <h2>UserName is: {userName}</h2>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

import React, { Component } from "react";
import FragmentDemo from "./components/FragmentDemo";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <FragmentDemo />
        <FragmentDemo />
      </div>
    );
  }
}

export default App;

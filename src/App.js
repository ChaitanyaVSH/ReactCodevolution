import React, { Component } from "react";
import FragmentDemo from "./components/FragmentDemo";
import PureComp from "./components/PureComponent";
import RegularComponent from "./components/RegularComponent";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import ParentClassComponentRefs from "./components/ParentClassComponentRefs";
import RefForwardingParent from "./components/RefForwardingParent";
import PortalDemo from "./components/PortalDemo";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <FragmentDemo />
        {/* <PureComp />
        <RegularComponent />
        <ParentComponent /> */}
        <RefsDemo />
        <ParentClassComponentRefs />
        <RefForwardingParent />
        <PortalDemo />
      </div>
    );
  }
}

export default App;

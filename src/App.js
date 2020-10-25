import React, { Component } from "react";
import FragmentDemo from "./components/FragmentDemo";
import PureComp from "./components/PureComponent";
import RegularComponent from "./components/RegularComponent";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import ParentClassComponentRefs from "./components/ParentClassComponentRefs";
import RefForwardingParent from "./components/RefForwardingParent";
import PortalDemo from "./components/PortalDemo";
import HeroErrorBoundaryDemo from "./components/HeroErrorBoundaryDemo";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* <FragmentDemo />
        <PureComp />
        <RegularComponent />
        <ParentComponent />
        <RefsDemo />
        <ParentClassComponentRefs />
        <RefForwardingParent />
        <PortalDemo /> */}
        <ErrorBoundary>
          <HeroErrorBoundaryDemo heroName="joker" />
          <HeroErrorBoundaryDemo heroName="Chaitu Maverick" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

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
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import ClickCounter2 from "./components/RenderPropsPattern/ClickCounter2";
import HoverCounter2 from "./components/RenderPropsPattern/HoverCounter2";
import User from "./components/RenderPropsPattern/User";
import ComponentC from "./components/ReactContextAPI/ComponentC";
import { UserProvider } from "./components/ReactContextAPI/UserContext";

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
          <HeroErrorBoundaryDemo heroName="jokerr" />
          <HeroErrorBoundaryDemo heroName="Chaitu Maverick" />
        </ErrorBoundary>

        {/* React Higher Order Components pattern */}
        <ClickCounter name="Chaitu Maverick" />
        <HoverCounter name="Chaitu Maverick" />

        {/* React Render Props pattern */}
        {/* <ClickCounter2 />
        <HoverCounter2 />
        <User name={(isLoggedIn) => (isLoggedIn ? "Chaitanya" : "Guest")} /> */}

        {/* React Context API */}

        <ComponentC />
      </div>
    );
  }
}

export default App;

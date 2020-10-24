import React from "react";
import "./FragmentDemoStyles.css";

/**
 *  *   Tutorial: Codevolution: 25
 *  *   Fragments cannot be styled
 */

function FragmentDemo() {
  return (
    <React.Fragment className="container">
      <h1>This is the Fragment Component</h1>
      <ul>
        <li>
          Fragments are used for grouping HTML elements without adding
          additional nodes.
        </li>
        <li>
          Fragments cannot be styled, they just take key as the parameter{" "}
          <a href="https://stackoverflow.com/questions/57499488/styled-components-react-style-on-fragment-element#:~:text=If%20you%20need%20to%20style,they%20can't%20be%20stylized.&text=key%20is%20the%20only%20attribute%20that%20can%20be%20passed%20to%20Fragment%20.">
            Find More
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default FragmentDemo;

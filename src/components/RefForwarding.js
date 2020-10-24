import React from "react";

// class RefForwarding extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="container">
//         <hr />
//         <h1>Refs forwarding</h1>
//         <label>Username: </label>
//         <input type="text" name="input" />
//       </div>
//     );
//   }
// }

const RefForwarding = React.forwardRef((props, ref) => {
  return (
    <div className="container">
      <hr />
      <h1>Refs forwarding</h1>
      <label>Username: </label>
      <input type="text" name="input" ref={ref} />
    </div>
  );
});

export default RefForwarding;

import React from "react";
import ReactDOM from "react-dom";

import Common from "./common";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        This is App A
        <Common />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

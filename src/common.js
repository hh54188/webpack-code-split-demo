import React from "react";
import $ from "jquery";

export default class Common extends React.Component {
  constructor(props) {
    super(props);
  }
  loadApp(appName) {
    $.getScript(`/app_${appName}.bundle.js`);
  }
  render() {
    return (
      <div>
        <button onClick={this.loadApp.bind(this, "a")}>Load App A</button>
        <button onClick={this.loadApp.bind(this, "b")}>Load App B</button>
        <button onClick={this.loadApp.bind(this, "c")}>Load App C</button>
      </div>
    );
  }
}

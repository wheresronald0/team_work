import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./hello";
import hi from "./hi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Hi />
      </div>
    );
  }
}

export default App;

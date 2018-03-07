import React, { Component } from "react";
import "./App.css";

//import connect from react-redux

//import need actions for dispatching

class App extends Component {
  render() {
    return (
      <div>
        <h1>color picker</h1>
        <section className="square" />
        <input type="color" />
      </div>
    );
  }
}

//mapStateToProps

//mapDispatchToProps

//wrap the app in connect

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import { changeColor } from "./store";
import "./App.css";

//import connect from react-redux

//import need actions for dispatching

class App extends Component {
  render() {
    return (
      <div>
        <h1>color picker</h1>
        <section className="square"
                 style={{backgroundColor: this.props.color}}
                  />
        <input type="color"
               onChange={(e) => this.props.changeColor(e.target.value)} />
      </div>
    );
  }
}

//mapStateToProps //this should be a function, but will work with null
const mapStateToProps = state => {
  return {
    color: state.color
  };
};
//mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    changeColor: color => dispatch(changeColor(color))
  };
};
//wrap the app in connect

export default connect(mapStateToProps, mapDispatchToProps)(App);

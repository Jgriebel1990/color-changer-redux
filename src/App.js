import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
     <div>
       <h1>color picker</h1>
       <section className='square'></section>
       <input type="color"
              name="" 
              id=""
              />
     </div>
    );
  }
}

export default App;

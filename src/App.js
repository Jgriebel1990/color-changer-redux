import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

const initialState = '#FFFFFF';

const colorReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case 'CHANGE':
      return ''
  }
}


class App extends Component {
  render() {
    return (
     <div>
       <h1>color picker</h1>
       <section className='square'
                onClick={() => store.dispatch({type: 'CHANGE'})}></section>
       <input type="color"
              name="" 
              id=""
              />
     </div>
    );
  }
}

export default App;

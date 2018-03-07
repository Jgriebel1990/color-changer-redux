import { createStore } from 'redux';
import colorReducer from './App'
//types
const CHANGE_COLOR = 'CHANGE_COLOR';
//actions
const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        value: color
    }
})
//initial state
const initialState = {
    color: '#ffffff'
}
//reducer
const reducer = (state=initialState, action) => {
    return state;
}
//create store
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //dev tools need more args
//export store
export default store;
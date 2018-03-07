import { createStore } from 'redux';
import colorReducer from './app'

const store = createStore(
    colorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store;
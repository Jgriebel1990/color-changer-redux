import { createStore } from "redux";
//types
const CHANGE_COLOR = "CHANGE_COLOR";
//actions
export const changeColor = color => ({
  type: CHANGE_COLOR,
  payload: {
    value: color
  }
});
//initial state
const initialState = {
  color: '#ffffff'
};
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload.value
      };
    default:
      return state;
  }
};
//create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //dev tools need more args
//export store
export default store;

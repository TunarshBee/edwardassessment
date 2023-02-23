import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk  from 'redux-thunk';
import { filmReducer } from "../reducers/filmReducer";

const reducer = combineReducers({
      films: filmReducer
})
let initialState = {};
const middleWare = [thunk]
const store = createStore(
  reducer,
  initialState,
  combineReducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store
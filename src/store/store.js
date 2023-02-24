import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk  from 'redux-thunk';
import { filmDetailsReducer, filmReducer } from "../reducers/filmReducer";

const reducer = combineReducers({
      films: filmReducer,
      filmDetails: filmDetailsReducer
})
let initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider, transitions, positions } from "react-alert";
import store from './store/store';

const options = {
  transition: transitions.SCALE,
  position: positions.TOP_RIGHT,
  timeout: 5000
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options} >
      <Router>
        <App />
      </Router>
    </AlertProvider>
  </Provider>
);


import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/scss/app.scss';

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
import "./styles/base.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./Router/Router";
import "./lib/API";
(async () => {
  ReactDOM.render(<AppRouter />, document.getElementById("app"));
})();

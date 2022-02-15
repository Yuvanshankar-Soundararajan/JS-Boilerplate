import React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RoutePage } from "./route/route-pages";
import reportWebVitals from "./reportWebVitals";
import { CommonContext } from "./components/common/context/context";

ReactDOM.render(
  <React.StrictMode>
    <CommonContext.Provider>
      <RoutePage />
    </CommonContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

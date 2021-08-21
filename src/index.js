import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./pages/home.jsx";

import "./index.scss";

const App = () => {
    return <HomePage />;
}

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
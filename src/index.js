import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => {
    return <div>test</div>;
}

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
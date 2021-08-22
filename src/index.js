import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import ProductsPage from "./pages/products.jsx";
import SearchPage from "./pages/search.jsx";

import "./index.scss";

const App = () => {
    return <Router>
        <Switch>
            <Route exact path="/" component={ProductsPage} />
        </Switch>
    </Router>
};

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import HomePage from "./pages/home.jsx";
import ProductsPage from "./pages/products.jsx";
import SearchPage from "./pages/search.jsx";

import "./index.scss";

const App = () => {
    return (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/search" component={SearchPage} />
            </Switch>
        </Router>
    </Provider> );
};

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
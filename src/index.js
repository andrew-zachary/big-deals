import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import HomePage from "./pages/home.jsx";
import ProductsPage from "./pages/products.jsx";
import SingleProduct from "./pages/single-product.jsx";
import SearchPage from "./pages/search.jsx";

import "./index.scss";

const App = () => {
    return (
    <Provider store={store}>
        <Router>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/search">search</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductsPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/products/:id" component={SingleProduct} />
            </Switch>
        </Router>
    </Provider> );
};

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
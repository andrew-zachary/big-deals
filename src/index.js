import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import AppHeader from "./parts/app-header.jsx";
import AppFooter from "./parts/app-footer.jsx";
import AppPage from "./parts/app-page.jsx";

import "./index.scss";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <AppPage />
                <AppFooter />
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("big-deals-app"));
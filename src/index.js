import "regenerator-runtime/runtime";
import "core-js/stable";
import "./utils/i18next";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import AppHeader from "./parts/app-header.jsx";
import AppFooter from "./parts/app-footer.jsx";
import AppPage from "./parts/app-page.jsx";
import AppError from "./parts/app-error.jsx";
import AppSpinner from "./parts/app-spinner.jsx";
import AppAuth from "./parts/app-auth.jsx";

import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <AppPage />
                <AppFooter />
                <AppError />
            </Router>
            <AppSpinner />
            <AppAuth />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("bd-app"));
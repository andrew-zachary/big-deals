import "regenerator-runtime/runtime";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import HomePage from './pages/home.jsx';
import AdminPage from './pages/admin.jsx';

//layout
import MainLayout from "./layout/main.jsx";

import './index.scss';

ReactDOM.render(<Router>
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Route>
    </Routes>
</Router>, document.getElementById("bd-app"));
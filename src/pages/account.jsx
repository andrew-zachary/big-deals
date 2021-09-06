import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../components/account/login.jsx";
import Register from "../components/account/register.jsx";

const Account = () => {
    return (
        <section id="account-page">
            <div id="account-page-container" className="d-flex justify-content-center align-items-center">
                <Route exact path="/account" component={Login} />
                <Route path="/account/register" component={Register} />
            </div>
        </section>
    );
};

export default Account;
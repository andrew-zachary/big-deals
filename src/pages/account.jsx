import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Login from "../components/account/login.jsx";
import Register from "../components/account/register.jsx";

const Account = () => {
    const currentUserAuth = useSelector(state=>state.app.currentUserAuth);
    return (
        <>
            {
                !currentUserAuth && <section id="account-page">
                    <div id="account-page-container" className="d-flex justify-content-center align-items-center">
                        <Route exact path="/account" component={Login} />
                        <Route path="/account/register" component={Register} />
                    </div>
                </section>
            }
            {
                currentUserAuth && <Redirect to="/orders" />
            }
        </>
    );
};

export default Account;
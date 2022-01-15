import React, {useEffect, useContext} from 'react';

import { layoutContext } from '../../layout/context.js';

import LoginForm from '../../pages/login-form.jsx';
import RegisterForm from '../../pages/register-form.jsx';
import CartDetails from '../../pages/cart.jsx';
import ForgotPassword from '../../pages/forgot-password.jsx';
import UserProfile from '../../pages/user-profile.jsx';
import Orders from '../../pages/orders.jsx';
import Settings from '../../pages/settings.jsx';

const SideMenuTabs = ({isAuthed, userInfo, currentPage, setCurrentPage}) => {
    const {dispatch} = useContext(layoutContext);
    useEffect(()=>{
        setCurrentPage('user');
    }, [isAuthed]);
    const pickUpTab = (currentPage) => {
        if(!isAuthed) {
            switch (currentPage) {
                case 'password':
                    return <ForgotPassword setCurrentPage={setCurrentPage} />
                case 'user':
                    return <LoginForm setCurrentPage={setCurrentPage} />
                case 'register':
                    return <RegisterForm setCurrentPage={setCurrentPage} />
                case 'cart':
                    return <CartDetails setCurrentPage={setCurrentPage} />
                default:
                    break;
            }
        } else {
            switch (currentPage) {
                case 'user':
                    return <UserProfile userInfo={userInfo} setCurrentPage={setCurrentPage} />
                case 'cart':
                    return <CartDetails layoutDispatch={dispatch} setCurrentPage={setCurrentPage} />
                case 'orders':
                    return <Orders setCurrentPage={setCurrentPage} />
                case 'settings':
                    return <Settings />
                default:
                    break;
            }
        }
    }
    return <>
        {pickUpTab(currentPage)}
    </>
};

SideMenuTabs.displayName = "side menu tabs";

export default SideMenuTabs;
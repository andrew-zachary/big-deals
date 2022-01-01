import React from 'react';

import LoginForm from '../../pages/login-form.jsx';
import RegisterForm from '../../pages/register-form.jsx';
import CartDetails from '../../pages/cart.jsx';
import ForgotPassword from '../../pages/forgot-password.jsx';
import UserProfile from '../../pages/user-profile.jsx';

const SideMenuTabs = ({isAuthed, userInfo, currentForm, setCurrentForm}) => {
    const pickUpTab = (currentForm) => {
        if(!isAuthed) {
            switch (currentForm) {
                case 'password':
                    return <ForgotPassword setCurrentForm={setCurrentForm} />
                case 'user':
                    return <LoginForm setCurrentForm={setCurrentForm} />
                case 'register':
                        return <RegisterForm setCurrentForm={setCurrentForm} />
                case 'cart':
                        return <CartDetails setCurrentForm={setCurrentForm} />
                default:
                    break;
            }
        } else {
            switch (currentForm) {
                case 'user':
                    return <UserProfile userInfo={userInfo} setCurrentForm={setCurrentForm} />
                case 'cart':
                    return <CartDetails setCurrentForm={setCurrentForm} />
                default:
                    break;
            }
        }
    }
    return <>
        {pickUpTab(currentForm)}
    </>
};

SideMenuTabs.displayName = "side menu tabs";

export default SideMenuTabs;
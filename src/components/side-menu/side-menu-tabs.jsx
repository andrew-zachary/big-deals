import React, {useEffect} from 'react';

import LoginForm from '../../pages/login-form.jsx';
import RegisterForm from '../../pages/register-form.jsx';
import CartDetails from '../../pages/cart.jsx';
import ForgotPassword from '../../pages/forgot-password.jsx';
import UserProfile from '../../pages/user-profile.jsx';
import Orders from '../../pages/orders.jsx';

const SideMenuTabs = ({isAuthed, userInfo, currentPage, setCurrentPage}) => {
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
                    return <CartDetails setCurrentPage={setCurrentPage} />
                case 'orders':
                    return <Orders setCurrentPage={setCurrentPage} />
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
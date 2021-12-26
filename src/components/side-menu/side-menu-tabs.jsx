import React from 'react';
import LoginForm from '../../pages/login-form.jsx';
import RegisterForm from '../../pages/register-form.jsx';
import CartDetails from '../../pages/cart.jsx';

const SideMenuTabs = ({currentForm, setCurrentForm}) => {
    const pickUpTab = (currentForm) => {
        switch (currentForm) {
            case 'login':
                return <LoginForm setCurrentForm={setCurrentForm} />
            case 'register':
                    return <RegisterForm setCurrentForm={setCurrentForm} />
            case 'cart':
                    return <CartDetails setCurrentForm={setCurrentForm} />
            default:
                break;
        }
    }
    return <>
        {pickUpTab(currentForm)}
    </>
};

SideMenuTabs.displayName = "side menu tabs";

export default SideMenuTabs;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

const AppShoppingCart = () => {
    const {t} = useTranslation();
    const currentUserAuth = useSelector(state=>state.app.currentUserAuth);
    return <Link to={currentUserAuth?"/mycart":"/products"} id="app-shopping-cart" className="bd-btn bd-primary-btn d-flex align-items-center">
        <i className="fas fa-shopping-cart"></i>
        {currentUserAuth?t(`header.btn.my_cart`):t(`header.btn.start_shopping_now`)}
    </Link>
};

export default AppShoppingCart;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

const AppShoppingCart = () => {
    const {t} = useTranslation();
    const currentUserAuth = useSelector(state=>state.app.currentUserAuth);
    const {itemsNumber, totalCost} = useSelector(state=>state.cart);
    return <Link to={currentUserAuth?"/mycart":"/products"} id="app-shopping-cart" className="bd-btn bd-primary-btn d-flex align-items-start">
        <i className="fas fa-shopping-cart"></i>
        <ul id="cart-info" className="list-unstyled">
            <li id="click-label" className="text-capitalize">{currentUserAuth?t(`header.btn.go_to_my_cart`):t(`header.btn.start_shopping_now`)}</li>
            <li id="summary">
                <div id="items" className="d-flex"><span>{itemsNumber}</span><span className="bd-currency text-capitalize">{t(`header.items`)}</span></div>
                <div id="cost" className="d-flex"><span>{totalCost.toFixed(2)}</span><span className="bd-currency">{t(`common.egp`)}</span></div>
            </li>
        </ul>
    </Link>
};

export default AppShoppingCart;
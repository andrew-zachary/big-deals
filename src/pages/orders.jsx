import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

import {apiCallStarted} from "../store/actions/API";
import {getAllOrders} from "../store/config/orders";

import OrdersList from "../components/orders/list.jsx";

const Orders = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type: apiCallStarted.type, payload: getAllOrders()});
    }, []);
    return <section id="orders-page">
        <div id="order-page_container" className="mx-auto bd-white-box mt-5 p-3">
            <h1 className="text-capitalize">{t(`my_orders.title`)}</h1>
            <OrdersList t={t} />
        </div>
    </section>
}

export default Orders;
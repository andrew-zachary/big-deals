import React from 'react';

const OrdersItem = ({item, t}) => {
    return <li className="mt-3">
        <h1>{item.product.name}</h1>
        <h2 className="mt-2 d-flex">
            {item.product.price && <span>{parseFloat(item.product.price.$numberDecimal).toFixed(2)}</span> }
            <span className="bd-prices-x">X</span>
            <span>{item.quantity}</span>
            {item.product.price && <span className="bd-currency">{(parseFloat(item.product.price.$numberDecimal) * item.quantity).toFixed(2)}</span> }
            <span className="bd-currency">{t(`common.egp`)}</span>
        </h2>
    </li>
};

export default OrdersItem;
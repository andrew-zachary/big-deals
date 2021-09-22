import React from 'react';
import {Accordion} from "react-bootstrap";
import {useSelector} from "react-redux";

import moment from 'moment';

const OrdersList = () => {
    const orders = useSelector(state=>state.orders.items);
    return <>
        {
            orders.map((order, index)=>{
                return <Accordion key={order._id} defaultActiveKey={0}>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{moment(order.date).format('DD-MM-YYYY')}</Accordion.Header>
                        <Accordion.Body className="p-3">
                            <ul>
                                {
                                    order.items.map((item)=>{
                                        return <li key={item.product._id} className="mt-3">
                                            <h1>{item.product.name}</h1>
                                            <h2 className="mt-2">
                                                <span>{parseFloat(item.product.price.$numberDecimal).toFixed(2)}</span>
                                                <span className="bd-prices-x">X</span>
                                                <span>{item.quantity}</span>
                                                <span className="bd-currency">{(parseFloat(item.product.price.$numberDecimal) * item.quantity).toFixed(2)}</span>
                                                <span className="bd-currency">egp</span>
                                            </h2>
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="total-order-cost mt-5"><span className="order-cost">{parseFloat(order.totalCost).toFixed(2)}</span><span className="bd-currency">egp</span></div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            })
        }
    </>
};

export default OrdersList;
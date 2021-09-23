import React from 'react';
import {Accordion} from "react-bootstrap";
import {useSelector} from "react-redux";
import moment from 'moment';

import OrdersItem from "./item.jsx";

const OrdersList = ({t}) => {
    const orders = useSelector(state=>state.orders.items);
    return <>
        {
            orders.length > 0 && orders.map((order, index)=>{
                return <Accordion key={order._id} defaultActiveKey={0}>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{moment(order.date).format('DD-MM-YYYY')}</Accordion.Header>
                        <Accordion.Body className="p-3">
                            <ul>
                                {
                                    order.items.length > 0 && order.items.map((item, index)=>{
                                        return <OrdersItem key={index} item={item} t={t} />
                                    })
                                }
                            </ul>
                            <div className="total-order-cost mt-5"><span className="order-cost">{parseFloat(order.totalCost).toFixed(2)}</span><span className="bd-currency">{t(`common.egp`)}</span></div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            })
        }
    </>
};

export default OrdersList;
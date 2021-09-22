import React from 'react';
import {useDispatch} from 'react-redux';
import {Modal} from 'react-bootstrap';

import {apiCallStarted} from '../../store/actions/API';
import {createOrder} from '../../store/config/orders';

const CreateOrderModal = ({openCreateOrder, setOpenCreateOrder, items, totalCost}) => {
    const orderItems = items.map(item=>{return {product:item.product._id, quantity:item.quantity}});
    const dispatch = useDispatch();
    const sendOrderHandler = () => {
        dispatch({type:apiCallStarted.type, payload:createOrder({items:orderItems, totalCost})});
        setOpenCreateOrder(false);
    };
    return <Modal show={openCreateOrder}>
        <Modal.Header>
            <Modal.Title>Create Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>would you like to create an order</Modal.Body>
        <Modal.Footer>
            <button className="bd-btn bd-primary-btn" onClick={()=>{sendOrderHandler()}}>
                send
            </button>
            <button className="bd-btn bd-primary-btn" onClick={()=>{setOpenCreateOrder(!openCreateOrder)}}>
                cancel
            </button>
        </Modal.Footer>
    </Modal>
}

export default CreateOrderModal;
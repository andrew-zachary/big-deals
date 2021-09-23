import React from 'react';
import {useDispatch} from 'react-redux';
import {Modal} from 'react-bootstrap';

import {apiCallStarted} from '../../store/actions/API';
import {createOrder} from '../../store/config/orders';

const CreateOrderModal = ({openCreateOrder, setOpenCreateOrder, items, totalCost, t}) => {
    const orderItems = items.map(item=>{return {product:item.product._id, quantity:item.quantity}});
    const dispatch = useDispatch();
    const sendOrderHandler = () => {
        dispatch({type:apiCallStarted.type, payload:createOrder({items:orderItems, totalCost})});
        setOpenCreateOrder(false);
    };
    return <Modal id="create-order-modal" show={openCreateOrder}>
        <Modal.Header>
            <Modal.Title>{t(`modals.create_order_modal.title`)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t(`modals.create_order_modal.body`)}</Modal.Body>
        <Modal.Footer>
            <button className="bd-btn bd-primary-btn" onClick={()=>{sendOrderHandler()}}>
                {t(`modals.create_order_modal.ctrls.send`)}
            </button>
            <button className="bd-btn bd-primary-btn" onClick={()=>{setOpenCreateOrder(!openCreateOrder)}}>
                {t(`modals.create_order_modal.ctrls.cancel`)}
            </button>
        </Modal.Footer>
    </Modal>
}

export default CreateOrderModal;
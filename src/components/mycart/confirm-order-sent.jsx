import React from 'react';
import { Modal } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

import {orderReceivedReset} from '../../store/slices/orders';

const ConfirmOrderSent = ({newOrderSent, t}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const continueHandler = () => {
        dispatch({type: orderReceivedReset.type});
    }
    const openOrdersHandler = () => {
        dispatch({type: orderReceivedReset.type});
        history.push('/orders');
    }

    return <Modal show={newOrderSent}>
        <Modal.Body>
            <p>{t(`modals.confirm_order_sent_modal.body`)}</p>
        </Modal.Body>
    
        <Modal.Footer>
            <button className="bd-btn bd-primary-btn" onClick={()=>continueHandler()} variant="secondary">{t(`modals.confirm_order_sent_modal.ctrls.cancel`)}</button>
            <button className="bd-btn bd-primary-btn" onClick={()=>openOrdersHandler()} variant="primary">{t(`modals.confirm_order_sent_modal.ctrls.go_to_orders`)}</button>
        </Modal.Footer>
    </Modal>
}

export default ConfirmOrderSent;
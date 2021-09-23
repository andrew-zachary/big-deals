import React from 'react';
import { Modal } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

import {orderReceivedReset} from '../../store/slices/orders';

const ConfirmOrderSent = ({newOrderSent}) => {
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
        <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
            <p>Modal body text goes here.</p>
        </Modal.Body>
    
        <Modal.Footer>
            <button className="bd-btn bd-primary-btn" onClick={()=>continueHandler()} variant="secondary">continue</button>
            <button className="bd-btn bd-primary-btn" onClick={()=>openOrdersHandler()} variant="primary">open orders</button>
        </Modal.Footer>
    </Modal>
}

export default ConfirmOrderSent;
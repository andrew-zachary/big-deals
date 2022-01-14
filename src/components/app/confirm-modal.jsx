import React, {useContext} from 'react';
import Modal from 'react-modal';

import { layoutContext, layoutActions } from '../../layout/context.js';

Modal.setAppElement('#bd-app');

const ConfirmModal = () => {
    const {state: {modal: {toConfirm, toggle, text}}, dispatch} = useContext(layoutContext);
    const closeModal = () => {
        dispatch({
            type: layoutActions.TOGGLE_MODAL_SHOW, 
            payload: {
                toggle:false,
                text: {
                    header: null,
                    body: null
                },
                toConfirm: {
                    action: null,
                    payload: null
                }
            }
        });
    };
    const confirmAction = () => {
        toConfirm.action(toConfirm.payload);
        closeModal();
    };
    return <div>
        <Modal
            isOpen={toggle}
            onRequestClose={()=>closeModal()}
            className='confirm-modal'
            overlayClassName='confirm-modal-overlay'
            contentLabel="Confirm Modal"
        >
            <div id="confirm-modal-content" className='flex flex-col justify-between p-6 h-full'>
                <div className="header text-6xl font-mont font-regular capitalize text-primary">
                    {text.header}
                </div>
                <div className="body text-4xl font-mont font-regular capitalize text-center">
                    {text.body}
                </div>
                <div className="ctrls flex justify-around">
                    <button className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>confirmAction()}>ok</button>
                    <button className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>closeModal()}>cancel</button>
                </div>
            </div>
        </Modal>
    </div>
};

ConfirmModal.displayName = 'confirm modal';

export default ConfirmModal;
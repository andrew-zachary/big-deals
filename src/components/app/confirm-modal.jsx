import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { confirmModalToggled } from '../../store/slices/app.js';

Modal.setAppElement('#bd-app');

const ConfirmModal = () => {
    const dispatch = useDispatch();
    const {toggle, text, toConfirm} = useSelector(state=>state.app.confirmModal);
    const closeModal = () => {
        dispatch({
            type: confirmModalToggled.type, 
            payload: {
                toggle: false,
                text: {
                    header: null,
                    body: null
                },
                toConfirm: {
                    payload: null
                }
            }
        });
    };
    const confirmAction = () => {
        dispatch(toConfirm.payload);
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
                <div className="header text-5xl font-mont font-regular capitalize text-primary dark:text-primary-dark">
                    {text.header}
                </div>
                <div className="body text-3xl font-mont font-regular capitalize text-center dark:text-primary-dark">
                    {text.body}
                </div>
                <div className="ctrls flex justify-around">
                    <button className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>confirmAction()}>ok</button>
                    <button className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>closeModal()}>cancel</button>
                </div>
            </div>
        </Modal>
    </div>
};

ConfirmModal.displayName = 'confirm modal';

export default ConfirmModal;
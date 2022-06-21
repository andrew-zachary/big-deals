import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { confirmModalToggled } from '../../store/slices/app.js';

Modal.setAppElement('#bd-app');

const ConfirmModal = () => {
    const {t} = useTranslation();
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
                <div className="bd-font-compo header text-5xl font-regular capitalize text-primary dark:text-primary-dark">
                    {t(text.header)}
                </div>
                <div className="bd-font-base body text-3xl font-regular capitalize text-center dark:text-primary-dark">
                    {t(text.body)}
                </div>
                <div className="ctrls flex justify-around">
                    <button className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>confirmAction()}>{t('app.btns.ok')}</button>
                    <button className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>closeModal()}>{t('app.btns.cancel')}</button>
                </div>
            </div>
        </Modal>
    </div>
};

ConfirmModal.displayName = 'confirm modal';

export default ConfirmModal;
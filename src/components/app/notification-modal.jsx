import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { notificationModalToggled } from '../../store/slices/app.js';

Modal.setAppElement('#bd-app');

const NotificationModal = () => {
    const {t} = useTranslation();
    const {toggle, text} = useSelector(state=>state.app.notificationModal);
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({
            type: notificationModalToggled.type,
            payload: {
                toggle: false,
                text: {
                    header: null,
                    body: null
                }
            }
        })
    };
    return <div>
        <Modal
            isOpen={toggle}
            onRequestClose={()=>closeModal()}
            className='notification-modal'
            overlayClassName='notification-modal-overlay'
            contentLabel="Notification Modal"
        >
            <div id="notification-modal-content" className='flex flex-col justify-between p-6 h-full'>
                <div className="bd-font-compo header text-5xl font-regular capitalize text-primary dark:text-primary-dark">
                    {text.header}
                </div>
                <div className="bd-font-base body text-3xl font-regular capitalize text-center dark:text-primary-dark">
                    {t(text.body)}
                </div>
                <div className="ctrls flex justify-around">
                    <button className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize' onClick={()=>closeModal()}>{t('app.btns.ok')}</button>
                </div>
            </div>
        </Modal>
    </div>
};

NotificationModal.displayName = 'notification modal';

export default NotificationModal;
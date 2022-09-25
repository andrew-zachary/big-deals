import React from 'react';
import Modal from 'react-modal';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';

import {errorReset} from '../../store/slices/app.js';

Modal.setAppElement('#bd-app');

const AppError = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {msg, show} = useSelector(state=>state.app.error);
    const closeModal = () => {
        dispatch({type: errorReset.type});
    };
    const calcError = (msg) => {
        switch (msg) {
            case "no_connection":
                return "app.errors.no_connection";
            case "wrong_password":
                return "app.errors.wrong_password";
            case "wrong_email_password":
                return "app.errors.wrong_email_password"
            case "wrong_app_key":
                    return "app.errors.wrong_app_key"
            case "balance_not_enough":
                    return "app.errors.balance_not_enough"
            case "email_already_taken":
                    return "app.errors.email_already_taken"
            default:
                break;
        }
    }
    return <>
        {
            <Modal
                isOpen={show}
                onRequestClose={()=>closeModal()}
                className='confirm-modal'
                overlayClassName='confirm-modal-overlay'
                contentLabel="Notification Modal"
            >
                <div id="confirm-modal-content" className='flex flex-col justify-between p-6 h-full'>
                    <div className="header text-5xl font-regular capitalize text-primary dark:text-primary-dark">
                        big deals
                    </div>
                    <div className="body bd-font-base text-3xl font-regular capitalize text-center dark:text-primary-dark">
                        {t(calcError(msg))}
                    </div>
                    <div className="ctrls flex justify-around w-full">
                        <button className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize w-full' onClick={()=>closeModal()}>{t('app.btns.ok')}</button>
                    </div>
                </div>
            </Modal>
        }
    </>
};

AppError.displayName = 'app error';

export default AppError;
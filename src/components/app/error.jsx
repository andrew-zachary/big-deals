import React from 'react';
import Modal from 'react-modal';
import {useSelector, useDispatch} from 'react-redux';

import {errorReset} from '../../store/slices/app.js';

Modal.setAppElement('#bd-app');

const AppError = () => {
    const dispatch = useDispatch();
    const {msg, show} = useSelector(state=>state.app.error);
    const closeModal = () => {
        dispatch({type: errorReset.type});
    };
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
                    <div className="body text-3xl font-regular capitalize text-center dark:text-primary-dark">
                        {msg}
                    </div>
                    <div className="ctrls flex justify-around w-full">
                        <button className='font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize w-full' onClick={()=>closeModal()}>ok</button>
                    </div>
                </div>
            </Modal>
        }
    </>
};

AppError.displayName = 'app error';

export default AppError;
import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import { toastRemoved } from '../store/slices/app';

const AppToast = () => {
    const {toastersStack} = useSelector(state=>state.app);
    const {t} = useTranslation();
    const dispatch = useDispatch();
    return <>
        {
            <ToastContainer className="p-3">
                {
                    toastersStack.map((toast)=>{
                        return <Toast key={toast.id} onClose={()=>dispatch({type:toastRemoved.type, payload:{toastId:toast.id}})} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="me-auto">{t(toast.header)}</strong>
                            </Toast.Header>
                            <Toast.Body>{t(toast.body)}</Toast.Body>
                        </Toast>
                    })
                }
            </ToastContainer>
        }
    </>
}

export default AppToast;
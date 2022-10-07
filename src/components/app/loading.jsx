import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const {t} = useTranslation();
    const {show, payload} = useSelector(state=>state.app.loader);
    const loadingNote = (url) => {
        switch (url) {
            case '/bd/users/profile':
                return 'app.loading.note.onrender_wakeup'
            default:
                return '';
        }
    }
    return <>
        { show && <div id='loading' className='absolute top-0 left-0 z-9999 h-full w-full bg-white'>
            <div id='loading-box' className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]'>
                <h1 id='msg' className='bd-font-base capitalize text-4xl text-center text-primary dark:text-primary-dark font-regular'>{t('app.loading.please_wait')}</h1>
                <div id='loader' className='mt-8'>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
                <h2 className='bd-font-base capitalize text-3xl text-center text-primary dark:text-primary-dark font-regular'>{t(loadingNote(payload.url))}</h2>
            </div>
        </div> }
    </>
};

Loading.displayName = 'Loading';

export default Loading;
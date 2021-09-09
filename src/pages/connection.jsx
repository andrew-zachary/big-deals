import React from 'react';
import {useTranslation} from 'react-i18next';

const Connection = ()=> {
    const {t} = useTranslation();
    return (
        <div id="connection-page" className="text-center">
            <i className="fas fa-exclamation-triangle mb-4"></i>
            <h1>{t('connection.title')}</h1>
            <h2>{t('connection.msg')}</h2>
        </div>
    )
}

export default Connection;
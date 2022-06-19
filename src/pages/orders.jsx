import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

import OrderTabs from '../components/orders/orders-tabs.jsx';

const Orders = () => {
    const {t} = useTranslation();
    const [currentTab, setCurrentTab] = useState('');
    return <div id='orders-wrapper'>
        <OrderTabs currentTab={currentTab} t={t} />
        <div className='bills-btns flex justify-around my-4'>
            <button onClick={()=>setCurrentTab('older')} className='bd-font-base font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>{t('orders.older.btn')}</button>
            <button onClick={()=>setCurrentTab('current')} className='bd-font-base font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize'>{t('orders.current.btn')}</button>
        </div>
    </div>
};

Orders.displayName = 'order page';

export default Orders;
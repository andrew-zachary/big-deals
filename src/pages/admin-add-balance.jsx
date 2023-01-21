import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { apiStartCall } from '../store/actions.js';
import { addBalance } from '../store/end-points/user.js';

import BDFormInput from '../components/form/input.jsx';

const AdminAddBalance = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const addBalanceHandler = (e) => {
        e.preventDefault();
        dispatch({type: apiStartCall.type, payload: addBalance(null, null, {balance_amount: 1000})});
    }
    return <section id='add-balance' className='p-4 w-full max-w-screen-sm mx-auto'>
        <form onSubmit={(e)=>addBalanceHandler(e)}>
            <BDFormInput id='ccn' name='ccn' type='text' label='admin.add_balance.form.ccn' labelTxtTrans='capitalize' htmlInput={true} htmlInputErr={""} value={'1111-2222-3333-4444'} onChange={()=>{}} onBlur={null} errors={null} touched={null} />
            <BDFormInput id='exm' name='exm' type='text' label='admin.add_balance.form.exm' labelTxtTrans='capitalize' htmlInput={true} htmlInputErr={""} value={'september'} onChange={()=>{}} onBlur={null} errors={null} touched={null} />
            <div className='flex my-[-4.5rem]'>
                <div>
                    <BDFormInput id='exy' name='exy' type='text' label='admin.add_balance.form.exy' labelTxtTrans='capitalize' htmlInput={true} htmlInputErr={""} value={format(new Date(), 'y')} onChange={()=>{}} onBlur={null} errors={null} touched={null} />
                </div>
                <div className='bd-unit'>
                    <BDFormInput id='cvv' name='cvv' type='text' label='admin.add_balance.form.cvv' labelTxtTrans='uppercase' htmlInput={true} htmlInputErr={""} value={"352"} onChange={()=>{}} onBlur={null} errors={null} touched={null} />
                </div>
            </div>
            <div className="flex">
                <div>
                    <BDFormInput id='amount' name='amount' type='text' label='admin.add_balance.form.amount' labelTxtTrans='capitalize' htmlInput={true} htmlInputErr={""} value={'1000'} onChange={()=>{}} onBlur={null} errors={null} touched={null} />
                </div>
                <div className='bd-unit text-5xl'>
                    <span className='block my-[4.5rem] p-4'>$</span>
                </div>
            </div>
            <button type='submit' className='bd-font-compo text-4xl text-white font-light capitalize bg-primary dark:bg-primary-dark p-3 mt-[-4.8rem] rounded-[0.4rem] w-full'>{t('admin.add_balance.form.btn')}</button>
        </form>
    </section>
}

AdminAddBalance.displayName = 'admin add balance';

export default AdminAddBalance;
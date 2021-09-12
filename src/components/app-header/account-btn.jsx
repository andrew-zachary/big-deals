import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from 'react-i18next';

import {authLoggedout} from "../../store/actions/AUTH";

const AccountBtn = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [toggleDialog, setToggleDialog] = useState(false);
    const currentUserAuth = useSelector((state)=>state.app.currentUserAuth);
    return <>
        {
            !currentUserAuth && <li key="account.anony" id="account">
                <Link className="text-capitalize text-decoration-none" to="/account">{t('nav.account')}</Link>
            </li>
        }
        {
            currentUserAuth && <li key="account.login" id="account-loggedin">
                <div id="btn" role="button" onClick={()=>{setToggleDialog(!toggleDialog)}}>
                    <div id="avatar">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div id="toggler">
                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
                <div id="dialog" className={`${toggleDialog?"show ":"hide "} p-3 text-center bd-white-box`} onClick={()=>{dispatch({type:authLoggedout.type})}}>
                    <button className="bd-btn bd-primary-btn w-100">logout <i class="fas fa-sign-out-alt"></i></button>
                    <Link to="/dashboard" className="bd-btn bd-primary-btn mt-3 w-100">dashboard <i class="fas fa-cog"></i></Link>
                </div>
            </li>
        }
    </>
};

export default AccountBtn;
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
                <Link className="text-capitalize text-decoration-none" to="/account">{t('nav.account.title')}</Link>
            </li>
        }
        {
            currentUserAuth && <li key="account.login" id="account-loggedin">
                <div id="btn" role="button" onClick={()=>{setToggleDialog(!toggleDialog)}}>
                    <div id="avatar-lg" className="avatar">
                        {toggleDialog?<i className="fas fa-times-circle"></i>:<i className="fas fa-user-circle"></i>}
                    </div>
                    <div id="avatar-sm" className="avatar">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div id="toggler">
                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
                <div id="dialog" className={`${toggleDialog?"show ":"hide "} text-center`}>
                    <a role="button" className="d-flex align-items-center text-decoration-none text-capitalize" onClick={()=>{dispatch({type:authLoggedout.type})}}>{t('nav.account.sub_menu.logout')} <i className="fas fa-sign-out-alt"></i></a>
                    <Link className="d-flex align-items-center text-decoration-none text-capitalize" to="/dashboard">{t('nav.account.sub_menu.dashboard')} <i className="fas fa-cog"></i></Link>
                </div>
            </li>
        }
    </>
};

export default AccountBtn;
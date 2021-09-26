import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from 'react-i18next';

import {authLoggedout} from "../../store/actions/AUTH";

const AccountBtn = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [toggleDialog, setToggleDialog] = useState(false);
    const currentUserAuth = useSelector((state)=>state.app.currentUserAuth);
    useEffect(()=>{
        document.addEventListener('click',(e)=>{
            if(e.target.classList.contains('btn-toggler-icon') && e.target.classList.contains('fa-times-circle')) {
                return setToggleDialog(false);
            }
            if(e.target.classList.contains('btn-toggler-icon')) {
                return setToggleDialog(true);
            }
            setToggleDialog(false);
        });
    }, []);
    return <>
        {
            !currentUserAuth && <li key="account.anony" id="account">
                <Link className="text-capitalize text-decoration-none base-nav-btn" to="/account">{t('nav.account.title')}</Link>
            </li>
        }
        {
            currentUserAuth && <li key="account.login" id="account-loggedin">
                <div id="btn-toggler" role="button">
                    <div id="avatar-lg" className="avatar">
                        {toggleDialog?<i className="fas fa-times-circle btn-toggler-icon"></i>:<i className="fas fa-user-circle btn-toggler-icon"></i>}
                    </div>
                    <div id="avatar-sm" className="avatar">
                        <i className="fas fa-user-circle btn-toggler-icon"></i>
                    </div>
                    <div id="toggler">
                        <i className="fas fa-caret-down btn-toggler-icon"></i>
                    </div>
                </div>
                <div id="dialog" className={`${toggleDialog?"show ":"hide "} text-center`}>
                    <Link className="d-flex align-items-center text-decoration-none text-capitalize" to="/orders"><span>{t('nav.account.sub_menu.orders')}</span><i className="fas fa-dollar-sign"></i></Link>
                    <a role="button" className="d-flex align-items-center text-decoration-none text-capitalize" onClick={()=>{dispatch({type:authLoggedout.type})}}>{t('nav.account.sub_menu.logout')} <i className="fas fa-sign-out-alt"></i></a>
                </div>
            </li>
        }
    </>
};

export default AccountBtn;
import React from 'react';
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

import Localization from './localization.jsx';
import AccountBtn from './account-btn.jsx';

const Nav = ({openNavMenu, setOpenNavMenu}) => {
    const {t} = useTranslation();
    const links = [
        {to:"/search", text:"nav.search"},
        {to:"/products", text:"nav.products"},
        {to:"/about", text:"nav.about"},
    ];
    return (
        <Collapse in={openNavMenu}>
            <ul id="main-nav" className="list-unstyled" onClick={()=>setOpenNavMenu()}>
                <AccountBtn />
                {
                    links.map(({to, text})=>{
                        return <li key={text}>
                            <Link className="text-capitalize text-decoration-none" to={to}>{t(text)}</Link>
                        </li>
                    })
                }
                <Localization />
            </ul>
        </Collapse>
    );
};

export default Nav;
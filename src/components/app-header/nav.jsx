import React from 'react';
import {Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import Localization from './localization.jsx';
import {useTranslation} from 'react-i18next';

const Nav = ({openNavMenu}) => {
    const {t} = useTranslation();
    const links = [
        {to:"/account", text:"nav.account"},
        {to:"/search", text:"nav.search"},
        {to:"/products", text:"nav.products"},
        {to:"/about", text:"nav.about"},
    ];
    return (
        <Collapse in={openNavMenu}>
            <ul id="main-nav" className="list-unstyled">
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
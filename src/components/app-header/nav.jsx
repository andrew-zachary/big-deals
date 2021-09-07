import React from 'react';
import {Collapse} from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = ({openNavMenu}) => {
    const links = [
        {to:"/account", text:"account"},
        {to:"/search", text:"search"},
        {to:"/products", text:"products"},
        {to:"/about", text:"about"},
        {to:"/", text:"العربية"},
    ];
    return (
        <Collapse in={openNavMenu}>
            <ul id="main-nav" className="list-unstyled">
                {
                    links.map(({to, text})=>{
                        return <li key={text}>
                            <Link className="text-capitalize text-decoration-none" to={to}>{text}</Link>
                        </li>
                    })
                }
            </ul>
        </Collapse>
    );
};

export default Nav;
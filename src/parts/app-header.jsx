import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/logo.png';
import Nav from '../components/app-header/nav.jsx';
import NavBtn from '../components/app-header/nav-btn.jsx';

const AppHeader = () => {
    const [openNavMenu, setOpenNavMenu] = useState(false);
    return (
        <section id="app-header" className="bd-white-box">
            <div id="app-header_container" className="bd-max-width-1200 mx-auto p-3" style={{backgroundColor:openNavMenu?"var(--bd-secondary-color)":"white"}}>
                <Link to={'/'}>
                    <img id="logo" src={logo} alt="" />
                </Link>
                <NavBtn openNavMenu={openNavMenu} setOpenNavMenu={setOpenNavMenu} />
                <Nav openNavMenu={openNavMenu} setOpenNavMenu={setOpenNavMenu} />
            </div>
        </section>
    );
};

export default AppHeader;
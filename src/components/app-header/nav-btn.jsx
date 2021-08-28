import React from 'react';

const NavBtn = ({openNavMenu, setOpenNavMenu}) => {
    return (
        <div role="button" id="hamburger-menu" className={openNavMenu?"state-closed":""} onClick={()=>{setOpenNavMenu(!openNavMenu)}}>
            <span className="menu-bar"></span>
        </div>
    );
};

export default NavBtn;
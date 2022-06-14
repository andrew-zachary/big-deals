import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { footerShowToggled } from '../store/slices/app.js';

import LangToggler from '../components/footer/lang-toggler.jsx';

const Footer = ({footerToggle}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const iconContainerStyle = 'p-4 rounded-full bg-primary dark:bg-primary-dark text-white inline-block cursor-pointer';
    const iconStyle = 'text-4xl';
    useEffect(()=>{
        const homePage = document.querySelector('#home-page');
        if(homePage === null) {
            dispatch({type: footerShowToggled.type, payload: {toggle: false}});
        } else {
            dispatch({type: footerShowToggled.type, payload: {toggle: true}});
        }
    }, [location.pathname]);
    return <>
        {
            footerToggle && <footer>
                <div className='max-w-app-body mx-auto h-full flex justify-between items-center'>
                    <LangToggler />
                    <ul className='flex justify-end items-center'>
                        <li className={iconContainerStyle}>
                            <FaFacebookF className={iconStyle} />
                        </li>
                        <li className={iconContainerStyle}>
                            <FaTwitter className={iconStyle} />
                        </li>
                        <li className={iconContainerStyle}>
                            <FaInstagram className={iconStyle} />
                        </li>
                    </ul>
                </div>
            </footer>
        }
    </>
};

Footer.displayName = "app footer";

export default Footer;
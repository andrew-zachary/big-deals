import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    const iconContainerStyle = 'p-4 rounded-full bg-primary text-white inline-block';
    const iconStyle = 'text-4xl';
    return <footer>
        <div className='max-w-app-body mx-auto h-full'>
            <ul className='flex justify-end'>
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
};

Footer.displayName = "app footer";

export default Footer;
import React from 'react';
import {FaShoppingCart, FaArrowLeft} from 'react-icons/fa';

const LoginCart = ({currentPage, setCurrentPage}) => {
    return <>
        {
            currentPage !== 'user' && <button onClick={()=>setCurrentPage('user')}>
                <FaArrowLeft className='text-6xl text-primary dark:text-primary-dark' />
            </button>
        }
        {
            currentPage === 'user' && <button className='p-4 bg-primary dark:bg-primary-dark' onClick={()=>setCurrentPage('cart')}>
                <FaShoppingCart className='text-6xl text-white' />
            </button>
        }
    </>
};

LoginCart.displayName = 'login cart';

export default LoginCart;
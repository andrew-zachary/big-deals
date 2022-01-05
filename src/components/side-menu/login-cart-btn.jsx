import React from 'react';
import {FaShoppingCart, FaArrowLeft} from 'react-icons/fa';

const LoginCart = ({currentPage, setCurrentPage}) => {
    return <>
        {
            currentPage !== 'user' && <button onClick={()=>setCurrentPage('user')}>
                <FaArrowLeft className='text-6xl text-primary' />
            </button>
        }
        {
            currentPage === 'user' && <button className='p-4 bg-primary' onClick={()=>setCurrentPage('cart')}>
                <FaShoppingCart className='text-6xl text-white' />
            </button>
        }
    </>
};

LoginCart.displayName = 'login cart';

export default LoginCart;
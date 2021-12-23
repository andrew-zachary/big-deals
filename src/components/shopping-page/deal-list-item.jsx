import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const DealListItem = ({item}) => {
    let dealCost = 0;
    const dealDiscountPrice = () => {
        item.products.forEach((product)=>{
            dealCost += product.price;
        });
        const discountPrice = dealCost*(item.discount/100);
        return (dealCost - discountPrice).toFixed(2);
    };
    return <li className='py-6 border-primary-dim border-b'>
        <div className='item-header'>
            <h1 className='text-5xl capitalize font-mont font-medium'>{item.name}</h1>
            <div className='text-4xl capitalize text-primary inline-block'>
                <span className='off-box p-4 inline-block uppercase bg-primary text-white font-mont font-medium'>off</span>
                <span className='text-4xl font-mont font-medium'>{parseFloat(item.discount).toFixed(2)}</span>
                <span className='bd-unit'>%</span>
            </div>
        </div>
        <h2 className='text-4xl font-ssp font-regular'>{item.desc}</h2>
        <ul id="deal-products">
            {
                item.products.map((product)=>{
                    return <li key={product._id} className='product-item'>
                        <h1 className='text-5xl capitalize font-mont font-extra-light'>{product.name}</h1>
                        <ul className='price-calculator mt-4 flex items-center'>
                            <li className='price-before text-4xl text-primary font-ssp'>
                                <span>{product.price}</span><span className='bd-unit'>$</span>    
                            </li>
                            <li className='price-after text-5xl font-mont font-medium text-primary'>
                                <span>{(product.price-(product.price*(item.discount/100))).toFixed(2)}</span><span className='bd-unit'>$</span>
                            </li>
                        </ul>
                    </li>
                })
            }
        </ul>
        <button className='mt-8 font-ssp font-regular bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] flex items-center justify-around w-full max-w-[28rem] mx-auto'>
            <span className='text-4xl capitalize'>for</span>
            <div className='text-5xl font-ssp font-medium'>
                <span>{dealDiscountPrice()}</span>
                <span className='bd-unit'>$</span>
            </div>
            <FaCartPlus className='text-white text-5xl' />
        </button>
    </li>
};

export default DealListItem;
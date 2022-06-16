import React from 'react';

import AddDealCart from './add-deal-cart.jsx';

const DealListItem = ({item}) => {
    return <li className='py-6 border-primary-dim dark:border-primary-dim-dark border-b'>
        <div className='item-header'>
            <h1 className='text-5xl capitalize font-medium'>{item.name}</h1>
            <div className='text-4xl capitalize text-primary inline-block'>
                <span className='off-box p-4 inline-block uppercase bg-primary dark:bg-primary-dark text-white font-medium'>off</span>
                <span className='text-4xl dark:text-primary-dark font-medium'>{parseFloat(item.discount).toFixed(2)}</span>
                <span className='bd-unit dark:text-primary-dark'>%</span>
            </div>
        </div>
        <h2 className='text-4xl font-regular'>{item.desc}</h2>
        <ul id="deal-products">
            {
                item.products.map((product)=>{
                    return <li key={product._id} className='product-item'>
                        <h1 className='text-5xl capitalize font-extra-light'>{product.name}</h1>
                        <ul className='price-calculator mt-4 flex items-center'>
                            <li className='price-before text-4xl text-primary dark:text-primary-dark font-ssp'>
                                <span>{product.price}</span><span className='bd-unit'>$</span>    
                            </li>
                            <li className='price-after text-5xl font-medium text-primary dark:text-primary-dark'>
                                <span>{(product.price-(product.price*(item.discount/100))).toFixed(2)}</span><span className='bd-unit'>$</span>
                            </li>
                        </ul>
                    </li>
                })
            }
        </ul>
        <AddDealCart item={item} />
    </li>
};

DealListItem.displayName = 'deal list item';

export default DealListItem;
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const DealListItem = ({item}) => {
    return <li className='py-6'>
        <div className='item-header'>
            <h1 className='text-5xl capitalize font-mon font-medium'>{item.name}</h1>
            <div className='text-4xl capitalize text-primary inline-block'>
                <span className='off-box p-4 inline-block uppercase bg-primary text-white font-ssp font-medium'>off</span>
                <span>{parseFloat(item.discount).toFixed(2)}</span>
                <span className='bd-unit'>%</span>
            </div>
        </div>
        <h2 className='text-3xl'>{item.desc}</h2>
        <ul>
            {
                item.products.map((product)=>{
                    return <li key={product._id} className='mt-6'>
                        <h1 className='inline-block text-4xl capitalize font-mon font-medium'>{product.name}</h1>
                        <ReactStars 
                            count={5} 
                            size={34} 
                            edit={false} 
                            value={product.avgRating.amount}
                            isHalf={true}
                            activeColor='#f68b1e'
                            color="#f9ae6280"
                        />
                        <div className='text-5xl text-primary py-4'>
                            <span className='font-mon font-medium'>{product.price}</span><span className='bd-unit font-mon font-medium'>$</span>
                        </div>
                        <ul>
                            {
                                product.features.map(feature => {
                                    return <li key={feature} className='text-3xl p-4 inline-block border border-primary'>{feature}</li>
                                })
                            }
                        </ul>
                    </li>
                })
            }
        </ul>
    </li>
};

export default DealListItem;
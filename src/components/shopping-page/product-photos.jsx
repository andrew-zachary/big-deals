import React from 'react';
import { useDispatch } from 'react-redux';

import { sliderModalToggled } from '../../store/slices/app.js';

const ProductPhotos = ({thumbs, imgs}) => {
    const dispatch = useDispatch();
    const openSliderModal = (index) => {
        dispatch({
            type: sliderModalToggled.type,
            payload: {
                toggle: true,
                clickedIndex: index,
                imgs
            }
        })
    }
    return <ul className='flex'>
        {
            thumbs.map((value, index)=>{
                return <li onClick={()=>openSliderModal(index)} key={index} className='cursor-pointer'> 
                    <img src={value} alt="" />
                </li>
            })
        }
    </ul>
};

ProductPhotos.displayName = 'Product Photos';

export default ProductPhotos;
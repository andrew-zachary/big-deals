import React, {useContext} from 'react'

import {layoutContext, layoutActions} from '../../layout/context.js'

const ProductPhotos = ({thumbs, imgs}) => {
    const {dispatch} = useContext(layoutContext)
    const openSliderModal = (index) => {
        dispatch({
            type: layoutActions.TOGGLE_SLIDER_MODAL_SHOW,
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
}

ProductPhotos.displayName = 'Product Photos'

export default ProductPhotos;
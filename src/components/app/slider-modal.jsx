import React, {useContext} from 'react'
import Modal from 'react-modal'
import {FaTimes} from 'react-icons/fa'

import { layoutContext, layoutActions } from '../../layout/context.js'

import Slider from 'react-slick'

Modal.setAppElement('#bd-app')

const SliderModal = () => {
    const {state: {slider_modal: {toggle, clickedIndex}}, dispatch} = useContext(layoutContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:clickedIndex
    }
    const closeModal = () => {
        dispatch({
            type: layoutActions.TOGGLE_SLIDER_MODAL_SHOW, 
            payload: {
                toggle:false,
                clickedIndex: null
            }
        });
    };
    return <>
        {
            toggle === true && <Modal
                isOpen={toggle}
                onRequestClose={()=>closeModal()}
                className='slider-modal'
                overlayClassName='slider-modal-overlay'
                contentLabel="Confirm Modal"
            >
                <div className='grid grid-cols-1 grid-rows-[10%_90%]'>
                    <div className='header px-4 flex items-end justify-end'>
                        <FaTimes className='text-6xl text-primary cursor-pointer' onClick={()=>closeModal()} />
                    </div>
                    <div className='body w-screen max-w-screen-sm self-center justify-self-center'>
                        <Slider {...settings}>
                            <div>
                                <img className='mx-auto' src='https://via.placeholder.com/375x375' title='img 1' />
                            </div>
                            <div>
                                <img className='mx-auto' src='https://via.placeholder.com/375x375' title='img 2' />
                            </div>
                            <div>
                                <img className='mx-auto' src='https://via.placeholder.com/375x375' title='img 3' />
                            </div>
                            <div>
                                <img className='mx-auto' src='https://via.placeholder.com/375x375' title='img 4' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Modal>
        }
    </>
}

SliderModal.displayName = 'Slider Modal'

export default SliderModal
import React, {useEffect} from 'react';
import Swiper, { Navigation, Thumbs, Scrollbar } from 'swiper';

const ProductGallery = ({gallery}) => {
    useEffect(()=>{
        Swiper.use([Navigation, Thumbs, Scrollbar]);
        const thumbsSwiper = new Swiper(".thumbs-swiper", {
            spaceBetween: 10,
            slidesPerView: 3,
            watchSlidesProgress: true,
            freeMode: true,
            scrollbar: {
                el: '.thumbs-swiper-scrollbar',
                draggable: true,
            }
        });
        const imgsSwiper = new Swiper('.imgs-swiper', {
            spaceBetween: 0,
            thumbs: {
                swiper: thumbsSwiper,
            },
        });
        return () => {
            imgsSwiper.destroy();
            thumbsSwiper.destroy();
        }
    }, []);
    return <>
        <div className="imgs-swiper">
            <div className="swiper-wrapper">
                {
                    gallery.images.map((image, index)=>{
                        return (
                            <div key={index} className="swiper-slide d-flex justify-content-center align-items-start">
                                <img role="button" src={image.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="thumbs-swiper">
            <div className="swiper-wrapper">
                {
                    gallery.thumbnails.map((thumbnail, index)=>{
                        return (
                            <div key={index} className="swiper-slide d-flex justify-content-center align-items-center">
                                <img role="button" src={thumbnail.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="thumbs-swiper-scrollbar"></div>
        </div>
    </>
};

export default ProductGallery;
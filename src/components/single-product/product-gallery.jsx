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
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
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
                            <div className="swiper-slide d-flex justify-content-center align-items-start">
                                <img role="button" key={index} src={image.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
        <div className="thumbs-swiper">
            <div className="swiper-wrapper">
                {
                    gallery.thumbnails.map((thumbnail, index)=>{
                        return (
                            <div className="swiper-slide d-flex justify-content-center align-items-center">
                                <img role="button" key={index} src={thumbnail.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div class="thumbs-swiper-scrollbar"></div>
        </div>
    </>
};

export default ProductGallery;
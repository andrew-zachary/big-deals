import React from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Paginator from "../components/single-product/paginator.jsx";
import ReviewsGetBtn from "../components/single-product/reviews-get-btn.jsx";
import ListItem from "../components/single-product/list-item.jsx";
import ProductGallery from "../components/single-product/product-gallery.jsx";
import StarsCalc from "../parts/stars-calc.jsx";

const SingleProduct = () => {
    const {t} = useTranslation();
    const {_id, name, price, avgRate, features, description, descriptionPoints} = useSelector(state=>state.products.productSelected);
    return (
        <div id="single-product-page" className="mt-5">
            <div className="single-product-container bd-max-width-1200 bd-white-box p-3">
                <section id="product-info" className="d-flex">
                    <div id="product-info_gallery">
                        <ProductGallery gallery={{
                            images:[
                                {src:'https://via.placeholder.com/250x250'},
                                {src:'https://via.placeholder.com/250x251'},
                                {src:'https://via.placeholder.com/250x252'},
                                {src:'https://via.placeholder.com/250x253'},
                                {src:'https://via.placeholder.com/250x254'},
                            ],
                            thumbnails:[
                                {src:'https://via.placeholder.com/100x100'},
                                {src:'https://via.placeholder.com/100x100'},
                                {src:'https://via.placeholder.com/100x100'},
                                {src:'https://via.placeholder.com/100x100'},
                                {src:'https://via.placeholder.com/100x100'},
                            ]
                        }} />
                    </div>
                    <div id="product-info_text">
                        <h1 id="product-name" className="text-uppercase">{name}</h1>
                        <ul id="features" className="list-unstyled">
                            {
                                features.map((feature, index)=>{
                                    return <li className="d-inline-block p-3 text-capitalize" key={index}>{feature}</li>
                                })
                            }
                        </ul>
                        <div className="avg-rate-opt">
                            <StarsCalc avgRate={avgRate} />
                        </div>
                        <h2 id="product-price"><span className="price-num">{parseInt(price.$numberDecimal).toFixed(2)}</span><span className="price-unit text-capitalize">{t(`common.egp`)}</span></h2>
                        <p id="shipping" className="mt-2">+ shipping from EGP 11 to 6th of October</p>
                        <div id="add-to-cart">
                            <button className="bd-btn bd-primary-btn d-flex align-items-center"><i className="fas fa-cart-plus"></i>{t(`single_product.btn.add_to_cart`)}</button>
                        </div>
                        <div id="description" className="mt-5">
                            <h1 className="text-capitalize">{t(`single_product.description`)}</h1>
                            <p className="mt-b">{description}</p>
                        </div>
                        <div id="description-points" className="mt-5">
                            <h1 className="text-capitalize">{t(`single_product.details`)}</h1>
                            <ul className="mt-b">
                                {
                                    descriptionPoints.map((point, index)=>{
                                        return <li key={index} className="mb-1">{point}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="single-product-container bd-max-width-1200 bd-white-box p-3 mt-5">
                <section id="product-reviews">
                    <h1 className="text-capitalize mt-b">{t(`single_product.customers_feedback`)}</h1>
                    <ReviewsGetBtn text={t(`single_product.btn.show_reviews`)} productId={_id}/>
                    <ul id="reviews-lists" className="mt-5 list-unstyled">
                        <Paginator ItemComponent={ListItem} productId={_id} />
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default SingleProduct;
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ product }) => (
    <div className="product-grid__product-wrapper">
        <div className="product-grid__product">
            <div className="product-grid__img-wrapper">
                <img src="testFence.png" alt="Img" className="product-grid__img" />
            </div>
            <span className="product-grid__title">{product.title}</span>
            {/* <span className="product-grid__price">1.399€</span> */}
            <div className="product-grid__extend-wrapper">
                <div className="product-grid__extend">
                    <p className="product-grid__description">{product.description}</p>
                    <span className="product-grid__btn product-grid__add-to-cart"><i className="fa fa-cart-arrow-down"></i> Add to cart</span>
                    <span className="product-grid__btn product-grid__view"><i className="fa fa-eye"></i> View more</span>
                </div>
            </div>
        </div>
    </div>
) 
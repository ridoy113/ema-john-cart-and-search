import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='name'>Name: {name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rattimgs: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;
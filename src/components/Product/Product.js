import { faCaretDown, faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    const{handleAddToCart} = props ;
   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: {price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating : {ratings} start</small></p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)}  className='btn-card'>
                <p>
                    Add to Cart
                    <FontAwesomeIcon className='cartplus' icon={faCartPlus}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    );
};

export default Product;
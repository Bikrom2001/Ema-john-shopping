import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, shipping, img } = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p className='name'>{name}</p>
                    <p className='price'>Price: <small className='price-color'>${price}</small></p>
                    <p>Shipping Charge: <small className='price-color'>${shipping}</small></p>
                    <p>Quantity: <small className='price-color'>{quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(product._id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icons' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;
import React from 'react';
import './Cart.css';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const Cart = ({ cart, clearCart, children}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <div className='order-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
            <div className='btn-group'>
                <button onClick={clearCart} className='clear-btn'>
                    <span> Clear Cart</span>
                    <TrashIcon className="delet" />
                </button>
                {/* <button className='review-btn'>Review Order
                <ArrowSmallRightIcon className="delet" />
                </button> */}
                {children}
            </div>
        </div>
    );
};

export default Cart;
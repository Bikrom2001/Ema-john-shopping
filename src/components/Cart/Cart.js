import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    let total = 0 ;
    let shipping = 0;
    let quantity = 0 ;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price *product.quantity;
        shipping = shipping + product.shipping ;
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
               <button>Clear Cart</button>
                <button>Review Order</button>
               </div>
        </div>
    );
};

export default Cart;
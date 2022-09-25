import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Summary</h4>
                <div className='order-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:  </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h3>Grand Total: </h3>
                </div>
        </div>
    );
};

export default Cart;
import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Selected Item:{cart.length}</h3>
        </div>
    );
};

export default Cart;
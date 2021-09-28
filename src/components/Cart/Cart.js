import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let cartName = [];
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
        cartName.push(product.name);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Orders: {props.cart.length}</h5>
            <h5>Names: {cartName}</h5>
            <br />
            <h5>Total Salary: ${total}</h5>
        </div>
    );
};

export default Cart;
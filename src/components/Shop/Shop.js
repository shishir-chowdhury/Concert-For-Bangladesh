import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Shop.css'
const Shop = () => {
    const [singers, setSingers] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])
    const handleAddToCart = (singer) => {
        const newCart = [...carts, singer];
        setCart(newCart);
        // console.log(singer.name);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container row">
                    {
                        singers.map(singer => <Singer
                            key={singer.id}
                            singer={singer}
                            handleAddToCart={handleAddToCart}
                        >
                        </Singer>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={carts}
                        name={carts.name}>
                    </Cart>


                </div>
            </div>

        </div>
    );
};

export default Shop;
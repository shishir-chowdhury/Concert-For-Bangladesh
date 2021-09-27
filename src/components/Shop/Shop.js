import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';
import './Shop.css'
const Shop = () => {
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container row">
                    {
                        singers.map(singer => <Singer
                            key={singer.id}
                            singer={singer}
                        >
                        </Singer>)
                    }
                </div>
                <div className="cart-container">
                    <h3>order summary</h3>
                    <h5>Items ordered:</h5>
                </div>
            </div>

        </div>
    );
};

export default Shop;
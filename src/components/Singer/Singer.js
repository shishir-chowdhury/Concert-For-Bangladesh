import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Singer.css';

const Singer = (props) => {
    // console.log(props);
    const { name, id, img, salary, band, position } = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="singers container col-md-3">
            <div className="">
                <div className="card row mb-3 mt-3 b-color" style={{ width: "18rem" }}>
                    <img className="singer-image card-img-top" src={img} alt="" />
                    <div className="card-body">
                        <p className="card-text">Number: {id}</p>
                        <h5 className="card-title">Name:{name}</h5>
                        <p className="card-text">Position: {position}</p>
                        <p className="card-text">Band Name: {band}</p>
                        <p className="card-text">Salary: {salary}</p>
                        <button
                            onClick={() => props.handleAddToCart(props.singer)}
                            className="btn-regular"
                        >{cartIcon} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;
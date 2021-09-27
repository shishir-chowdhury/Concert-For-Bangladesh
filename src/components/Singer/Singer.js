import React from 'react';
import './Singer.css';

const Singer = (props) => {
    console.log(props.singer);
    const { name, id, img, salary, band, position } = props.singer;
    return (
        <div className="singers container col-md-3">
            <div className="">
                <div className="card row" style={{ width: "18rem" }}>
                    <img className="singer-image card-img-top" src={img} alt="" />
                    <div className="card-body">
                        <p className="card-text">Number: {id}</p>
                        <h5 className="card-title">Name:{name}</h5>
                        <p className="card-text">Position: {position}</p>
                        <p className="card-text">Band Name: {band}</p>
                        <p className="card-text">Salary: {salary}</p>
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;
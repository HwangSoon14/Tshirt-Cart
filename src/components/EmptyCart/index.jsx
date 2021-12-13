import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
const EmptyCart = () => {
    return (
        <div className='emp'>
            <div className='emp-wrapper'>
                <span>There's nothing in ur bag , let buy something !</span>
                <Link to="/">
                    <button className='btn btn-primary'>GO TO STORE</button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyCart;
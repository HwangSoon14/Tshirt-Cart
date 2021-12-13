import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
const BillCart = () => {
    const count = useSelector(state => state.cartReducer.count);
    const list = useSelector(state => state.cartReducer.list);
    const total = list.reduce((total , item) => 
        total + item.quantity * item.price
    , 0);
    return (
        <div className='bill'>
            <div className='bill-wrapper'>
                <span className='bill-count'>Total Item: {count}</span>
                <span className='bill-money'>Total Bills: ${total}</span>
            </div>
            <div className='bill-btn'>
                <button className='btn btn-primary'>CHECKOUT</button>
                <button className='btn btn-secondary'>RESET</button>
            </div>
        </div>
    );
};

export default BillCart;
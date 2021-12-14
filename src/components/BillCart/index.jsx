import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetList } from '../Cart/cartSlice';
import './index.scss';
const BillCart = () => {
    const count = useSelector(state => state.cartReducer.count);
    const list = useSelector(state => state.cartReducer.list);
    const total = list.reduce((total , item) => 
        total + item.quantity * item.price
    , 0);
    const dispatch = useDispatch();
    const handleClickCheckOut = () => {
        dispatch(resetList());
        
    }
    return (
        <div className='bill'>
            <div className='bill-wrapper'>
                <span className='bill-count'>Total Item: {count}</span>
                <span className='bill-money'>Total Bills: ${total}</span>
            </div>
            <div className='bill-btn'>
                <button 
                    className='btn btn-primary'
                    onClick={handleClickCheckOut}
                >
                    CHECKOUT
                </button>
                <button className='btn btn-secondary'>RESET</button>
            </div>
        </div>
    );
};

export default BillCart;
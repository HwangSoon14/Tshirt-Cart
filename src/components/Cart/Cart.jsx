import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.scss'
import BillCart from '../BillCart';
import EmptyCart from '../EmptyCart';
const Cart = () => {
    const productList = useSelector(state => state.cartReducer.list);
    
    return (
        <div className='cartList'>
        {productList && productList.map((product,index) => (
            <CartItem key={product.id} product={product} index={index}/>
        ))}
        { 
            (productList.length > 0) ? <BillCart /> : <EmptyCart />
        }
        </div>
    );
};

export default Cart;
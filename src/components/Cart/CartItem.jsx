import React from 'react';
import './CartItem.scss'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './cartSlice';
const CartItem = ({ product , index}) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increaseQuantity(index));
    }

    const handleDecrease = () => {
        dispatch(decreaseQuantity(index));
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <div key={product.id} className='cartItem'>
            <div className='cartItem-wrapper'>
                <div className='cartItem-left'>
                    <div className='cartItem-left-wrapperImg'>
                        <img src={product.url} alt={product.title} />
                    </div>
                    <span className='cartItem-title'>{product.title}</span>
                    <span className='cartItem-price'>${product.price}</span>
                </div>
                <div className='cartItem-center'>
                    <span>Quantity: {product.quantity}</span>
                </div>
                <div className='cartItem-right'>
                    {
                        (product.quantity <= 1) 
                        ?
                         (
                            <>
                                <ArrowCircleUpIcon onClick={handleIncrease}/>
                                <DeleteIcon onClick={() => handleRemoveFromCart(product.id)} />
                            </>
                        )
                        : 
                        (
                            <>
                                <ArrowCircleUpIcon onClick={handleIncrease}/>
                                <ArrowCircleDownIcon onClick={handleDecrease}/>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CartItem;
import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart';
import './Wishlist.scss'
import WishlistItem from './WishlistItem';
const Wishlist = () => {
    
    const wishList = useSelector(state => state.wishListReducer.wishList)
    // console.log(wishList);
    return (
        <div className='wl '>
            <div className='wl-wrapper list'>
                {wishList && wishList.map((product) => (
                    <WishlistItem key={product.id} product={product} />
                ))}
                {(wishList.length <= 0) && <EmptyCart/> }
            </div>
        </div>
    );
};

export default Wishlist;
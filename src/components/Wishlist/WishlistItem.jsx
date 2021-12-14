import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { useDispatch } from 'react-redux';
import './WishlistItem.scss';
import { removeFromWishList } from './wishListSlice';
const WishlistItem = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div key={product.id} className='product'>
                <div className='product-wrapper'>
                    <img src={product.url} alt={product.title} />
                </div>
                <div className='product-text'>
                    <span className='product-title text-big'>{product.title}</span>
                    <span className='product-price'>${product.price}</span>
                </div>
                <FavoriteIcon 
                    className="product-fav bg-red bg-active"
                />
                <button className='btn btn-primary btn-wishlist'
                    onClick={() => dispatch(removeFromWishList(product))}>
                    <DeleteForeverIcon />
                </button>
        </div>
    );
};

export default WishlistItem;
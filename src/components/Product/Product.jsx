import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Cart/cartSlice';
import { addToWishList, removeFromWishList } from '../Wishlist/wishListSlice';
import './Product.scss';
const Product = ({product}) => {
    const wishListProducts = useSelector((state) => state.wishListReducer.wishList);
    const [activeIcon , setActiveIcon ] =useState(false);
    const thisIndex = wishListProducts.findIndex(x => x.id === product.id);
    const dispatch = useDispatch();
    

    const addToCartClick = (product) => {
            dispatch(addToCart(product));
    }

    const addToWishListFunc = (product) => {
        setActiveIcon(!activeIcon);
        (!activeIcon) && dispatch(addToWishList(product));
        (activeIcon) && dispatch(removeFromWishList(product));
    }
    return (
        <div key={product.id} className='product'>
                <div className='product-wrapper'>
                    <img src={product.url} alt={product.title} />
                </div>
                <div className='product-text'>
                    <span className='product-title'>{product.title}</span>
                    <span className='product-price'>${product.price}</span>
                </div>
                <div className='product-btn'>
                    <button className='btn btn-primary' onClick={() => addToCartClick(product)}>
                        ADD TO CART
                    </button>
                    <Link to={`/product/${product.id}`}>
                    <button className='btn btn-secondary'>
                        VIEW DETAILS
                    </button>
                    </Link>
                    
                </div>
                <FavoriteIcon 
                    className={(thisIndex !== -1) ? "product-fav bg-red bg-active" : "product-fav bg-red"}
                    onClick={() => addToWishListFunc(product)}
                     />
        </div>
    );
};

export default Product;
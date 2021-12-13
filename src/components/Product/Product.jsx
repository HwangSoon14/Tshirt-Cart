import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Cart/cartSlice';
import './Product.scss';

const Product = ({product}) => {
    
    const dispatch = useDispatch();
    const addToCartClick = (product) => {
            dispatch(addToCart(product));
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
                <FavoriteBorderIcon className='product-fav' />
        </div>
    );
};

export default Product;
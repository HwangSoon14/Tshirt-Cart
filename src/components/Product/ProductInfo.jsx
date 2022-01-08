import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import productApi from '../../api/productApi';
import { addToCart } from '../Cart/cartSlice';
import './ProductInfo.scss';

const ProductInfo = () => {
    const [product , setProduct] = useState({});
    const {productId} = useParams();
    const dispatch = useDispatch();
    const addToCartClick = (product) => {
    dispatch(addToCart(product));
    }
    
    useEffect(() => {
        const fecthData = async () => {
            const response = await productApi.getAll();
            const data = response.data;
            const thisProduct = data.filter((item) => (item.id === productId));
            setProduct(thisProduct[0]);
        }
        fecthData();
    } , [productId])
    
    return (
        <div className='pi'>
            <div className='pi-wrapper'>
                <div className='pi-left'>
                    <img src={product.url} alt={product.title} />
                </div>
                <div className='pi-right'>
                    <span className='pi-title'>{product.title}</span>
                    <span className='pi-price'>${product.price}</span>
                    <p className='pi-desc'>{product.description}</p>
                    <button className='btn btn-primary pi-detail' onClick={() => addToCartClick(product)}>ADD TO CART</button>
                </div>
            </div>
        </div>
        
    );
};

export default ProductInfo;
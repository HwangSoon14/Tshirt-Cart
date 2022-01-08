import axios from 'axios';
import React, { useState , useEffect} from 'react';
import Product from './Product';
import './ProductList.scss'
import productApi from '../../api/productApi'
const ProductList = () => {
    // const baseURL = "https://raw.githubusercontent.com/mahmud-sajib/ecommerce-store-product-data/master/data.json"
    const [productList , setProductList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get(`${baseURL}`);
            const response = await productApi.getAll();
            const data = response.data;
            setProductList(data);
        }
        fetchData();
    }, [])
    return (
        <div className='list'>
            {productList && productList.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;
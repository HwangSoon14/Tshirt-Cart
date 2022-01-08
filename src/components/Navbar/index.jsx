import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './index.scss'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import BasicMenu from './BaseMenu';
import { logout } from '../../app/userSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const countProductCart = useSelector((state) => state.cartReducer.count);
    const countProductHeart = useSelector((state) => state.wishListReducer.count);
    const user = useSelector(state => state.userReducer.users);
    console.log(user);
    const handleLogOut = () => {
        dispatch(logout());
    }
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <Link to="/" className='navbar-logo'>
                    TeeSir
                </Link>
                <div className='navbar-tablist'>
                    <Link to="/" className='navbar-tab'>Store</Link>
                    {/* <Link to="/about" className='navbar-tab'>About</Link> */}
                </div>
                <div className='navbar-cart'>
                    <Link to="/wishlist" className='navbar-cartItem'>
                        <Badge badgeContent={countProductHeart} color="primary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </Link>
                    <Link to="/cart" className='navbar-cartItem'>
                        <Badge badgeContent={countProductCart} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </Link>
                    { (user.email) ? <BasicMenu name={user.email} onLogOut={handleLogOut} /> : <Link to="/login">
                        <button className='btn btn-primary login-btn'>Login</button>
                    </Link>}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
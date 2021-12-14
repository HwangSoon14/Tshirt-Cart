import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './index.scss'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const countProductCart = useSelector((state) => state.cartReducer.count);
    const countProductHeart = useSelector((state) => state.wishListReducer.count);
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
 
const Header=({onSearch})=>{
    const [searchQuery,setSearchQuery]=useState('');
    const basket=useSelector((state)=>state.basket);
    const WishList=useSelector((state)=>state.WishList);
    const handleSearch=(e)=>{
        e.preventDefault();
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    }

    return(
        <div className="header">
            <div className="header_search">
                <SearchIcon className="header_searchIcon"/>
                <input name="search" placeholder="Type to Search" value={searchQuery} onChange={handleSearch} />
            </div>
            <div className="header_Icon">
                <span className="Login">
                    
                   <PersonIcon/>
                   <p>LOGIN</p>
                </span>
                <span className="WishList">
                    <Link to="/WishList">
                   <span><FavoriteBorderIcon/></span>
                   <span>{WishList.length}</span>
                   <p>Wishlist</p>
                   </Link>
                </span>
                <span className="Cart">
                <Link to="/cart">
                   <span><ShoppingCartIcon/></span>
                   <span>{basket.length}</span>
                   <p>CART</p>
                   </Link>
                </span>
            </div>
        </div>
    );
}

export default Header;
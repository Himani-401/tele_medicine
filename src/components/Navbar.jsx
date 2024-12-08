import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <img className='image-nav' src='https://i.pinimg.com/736x/ea/68/a0/ea68a0b43d886c28cf22f80402a69a4b.jpg'></img>
            <a className='htext' href="#"> back to main website </a>
        </div>
        <div className='nav-center'>
            <li className='nav-link' href='#'> <Link to="/"> Home</Link> </li>
            <li className='nav-link' href='#'> <Link to ="/Shop">Shop</Link></li>
        </div>
        <div className='nav-right'>
            <Link to ="/cart"><img className='cart-img' src='https://i.pinimg.com/736x/d3/44/8e/d3448ef3e081d59992c31fefab5135d6.jpg'></img></Link>
        </div>


    </div>
  )
}

export default Navbar
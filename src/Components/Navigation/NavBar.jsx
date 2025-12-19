// components/Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faTimes  } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../lib/CartSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <h2>
            ShopTech
        </h2>

        {/* Hamburger pour mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </div>

        {/* Menu */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" >Home </Link>
          </li>
          <li>
            <Link to="/catalogue" > Catalog </Link>
          </li>
          
        </ul>

        {/* Cart */}
        <div className="icons">
          <div className="HeartIcon">
            {wishlist.length > 0 && (
              <span className="likeLength">{wishlist.length}</span>
            )}

            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              className="wishlist"
              onClick={() => navigate('/wishlist')}
            />
          </div>
          <div className="cartIcon">
            {cart.items.length > 0 && (
              <span className="cartLength">{cart.items.length}</span>
            )}

            <FontAwesomeIcon 
                icon={faCartShopping} 
                size="lg" className="cart" 
                onClick={() => dispatch(openSidebar())} 
            />

          </div>

        </div>
      </div>
    </nav>
  );
}

// components/Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/catalogue" > Catalogue </Link>
          </li>
          <li>
            <Link to="/wishlist"  > Wishlist </Link>
          </li>
        </ul>

        {/* Cart */}
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </div>
      </div>
    </nav>
  );
}

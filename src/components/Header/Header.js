import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        E-COMMERCE
      </div>
      <div className="search">
        {/* Search bar component goes here */}
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="user-actions">

        <button className="login-btn"><i className="fas fa-user"></i></button>
        {/* Add to cart button goes here */}
        <button className="add-to-cart-btn"><i className="fas fa-shopping-cart"></i></button>
      </div>
    </header>
  );
}

export default Header;





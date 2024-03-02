import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header container-fluid">
      <div className="row align-items-center">
        <div className="col-md-auto logo">
          {/* Your logo image or text goes here */}
          E-commerce
        </div>
        <div className="col-md search">
          {/* Search bar component goes here */}
          <input type="text" placeholder="Search..." className="form-control" />
          <button className="btn">Search</button>
        </div>
        <div className="col-md-auto user-actions">
          {/* Login button goes here */}
          <button className="btn btn-secondary">Login</button>
          {/* Add to cart button goes here */}
          <button className="btn btn-secondary"><FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
      </div>
    </header>
  );
}

export default Header;



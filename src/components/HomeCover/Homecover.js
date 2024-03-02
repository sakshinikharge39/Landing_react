import React from 'react';
import './Home.css';

const HomeCover = () => {
  return (
    <div className="home-cover">
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/">All Products</a>
          </li>
          <li className="dropdown">
            <a href="/">Women &#9662;</a>
            <div className="dropdown-content">
              <a href="/">Women's Category 1</a>
              <a href="/">Women's Category 2</a>
              <a href="/">Women's Category 3</a>
              {/* Add more women's category links as needed */}
            </div>
          </li>
          <li className="dropdown">
            <a href="/">Men &#9662;</a>
            <div className="dropdown-content">
              <a href="/">Men's Category 1</a>
              <a href="/">Men's Category 2</a>
              <a href="/">Men's Category 3</a>
              {/* Add more men's category links as needed */}
            </div>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
      <img src="https://www.practicalecommerce.com/wp-content/uploads/2019/02/Digital-marketing-apparel-wholesalers.jpg" alt="Home Image" />
    </div>
  );
}

export default HomeCover;


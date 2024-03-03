import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>Women</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Dresses</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pants</a></li>
              <li><a href="#" className="text-white text-decoration-none">Skirts</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <h5>Men</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Shirts</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pants</a></li>
              <li><a href="#" className="text-white text-decoration-none">Hoddies</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <h5>Kids</h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Login</a></li>
              
            </ul>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

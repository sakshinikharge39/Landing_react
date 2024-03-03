import React from "react";
import "./Home.css";

const HomeCover = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                All Products
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarWomenDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Women
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarWomenDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Dresses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Skirts
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarMenDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Men
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarMenDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Shirts 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hoodies
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img
    src="https://www.bynder.com/transform/81a1146e-7e1f-467a-846e-b47febb34db1/blog-bynder-header-2017-december-top-fashion-e-commerce-sites.jpg?io=transform:fit,width:755,height:0&quality=75"
    alt=""
    className="home-image"
  />
  </>
  );
};

export default HomeCover;



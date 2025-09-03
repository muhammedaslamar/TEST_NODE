import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const navItems = {
  Shop: "shop",
  Men: "men",
  Women: "women",
  Kids: "kids",
};

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const handleNavigationClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleNavigationClick(navItems.Shop)}>
          <Link to="/">Shop {menu === navItems.Shop && <hr />}</Link>
        </li>
        <li onClick={() => handleNavigationClick(navItems.Men)}>
          <Link to="/mens">Men {menu === navItems.Men && <hr />}</Link>
        </li>
        <li onClick={() => handleNavigationClick(navItems.Women)}>
          <Link to="/womens">Women {menu === navItems.Women && <hr />}</Link>
        </li>
        <li onClick={() => handleNavigationClick(navItems.Kids)}>
          <Link to="/kids">Kids {menu === navItems.Kids && <hr />}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

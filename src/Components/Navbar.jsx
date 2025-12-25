import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Store Shop</span>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cart"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/addproducts"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contactus"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

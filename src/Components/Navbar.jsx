import React from 'react'
import {NavLink}  from 'react-router-dom'
import '../assets/style/Navbar.css'

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
            to={"/add-product"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about-us"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
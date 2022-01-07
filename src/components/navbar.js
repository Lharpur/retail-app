import React from "react";
import { Link } from "react-router-dom";
import Logout from "../pages/logout";
const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <Logout />
    </div>
  );
};

export default Navbar;

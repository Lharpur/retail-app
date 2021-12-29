import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Shop from "../pages/shop";
import About from "../pages/about";
import Navbar from "../components/navbar";
import Admin from "../pages/admin";
import Register from "../pages/register";
import Login from "../pages/login";

const Header = () => {
  return (
    <nav>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
};

export default Header;

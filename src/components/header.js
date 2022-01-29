import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import Navbar from '../components/navbar'
import Admin from '../pages/admin'
import Register from '../pages/register'
import Login from '../pages/login'
import Cart from '../components/cart'
import Products from './products'
import SingleItem from './singleItem'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute';

const Header = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleItem />} />
        <Route path="/about" element={<About />} />
        {/* Make admin route a protected route */}
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(Header)
